export interface Media {
  createdAt?: string;
  updatedAt?: string;
  alt?: string;
  url?: string;
  thumbnailURL?: string | null;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  id?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  id: string;
}

export interface SiteSettings {
  createdAt: string;
  updatedAt: string;
  globalType: string;
  siteName: string;
  tagline: string;
  logo?: Media;
  favicon?: Media;
  theme?: Record<string, unknown>;
  seo: {
    defaultTitle?: string;
    ogImage?: Media;
    indexingEnabled?: boolean;
  };
  contact: {
    phone?: string;
    email?: string;
    address?: string;
    whatsapp?: string;
  };
  socials?: SocialLink[];
  booking: {
    enabled: boolean;
    slotDuration: number;
  };
  id: string;
}