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
			field: "name",
			type: "input",
			label: "昵称",
			rules: [],
			placeholder: "请输入昵称"
		},
		{
			field: "realname",
			type: "input",
			label: "真实姓名",
			rules: [],
			placeholder: "请输入真实姓名"
		},
		{
			field: "role",
			type: "input",
			label: "角色",
			rules: [],
			placeholder: "请输入角色"
		},
		{
			field: "cellphone",
			type: "input",
			label: "电话",
			rules: [],
			placeholder: "请输入电话"
		},
		{
			field: "department",
			type: "select",
			label: "部门",
			rules: [],
			placeholder: "请选择部门",
			options: [
				{ title: "1", value: "1" },
				{ title: "2", value: "2" }
			]
		},
		{
			field: "creatTime",
			type: "timepicker",
			label: "创建时间",
			rules: [],
			placeholder: "请输入创建时间"
		}
	]
}
export const tableConfig:ITable = {
	tableItems: [
		{
			prop: "name",
			label: "昵称",
			width: "230"
		},
		{
			prop: "realname",
			label: "真实姓名",
			width: "230"
		},
		{
			prop: "status",
			label: "状态",
			width: "150"
		},
		{
			prop: "departmentId",
			label: "部门",
			width: "230"
		},
		{
			prop: "cellphone",
			label: "电话号码",
			width: "200"
		},
		{
			prop: "settime",
			label: "创建时间",
			width: "200"
		},
		{
			prop: "roleId",
			label: "角色",
			width: "200"
		},
		{
			prop: "operate",
			label: "操作",
			width: "200"
		}
	],
	showIndexColumn:true,
	showSelect:true,
	title:'用户列表',
	dataname:'user',
	dataNumber:5
}
