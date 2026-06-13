/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  code?: string;
  description: string;
  longDescription?: string;
  iconName: string;
}

export interface SectorItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  iconName: string;
}

export interface WhyUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string[];
  education: string[];
  imageUrl?: string;
}
