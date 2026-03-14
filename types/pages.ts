import { Services } from "./services";

export interface ImageData {
  createdAt: string;
  updatedAt: string;
  alt: string;
  url: string;
  thumbnailURL: string | null;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  focalX: number;
  focalY: number;
  id: string;
}

export interface HeroBlockButtons {
  primaryButtonText: string;
  primaryButtonShortText: string;
  secondaryButtonText: string;
  secondaryButtonShortText: string;
}

export interface HeroBlock {
  blockType: "hero-block";
  badge: string;
  title: string;
  highlightedText: string;
  description?: string;
  backgroundImage: ImageData;
  buttons: HeroBlockButtons;
  services: Services[];
  id: string;
}

export interface ServiceBlock {
  blockType: "service-block";
  title: string;
  description?: string;
  subtitle: string;
  services: Services[];
  id: string;
}

// Union de todos los tipos de bloques posibles
export type PageBlock = HeroBlock | ServiceBlock;

export interface Page {
  createdAt: string;
  updatedAt: string;
  title: string;
  slug: string;
  layout: PageBlock[];
  id: string;
}

export type PageResponse = Page;
