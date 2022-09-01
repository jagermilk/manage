//service统一出口
import HYRequest from "./request/request"
import { BASE_URL, BASE_NAME, TIME_OUT } from "./request/config"

const hyRequest = new HYRequest({
	baseURL: BASE_URL,
	timeout: TIME_OUT,
	interceptors: {
		requestInterceptor: (config) => {
			console.log('请求成功拦截')
			// const {name,password}=config
            // if(token){
            //     // config.headers.Authorization='Bearer ${token}'
            // }
			return config
		},
		requestInterceptorCatch: (err) => {
			console.log('请求失败拦截')
			return err
		},
		responseInterceptor: (res) => {
			console.log('响应成功拦截')
			return res
		},
		responseInterceptorCatch: (err) => {
			console.log('响应失败拦截')
			return err
		}
	}
}) //导出之前必须声明

export default hyRequest
