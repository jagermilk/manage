import { createStore, Store,useStore as useVuexStore } from "vuex"
import {loginmudule} from '../login/login'
import {IRootState,IStoreType} from '../main/types'
import { InjectionKey } from "vue"
import {getsystem} from './system/system'
export interface State {
	count: number;
  }
const key: InjectionKey<Store<State>> = Symbol();
export const store= createStore<IRootState>({
	state(){
		return{
		name: "jagermilk",
		age: 24,
		
		}
		
	},
	getters: {},
	mutations: {
		
	},
	actions: {
		
	},
	modules: {loginmudule,getsystem}
})


export function setupStore() {
	store.dispatch('loginmudule/loadLocalLogin')
  }
export function useStore():Store<IStoreType>{
	return useVuexStore()
}


