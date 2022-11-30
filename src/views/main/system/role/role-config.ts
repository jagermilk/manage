import { IForm } from "@/base-ui/form/types"
import { ITable } from "@/base-ui/table/type/table"
export const formConfig: IForm = {
	labelWidth: "100px",
	itemStyle: {
		padding: "10px 40px"
	},
	colLayout: {
		xl: 6,
		lg: 8,
		md: 12,
		sm: 24,
		xs: 24
	},
	formItems: [
		{
			field: "id",
			type: "input",
			label: "id",
			rules: [],
			placeholder: "请输入id"
		},
		{
			field: "name",
			type: "input",
			label: "姓名",
			rules: [],
			placeholder: "请输入姓名"
		},
		{
			field: "into",
			type: "input",
			label: "权限",
			rules: [],
			placeholder: "权限"
		},
		{
			field: "settime",
			type: "timepicker",
			label: "创建时间",
			rules: [],
			placeholder: "请输入创建时间"
		},
        {
			field: "updatetime",
			type: "timepicker",
			label: "更新时间",
			rules: [],
			placeholder: "请输入更新时间"
		}
	]
}
export const tableConfig: ITable = {
	tableItems: [
		{
			prop: "id",
			label: "id",
			width: "230"
		},
		{
			prop: "name",
			label: "姓名",
			width: "230"
		},
		{
			prop: "intro",
			label: "所有权限",
			width: "150"
		},
		{
			prop: "settime",
			label: "创建时间",
			width: "230"
		},
		{
			prop: "updatetime",
			label: "更新时间",
			width: "200"
		}
	],
	showIndexColumn:true,
	showSelect:true,
	title:'角色列表',
	dataname:'role',
	dataNumber:5
}