import { createStore, Store,useStore as useVuexStore } from "vuex"
import {loginmudule} from '../login/login'
import {IRootState,IStoreType} from '../main/types'
import { InjectionKey } from "vue"
import type { App } from "vue"
export interface State {
	count: number;
  }
const key: InjectionKey<Store<State>> = Symbol();
const store= createStore<IRootState>({
	state(){
		return{
		name: "jagermilk",
		age: 24	
		}
		
	},
	getters: {},
	mutations: {},
	actions: {},
	modules: {loginmudule}
})


export function setupStore() {
	store.dispatch('loginmudule/loadLocalLogin')
  }

export function useStore():Store<IStoreType>{
	return useVuexStore()
}
export default store

