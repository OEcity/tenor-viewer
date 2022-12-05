import { createStore, Store, useStore as baseUseStore } from "vuex";
import type { InjectionKey } from "vue";
import { StoreModuleTrending } from "@/store/modules/StoreModuleTrending";
import type { StoreModule } from "@/store/types/StoreModule";
import { StoreModuleSearch } from "@/store/modules/StoreModuleSearch";

export interface State {
  trending: StoreModule;
  search: StoreModule;
}
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  modules: {
    trending: StoreModuleTrending,
    search: StoreModuleSearch,
  },
});

export function useStore() {
  return baseUseStore(key);
}
