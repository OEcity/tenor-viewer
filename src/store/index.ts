import { createStore, Store, useStore as baseUseStore } from "vuex";
import type { InjectionKey } from "vue";
import type { GIFObject } from "@/store/types/GIFObject";

export interface State {
  gifs: GIFObject[];
}
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state() {
    return {
      gifs: [],
    };
  },
  mutations: {
    storeData(state, newData: GIFObject[]) {
      state.gifs = newData;
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
