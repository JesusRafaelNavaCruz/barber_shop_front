import { Services } from "./services";

export interface Media {
  id?: string;
  alt?: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
}

export interface SocialNetwork {
  id: string;
  platform: string;
  url: string;
}
export interface Staff {
  name: string;
  bio: string;
  speciality: string;
  photo?: Media;
  active?: boolean;
  services: Services;
  socials: SocialNetwork[],
  updatedAt?: string;
  createdAt?: string;
}
