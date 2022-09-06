<template>
  <div class="user">
    <PageSearch></PageSearch>
    <PageTable></PageTable>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent,computed } from 'vue'
import PageSearch from '@/components/page-search/index'
import { useStore } from 'vuex'
import PageTable from '@/components/page-table/src/page-table.vue'


export default defineComponent({
    name: "user",
    setup() {
      const store = useStore()
      store.dispatch('getsystem/getlist',{
        url:'/userlist',
        params:{
          id:'',
          name:''
        }
      })
        
    },
    components: { PageSearch, PageTable }
})
</script>

<style scoped>
</style>
