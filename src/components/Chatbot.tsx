import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Loader2, Bot } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Message {
  role: "user" | "model";
  text: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      text: "Bonjour ! Je suis l'assistant virtuel de Kaparoc Ingénierie. Comment puis-je vous aider aujourd'hui concernant nos services ou études géotechniques ?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const toggleChat = () => setIsOpen((prev) => !prev);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMsg,
          history: messages.slice(1).map((m) => ({
            role: m.role,
            text: m.text,
          })), // Send all messages except the first greeting as history
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Network response was not ok");
      }

      setMessages((prev) => [...prev, { role: "model", text: data.reply }]);
    } catch (error: any) {
      console.error("Chat Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: error.message?.includes("surchargé")
            ? "⏳ " + error.message
            : "Désolé, une erreur est survenue lors de la connexion au serveur. Veuillez réessayer plus tard.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 sm:right-8 w-[calc(100vw-32px)] sm:w-[400px] h-[600px] max-h-[calc(100vh-120px)] bg-white rounded-2xl shadow-2xl border border-gray-150 flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-brand-charcoal border-b border-brand-orange/20 px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-orange to-[#d86603] rounded-full flex items-center justify-center shadow-inner">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-title font-bold text-sm tracking-wide">Assistant Kaparoc</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    <span className="text-gray-300 text-[11px] font-semibold tracking-wider uppercase">En ligne</span>
                  </div>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="text-white/70 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors focus:outline-none"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5 bg-gray-50/50 relative">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[90%] p-3 xl:p-4 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-brand-orange text-white rounded-tr-sm ml-auto"
                        : "bg-white border border-gray-100 text-brand-charcoal rounded-tl-sm shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)]"
                    }`}
                  >
                    {msg.role === "user" ? (
                      <div className="whitespace-pre-wrap">{msg.text}</div>
                    ) : (
                      <div className="markdown-body text-sm font-medium">
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          components={{
                            p: ({ node, ...props }) => <p className="mb-3 last:mb-0 text-gray-700 font-light" {...props} />,
                            ul: ({ node, ...props }) => <ul className="list-disc pl-5 mb-3 space-y-1 text-gray-700 font-light" {...props} />,
                            ol: ({ node, ...props }) => <ol className="list-decimal pl-5 mb-3 space-y-1 text-gray-700 font-light" {...props} />,
                            li: ({ node, ...props }) => <li className="pl-1" {...props} />,
                            h3: ({ node, ...props }) => <h3 className="font-title font-bold text-base mt-4 mb-2 text-brand-brown" {...props} />,
                            h4: ({ node, ...props }) => <h4 className="font-title font-semibold text-sm mt-3 mb-1 text-brand-charcoal" {...props} />,
                            strong: ({ node, ...props }) => <strong className="font-bold text-brand-orange" {...props} />,
                            a: ({ node, ...props }) => <a className="text-brand-orange hover:text-brand-brown hover:underline transition-colors" {...props} />,
                            hr: ({ node, ...props }) => <hr className="my-4 border-gray-100" {...props} />,
                          }}
                        >
                          {msg.text}
                        </ReactMarkdown>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-100 p-3 rounded-2xl rounded-tl-sm shadow-sm">
                    <Loader2 className="w-5 h-5 text-brand-orange animate-spin" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-150">
              <div className="flex items-center gap-2.5 relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Posez votre question ici..."
                  className="flex-1 bg-gray-50/80 border border-gray-200 rounded-2xl px-5 py-3.5 text-[13px] outline-none focus:border-brand-orange/40 focus:ring-4 focus:ring-brand-orange/10 focus:bg-white transition-all text-brand-charcoal placeholder-gray-400"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-12 h-12 rounded-2xl bg-brand-orange hover:bg-[#d86603] text-white flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed transition-all shrink-0 shadow-sm shadow-brand-orange/20"
                >
                  <Send className="w-5 h-5 ml-0.5" />
                </button>
              </div>
              <div className="text-center mt-3">
                <span className="text-[10px] text-gray-400 font-medium">L'IA peut faire des erreurs. Vérifiez toujours les informations importantes.</span>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Floating Button — above chatbot */}
      <motion.a
        href="https://wa.me/221783863030"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-[88px] right-6 sm:bottom-[104px] sm:right-8 w-14 h-14 bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full shadow-lg shadow-[#25D366]/30 flex items-center justify-center z-50 transition-colors focus:outline-none"
        aria-label="Contacter sur WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.654-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </motion.a>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleChat}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-14 h-14 bg-brand-orange hover:bg-[#d86603] text-white rounded-full shadow-lg shadow-brand-orange/30 flex items-center justify-center z-50 transition-colors focus:outline-none"
        aria-label="Toggle chat assistant"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </motion.button>
    </>
  );
}
