import type { GIFObject } from "@/store/types/GIFObject";
import type { Category } from "@/store/types/Category";

export interface StoreModuleFavouritesInterface {
  gifs: GIFObject[];
  categories: Category[];
}
