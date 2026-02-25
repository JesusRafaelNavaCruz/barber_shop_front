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
export interface Staff {
  name: string;
  bio: string;
  speciality: string;
  photo?: Media;
  active?: boolean;
  services: Services;
  updatedAt?: string;
  createdAt?: string;
}
