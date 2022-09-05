import { Module } from "vuex";
import {IRootState} from '@/store/main/types'
import {IList} from '@/store/main/system/types'
import {getlistRequest} from '@/service/main/main'
//module<state类型，根类型>

export const getsystem:Module<IList,IRootState>={
    namespaced:true,
    state(){
        return{
        userlist:[],
		usertotal:0  
        }
       
    },
    mutations:{
        changeuserlist(state,list:Array<any>){
			state.userlist=list
		},
		changeusertotal(state,total:number){
			state.usertotal=total
		}
    },
    actions:{
        async getlist({commit},payload:any){
            const {url,params}=payload
            const pagelist=await getlistRequest({url,params})
            console.log(pagelist)
            commit('changeuserlist',pagelist)
            commit('changeusertotal',pagelist.length+1)
		}
           
        
    }
}
