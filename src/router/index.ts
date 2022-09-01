import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import Login from "../views/Login.vue"
import Main from '../views/main/Main.vue'
import LocalCache from '@/utils/cache'
import {mapMenuToRoutes} from '@/utils/map-menus'
import  store  from '@/store/main/index'
import {firstmenu} from '@/utils/map-menus'
const routes: Array<RouteRecordRaw> = [
	{
		path: "/login",
		name: "login",
		component: Login,
	},
	{
		path: "/",
		redirect: "/Main",
	},
	{
		path: "/Main",
		name: "Main",
		component: Main,
		children:[]
	},
	{
		path:'/:pathMatch(.*)*',
		name: "not-fonud",
		component:()=>import('@/views/not-found/not-found.vue')	}
	// {
	//   path: '/about',
	//   name: 'about',
	//   // route level code-splitting
	//   // this generates a separate chunk (about.[hash].js) for this route
	//   // which is lazy-loaded when the route is visited.
	//   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
	// }
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})
//导航守卫
router.beforeEach((to)=>{
	if(to.path!=='/login'){
		const token=LocalCache.getCache('token')
		if(!token){
			return '/login'
		}
	}
	const userMenus=(store.state as any).loginmudule.userMenu
	const routes=mapMenuToRoutes(userMenus)
	routes.forEach((route)=>{
		router.addRoute('Main',route)  
	  })
	if(to.path==='/Main'){
		return firstmenu.path
	  }
})
export default router
