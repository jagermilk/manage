<template>
  <div class="user">
    <Hyform :="formConfig"></Hyform>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Hyform from '@/base-ui/form';
import {formConfig} from './user-config'
export default defineComponent({
  name: 'user',
  components:{
      Hyform
    },
  setup() {
    
    return {
      formConfig
    }
  }
})
</script>

<style scoped>
</style>
