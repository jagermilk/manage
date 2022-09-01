import hyRequest from "..";
import {IAccount} from './type'

enum LoginAPI{
    AccountLogin='/login',
    UserLogin='/users',
    UserMenus='/role'
}

export function accountLoginRequest(account:IAccount){
    return hyRequest.get({
        url:LoginAPI.AccountLogin,
        params:account
    })
}
export function requestUserInfoById(obj:object){
    return hyRequest.get({
        url:LoginAPI.UserLogin,
        params:obj
    })
}
export function requestUserMenusByRoleId(obj:object){
    return hyRequest.get({
        url:LoginAPI.UserMenus,
        params:obj
    })
}
