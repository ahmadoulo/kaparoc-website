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
