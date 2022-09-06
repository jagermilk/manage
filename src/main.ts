import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import {setupStore} from './store/main'
import {store} from "./store/main"
import hyRequest from "./service/index"
import './assets/css/index.css'
import 'normalize.css'
import {globalRegister} from '@/global/index'


const app=createApp(App)

app.use(store)
app.use(globalRegister)
setupStore()
app.use(router)
app.mount("#app")

interface DataType{
    data:any
    returnCode:string
    success:boolean
}
// hyRequest.request<DataType>({
//     url:'',
//     method: 'GET',
//     interceptors:{
//         requestInterceptor:(config)=>{
//             console.log("单独请求的requestconfig");
//             return config
//         },
//         responseInterceptor:(res)=>{
//             console.log("单独请求的responseconfig");
//             return res
//         }
//     }
// }).then((res)=>{
//     console.log(res);
// })