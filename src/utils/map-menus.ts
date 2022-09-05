import { IBreadcrumb } from "@/base-ui/breadcrumb";
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
//获取面包屑
export function pathMapBread(userMenus:any[],currentPath:string){
    const breadcrumbs:IBreadcrumb[]=[]
    pathMapToMenu(userMenus,currentPath,breadcrumbs)
    return breadcrumbs
}
export function pathMapToMenu(userMenus:any[],currentPath:string,breadcrumbs?:IBreadcrumb[]):any{
    for(const menu of userMenus){
        if(menu.type===1){
            const findMenu=pathMapToMenu(menu.children??[],currentPath)
            if(findMenu){
                breadcrumbs?.push({name:menu.name,path:menu.url})
                breadcrumbs?.push({name:findMenu.name,path:findMenu.url})
                return findMenu              
            }
        }else if(menu.type===2&&menu.url===currentPath){
            
            return menu
        }
    }
}
export {firstmenu}