<template>
	<div class="page-table">
		<Table
			:="tableConfig"
			:tabledata="tabledata"
			@selectionchange="selectionchange"
		>
			<template #adddata>
				<el-button type="primary" size="medium">新增用户</el-button>
			</template>
			<template #footer>
				<Pagination></Pagination>
			</template>
			<template #status="scope">
				<el-button
					plain
					size="small"
					:type="scope.row.status ? 'success' : 'danger'"
					>{{ scope.row.status ? "启用" : "禁用" }}</el-button
				>
			</template>
			<template #updatetime="scope">
				<strong>{{ $filters.formatTime(scope.row.updatetime) }}</strong>
			</template>
			<template #settime="scope">
				<strong>{{ $filters.formatTime(scope.row.settime) }}</strong>
			</template>
			<template #operate>
				<el-button icon="Edit" size="small">修改</el-button>
				<el-button icon="Delete" size="small">删除</el-button>
			</template>
		</Table>
	</div>
</template>

<script lang="ts">
import { computed } from "vue"
import Table from "@/base-ui/table/src/table.vue"
import { useStore } from "vuex"
import { log } from "console"
import Pagination from "../../../base-ui/pagination/src/pagination.vue"
export default {
	components: { Table, Pagination },
	props: {
		tableConfig: {
			type: Object
		}
	},
	setup(props: any) {
		const store = useStore()
		const modulename = props.tableConfig.dataname
		let result: any = ["1", "2"]
		
		const tabledata = computed(() => {
			console.log(modulename)

			switch (modulename) {
				case "user":
					result = JSON.parse(JSON.stringify(store.state.getsystem.userlist))
					console.log(result)
					break

				case "role":
					result = JSON.parse(JSON.stringify(store.state.getsystem.rolelist))
					console.log(result)
					break
			}
			return result[0]
		})
		store.dispatch("getsystem/getlist", {
			dataname: modulename,
			params: {
				id: "",
				name: ""
			}
		})
		const selectionchange = (value: any) => {
			console.log(value)
		}
		return {
			selectionchange,
			tabledata
		}
	}
}
</script>

<style lang="less" scoped>
.page-table {
	margin: 10px;
	background-color: white;
}
</style>
