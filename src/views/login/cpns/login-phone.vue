<template>
  <div class="login-phone">
    <el-form label-width="70px" :rules="rules" :model="account">
      <el-form-item label="手机号" prop="number">
        <el-input v-model="account.number" ></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="vcode">
        <div class="getcodes">
        <el-input v-model="account.vcode"></el-input>
        <el-button type="primary">获取验证码 </el-button>
        </div>

      </el-form-item>
    </el-form>
  </div>
</template>


<script lang="ts" setup>
import { defineComponent, reactive, ref } from 'vue'
import {rules} from '../config/account-config'


const account = reactive({
      number: '',
      vcode: ''
    })
    





</script>
<style lang="less" scope>
.getcodes{
    display: flex;
    flex-direction: row;
    .el-input{
        margin-right:10px;
    }
}
.el-input{
  margin-right:15px;
}
.login-phone{
  margin-top:10px;
}
</style>
