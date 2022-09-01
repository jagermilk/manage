import { ILoginState } from "../login/types"
export interface IRootState {
	name: string
	age: number
}
export interface IRootWithModule{
	loginmudule:ILoginState
}
export type IStoreType=IRootState&IRootWithModule