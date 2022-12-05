import type { GIFObject } from "@/store/types/GIFObject";

export interface StoreModule {
  gifs: GIFObject[];
  lastPosition?: string;
}
