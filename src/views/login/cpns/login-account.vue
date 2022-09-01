<template>
  <div class="login-account">
    <el-form label-width="70px" :rules="rules" :model="account1" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account1.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account1.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>

</template>


<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/account-config'
import { ElForm } from 'element-plus'
import LocalCache from '@/utils/cache'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    
    const store = useStore()
    const account1 = reactive({
      name: LocalCache.getCache('name') ?? '',
      password: LocalCache.getCache('password') ?? ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginAction = (isremenber: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {//开始进行登陆验证
          if (isremenber) {
            LocalCache.setCache('name', account1.name)
            LocalCache.setCache('password', account1.password)
           
          }//是否需要记住密码
          else {
            LocalCache.clearCache()
          }
          store.dispatch('loginmudule/accountLoginAction', { ...account1 })
        }

      });
    }
    return { account1, rules, formRef, loginAction }
  }
})


</script>
<style lang="less">
.el-input {
  margin-right: 15px;
}

.login-account {
  margin-top: 10px;
}
</style>
