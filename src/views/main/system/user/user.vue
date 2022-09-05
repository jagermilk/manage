<template>
  <div class="user">
    <Hyform :="formConfig" v-model="formData"></Hyform>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'
import Hyform from '@/base-ui/form';
import {formConfig} from './user-config'
export default defineComponent({
  name: 'user',
  components:{
      Hyform
    },
  setup() {
    const formData=ref({
      name:'',
      age:'',
      place:'',
      passwords:'',
      sports:'',
      creatTime:''
    })
    return {
      formConfig,
      formData
    }
  }
})
</script>

<style scoped>
</style>
