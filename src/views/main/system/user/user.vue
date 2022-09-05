<template>
  <div class="user">
    <PageSearch></PageSearch>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageSearch from '@/components/page-search/index'
import { useStore } from 'vuex'


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
    components: { PageSearch }
})
</script>

<style scoped>
</style>
