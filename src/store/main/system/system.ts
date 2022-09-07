import { Module } from "vuex"
import { IRootState } from "@/store/main/types"
import { IList } from "@/store/main/system/types"
import { getlistRequest } from "@/service/main/main"
//module<state类型，根类型>

export const getsystem: Module<IList, IRootState> = {
	namespaced: true,
	state() {
		return {
			userlist: [],
			usertotal: 0,
			rolelist: [],
			roletotal: 0
		}
	},
	mutations: {
		changeuserlist(state, list: Array<any>) {
			state.userlist = list
		},
		changeusertotal(state, total: number) {
			state.usertotal = total
		},
		changerolelist(state, list: Array<any>) {
			state.rolelist = list
		},
		changeroletotal(state, total: number) {
			state.roletotal = total
		}
	},
	actions: {
		async getlist({ commit }, payload: any) {
			const { dataname, params } = payload
			let url = ""
			switch (dataname) {
				case "user":
					url = "/userlist"
					break
				case "role":
					url = "/rolelist"
					break
			}
			const pagelist = await getlistRequest({ url, params })
			console.log(pagelist)
			switch (dataname) {
				case "user":
					commit("changeuserlist", pagelist)
					commit("changeusertotal", pagelist.length + 1)
					break
				case "role":
					commit("changerolelist", pagelist)
					commit("changeroletotal", pagelist.length + 1)
					break
			}
		}
	}
}
