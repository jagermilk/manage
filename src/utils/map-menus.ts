import { fi } from "element-plus/es/locale";
import { RouteRecordRaw } from "vue-router";
let firstmenu:any=null
export function mapMenuToRoutes(userMenus:any[]):RouteRecordRaw[]{
    const routes:RouteRecordRaw[]=[]

    //默认加载所有的routes
    const allRoutes:RouteRecordRaw[]=[]
    const routeFiles=require.context('../router/main',true,/\.ts/)//加载某个文件夹(递归查找)
    routeFiles.keys().forEach(key => {
        const route=require('../router/main'+key.split('.')[1])
        allRoutes.push(route.default);
        
    });
    //根据菜单获取需要添加的routes
    const _recureseGetRoute=(menus:any[])=>{
        for(const menu of menus){
            if(menu.type===2){
                const route=allRoutes.find((route)=>route.path===menu.url)
                if(route){
                  routes.push(route)  
                }
                if(!firstmenu){
                    firstmenu=route
                    console.log(firstmenu);
                    
                }
            }
            else{
                _recureseGetRoute(menu.children)
            }
        }
    }
    _recureseGetRoute(userMenus)
    return routes
}

export function pathMapToMenu(userMenus:any[],currentPath:string):any{
    for(const menu of userMenus){
        if(menu.type===1){
            const findMenu=pathMapToMenu(menu.children??[],currentPath)
            if(findMenu){
                return findMenu              
            }
        }else if(menu.type===2&&menu.url===currentPath){
            console.log(menu);
            return menu
        }
    }
}
export {firstmenu}