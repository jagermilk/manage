import axios from "axios"
import type { AxiosInstance } from "axios"
import type { HYRequestConfig, HYRequestInterceptors } from "./type"
import { ElLoading } from "element-plus"
class HYRequest {
	//	类的封装性更强
	instance: AxiosInstance
	interceptors?: HYRequestInterceptors
	loading?: any
	showloading?: boolean
	constructor(config: HYRequestConfig) {
		this.instance = axios.create(config)
		this.interceptors = config.interceptors
		this.showloading = config.showloading ?? true
		this.instance.interceptors.request.use(
			this.interceptors?.requestInterceptor,
			this.interceptors?.requestInterceptorCatch
		)
		this.instance.interceptors.response.use(
			this.interceptors?.responseInterceptor,
			this.interceptors?.responseInterceptorCatch
		)
		this.instance.interceptors.request.use(
			(config) => {
				if (this.showloading) {
					this.loading = ElLoading.service({
						lock: true,
						text: "正在请求数据",
						background: "rgba(0,0,0,0.5)"
					})
				}
				
				return config
			},
			(err) => {
				return err
			}
		)
		this.instance.interceptors.response.use(
			(res) => {
				const data = res.data
				//将loading移除
				setTimeout(() => {
					this.loading?.close()
				}, 1000)
				return data
				// if (data.returncode === "1001") {
				// 	console.log("1001的错误")
				// } else {
				
				// }
			}, //拿到真正的data数据
			(err) => {
				if (err.response.status === 404) {
					console.log("404的错误")
				}
				return err
			} //拦截错误信息
		)
	} //	用构造器构造实例，目的是为了不同的实例对象互不干扰
	request<T = any>(config: HYRequestConfig): Promise<T> {
		return new Promise((resolve, reject) => {
			this.instance
				.request<any, T>(config)
				.then((res) => {	
					resolve(res as unknown as Promise<T>)
				})
				.catch((err) => {
					reject(err)
					console.log(err);
					
				})
		})
	}
	get<T = any>(config: HYRequestConfig): Promise<T> {
		return this.request({...config, method: "GET" })
	}

	post<T = any>(config: HYRequestConfig): Promise<T> {
		return this.request({ ...config, method: "POST" })
	}

	patch<T = any>(config: HYRequestConfig): Promise<T> {
		return this.request({ ...config, method: "PATCH" })
	}

	delete<T = any>(config: HYRequestConfig): Promise<T> {
		return this.request({ ...config, method: "DELETE" })
	}
}
export default HYRequest
