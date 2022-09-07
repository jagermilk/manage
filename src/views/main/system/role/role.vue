<template>
  <div class="role">
    <PageSearch :formConfig="formConfig"></PageSearch>

		<PageTable :tableConfig="tableConfig"></PageTable>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageSearch from "@/components/page-search/index"
import PageTable from "@/components/page-table/src/page-table.vue"
import { formConfig } from '@/views/main/system/role/role-config'
import { tableConfig } from "@/views/main/system/role/role-config"
export default defineComponent({
  name: 'role',
  setup() {
    return {
      formConfig,
      tableConfig
    }
  },
  components:{
    PageSearch,
    PageTable
  }
})
</script>

<style scoped></style>
