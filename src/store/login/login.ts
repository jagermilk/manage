import { Module } from "vuex";
import {ILoginState} from './types'
import {IRootState} from '../main/types'
import {accountLoginRequest,requestUserInfoById,requestUserMenusByRoleId} from '@/service/login/login'
import { IAccount } from "@/service/login/type"
import {mapMenuToRoutes} from '@/utils/map-menus'
import LocalCache from '@/utils/cache'
import router from "@/router";
//module<state类型，根类型>

export const loginmudule:Module<ILoginState,IRootState>={
    namespaced:true,
    state(){
        return{
            token:LocalCache.getCache('name') ?? '',
            userInfo:LocalCache.getCache('userInfo') ?? '',
            userMenu:LocalCache.getCache('userMenu') ?? '',
        }
    },
    mutations:{
        changeToken(state,token:string){
            state.token=token
        },
        changeUserInfo(state,userInfo:any){
            state.userInfo=userInfo
        },
        changeUserMenu(state,userMenu:any){
            state.userMenu=userMenu
            //usermenus=>routes=>router.main.
            const route=mapMenuToRoutes(userMenu)
            console.log(route);
            //将route添加到router.main.children
            route.forEach((route)=>{
              router.addRoute('Main',route)  
            })
            
        }
    },
    actions:{
        async accountLoginAction({commit},payload:IAccount){
            
            const {name,password}=payload
            if(name=='jagermilk'&&password=='j12345'||name=='xuraodan'&&password=='x12345'){
            //实现登陆逻辑
            const loginResult=await accountLoginRequest(payload)
            const {token,id}=loginResult[0]   
            //给后端post数据，得到id和token。这里技术有限，手动给值
            commit('changeToken',token)
            LocalCache.setCache('token',token)

            //请求用户信息
            const userInfoResult=await requestUserInfoById({id,name})
            commit('changeUserInfo',userInfoResult[0])
            LocalCache.setCache('userInfo',userInfoResult[0])
            

            //请求用户菜单
            const {roleId}=userInfoResult[0]
            console.log(roleId);
            const userMenuResult=await requestUserMenusByRoleId({roleId,id})

            console.log(userMenuResult[0].menu[0].muenList); 
            commit('changeUserMenu',userMenuResult[0].menu[0].muenList)
            LocalCache.setCache('userMenu',userMenuResult[0].menu[0].muenList)
             
            
            //路由跳转
            router.push('/Main')}},
            loadLocalLogin({ commit }){
                const token = LocalCache.getCache('token')
                if (token) {
                  commit('changeToken', token)
                }
                const userInfo = LocalCache.getCache('userInfo')
                if (userInfo) {
                  commit('changeUserInfo', userInfo)
                }
                const userMenu = LocalCache.getCache('userMenu')
                if (userMenu) {
                  commit('changeUserMenu', userMenu)
                }
              }
            
           
        
    }
}
