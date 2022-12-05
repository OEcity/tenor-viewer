import type { Module } from "vuex";
import type { StoreModuleFavouritesInterface } from "@/store/types/StoreModuleFavouritesInterface";
import type { GIFObject } from "@/store/types/GIFObject";
import type { Category } from "@/store/types/Category";

export const StoreModuleFavourites: Module<any, any> = {
  namespaced: true,
  state(): StoreModuleFavouritesInterface {
    return {
      gifs: [],
      categories: [],
    };
  },
  mutations: {
    toggleFavouriteGif(
      state: StoreModuleFavouritesInterface,
      gifPayload: GIFObject
    ) {
      const incomingGIF = gifPayload;
      const storedGIFsIds = state.gifs.map((gif) => gif.id);
      if (storedGIFsIds.includes(incomingGIF.id)) {
        state.gifs = state.gifs.filter((gif) => gif.id !== incomingGIF.id);
      } else {
        state.gifs.push(gifPayload);
      }
    },
    clearData(state) {
      state.gifs = [];
    },
    setFavourites(state, categories: Category[]) {
      state.categories = categories;
    },
  },
};
