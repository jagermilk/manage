<template>
	<div class="user">
		<PageSearch :formConfig="formConfig"></PageSearch>

		<PageTable :tableConfig="tableConfig"></PageTable>
	</div>
</template>

<script lang="ts">
import { defineComponent} from "vue"
import PageSearch from "@/components/page-search/index"
import PageTable from "@/components/page-table/src/page-table.vue"
import { formConfig } from '@/views/main/system/user/user-config'
import { tableConfig } from "@/views/main/system/user/user-config"

export default defineComponent({
	name: "user",
	setup() {
		return {
			tableConfig
      ,
      formConfig
		}
	},
	components: { PageSearch, PageTable }
})
</script>

<style lang="less" scoped></style>
