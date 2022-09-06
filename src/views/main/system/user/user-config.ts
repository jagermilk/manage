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
			label: "用户名",
			rules: [],
			placeholder: "请输入用户名"
		},
		{
			field: "age",
			type: "input",
			label: "年龄",
			rules: [],
			placeholder: "请输入年龄"
		},
		{
			field: "place",
			type: "input",
			label: "籍贯",
			rules: [],
			placeholder: "请输入籍贯"
		},
		{
			field: "passwords",
			type: "input",
			label: "密码",
			rules: [],
			placeholder: "请输入密码"
		},
		{
			field: "sports",
			type: "select",
			label: "喜欢的运动",
			rules: [],
			placeholder: "请输入喜欢的运动",
			options: [
				{ title: "羽毛球", value: "volleyball" },
				{ title: "足球", value: "football" }
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
export const tableConfig: ITable = {
	tableItems: [
		{
			prop: "name",
			label: "昵称",
			width: "250"
		},
		{
			prop: "realname",
			label: "真实姓名",
			width: "270"
		},
		{
			prop: "status",
			label: "状态",
			width: "250"
		},
		{
			prop: "departmentId",
			label: "部门",
			width: "250"
		},
		{
			prop: "cellphone",
			label: "电话号码",
			width: "250"
		},
		{
			prop: "settime",
			label: "创建时间",
			width: "250"
		},
		{
			prop: "roleId",
			label: "角色",
			width: "250"
		}
	]
}
