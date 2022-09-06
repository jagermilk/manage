type IFormType = "input" | "password" | "select" | "timepicker"
export interface ITableItem {
	prop: string,
	label: string,
	width: string
}
export interface ITable {
	tableItems: ITableItem[]
	labelWidth?: string
	colLayout?: any
	itemStyle?: any
}