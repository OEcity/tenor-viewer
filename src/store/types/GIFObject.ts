import type { GIFMediaFormats } from "@/store/types/GIFMediaFormats";

export interface GIFObject {
  content_description: string;
  created: number;
  hasaudio: boolean;
  id: string;
  itemurl: string;
  tags: string[];
  title: string;
  url: string;
  media_formats: GIFMediaFormats;
}
