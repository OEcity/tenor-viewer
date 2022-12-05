import type { Module } from "vuex";
import type { StoreModule } from "@/store/types/StoreModule";

export const StoreModuleTrending: Module<any, any> = {
  namespaced: true,
  state(): StoreModule {
    return {
      gifs: [],
      lastPosition: undefined,
    };
  },
  mutations: {
    storeData(state, { results, next }) {
      if (state.lastPosition == undefined) {
        state.gifs = results;
      } else {
        state.gifs = [...state.gifs, ...results];
      }

      state.lastPosition = next;
    },
    clearData(state) {
      state.gifs = [];
      state.lastPosition = undefined;
    },
  },
};
