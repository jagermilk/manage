import type { AxiosRequestConfig, AxiosResponse } from "axios"

export interface HYRequestInterceptors {
	requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
	requestInterceptorCatch?: (error: any) => any
	responseInterceptor?: (config: AxiosResponse) => AxiosResponse
	responseInterceptorCatch?: (error: any) => any
} //	定义拦截器接口

export interface HYRequestConfig extends AxiosRequestConfig {
	interceptors?: HYRequestInterceptors
	showloading?:boolean
} //  在axiosrequestconfig已经定义的许多接口上，扩展拦截器接口
