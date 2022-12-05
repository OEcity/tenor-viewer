import { createStore, Store, useStore as baseUseStore } from "vuex";
import type { InjectionKey } from "vue";
import { StoreModuleTrending } from "@/store/modules/StoreModuleTrending";
import type { StoreModule } from "@/store/types/StoreModule";
import { StoreModuleSearch } from "@/store/modules/StoreModuleSearch";
import type { StoreModuleFavouritesInterface } from "@/store/types/StoreModuleFavouritesInterface";
import { StoreModuleFavourites } from "@/store/modules/StoreModuleFavourites";

export interface State {
  trending: StoreModule;
  search: StoreModule;
  favourites: StoreModuleFavouritesInterface;
}
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  modules: {
    trending: StoreModuleTrending,
    search: StoreModuleSearch,
    favourites: StoreModuleFavourites,
  },
});

export function useStore() {
  return baseUseStore(key);
}
