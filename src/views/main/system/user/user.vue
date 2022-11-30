<template>
	<div class="user">
		emit('resetBtnClick')
		<PageSearch :formConfig="formConfig" @resetBtnClick="handleResetClick" @queryBtnClick="handleQueryClick">
		</PageSearch>
		<PageTable :tableConfig="tableConfig" ref="PageTableRef"></PageTable>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import PageSearch from "@/components/page-search/index"
import PageTable from "@/components/page-table/src/page-table.vue"
import { formConfig } from '@/views/main/system/user/user-config'
import { tableConfig } from "@/views/main/system/user/user-config"
import {usePageSearch} from '@/hook/use-page-search'
import { AnyAaaaRecord } from "dns"

export default defineComponent({
	name: "user",
	setup() {
		const { PageTableRef,handleResetClick,handleQueryClick}=usePageSearch()
		return {
			tableConfig,
			formConfig,
			PageTableRef,
			handleResetClick,
			handleQueryClick

		}
	},
	components: { PageSearch, PageTable }
})
</script>

<style lang="less" scoped>

</style>
