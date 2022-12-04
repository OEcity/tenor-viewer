import { createStore, Store, useStore as baseUseStore } from "vuex";
import type { InjectionKey } from "vue";
import type { GIFObject } from "@/store/types/GIFObject";

export interface State {
  gifs: GIFObject[];
  lastPosition?: string;
}
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state() {
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
  },
});

export function useStore() {
  return baseUseStore(key);
}
