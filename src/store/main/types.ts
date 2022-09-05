import { ILoginState } from "../login/types"
import {IList} from '@/store/main/system/types'
export interface IRootState {
	name: string
	age: number
}
export interface IRootWithModule{
	loginmudule:ILoginState,
	getsystem:IList
}
export type IStoreType=IRootState&IRootWithModule