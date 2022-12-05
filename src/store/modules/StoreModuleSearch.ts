import type { Module } from "vuex";
import type { StoreModule } from "@/store/types/StoreModule";

export const StoreModuleSearch: Module<any, any> = {
  namespaced: true,
  state(): StoreModule {
    return {
      gifs: [],
      lastPosition: undefined,
    };
  },
  mutations: {
    storeNewData(state, { results, next }) {
      state.gifs = results;
      state.lastPosition = next;
    },
    appendData(state, { results, next }) {
      state.gifs = [...state.gifs, ...results];
      state.lastPosition = next;
    },
    clearData(state) {
      state.gifs = [];
    },
  },
};
