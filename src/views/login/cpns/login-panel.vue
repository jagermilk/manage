<template>
    <div class="panel">
        <h1>后台管理系统</h1>
        <el-tabs type="border-card" class="demo-tabs" stretch v-model="currentTab">
            <el-tab-pane name="account">
                <template #label>
                    <span class="custom-tabs-label">
                        <User style="width: 1em; height: 1em; " />
                        <span>账号登陆</span>
                    </span>
                </template>
                <LoginAccount ref="accoutRef"></LoginAccount>
            </el-tab-pane>
            <el-tab-pane name="phone">
                <template #label>
                    <span class="custom-tabs-label">
                        <ChatLineSquare style="width: 1em; height: 1em;" />
                        <span>手机号登陆</span>
                    </span>
                </template>
                <LoginPhone ref="phoneRef"></LoginPhone>
            </el-tab-pane>

        </el-tabs>
          <div class="account-remenber">
            <el-checkbox v-model="isremenber">记住密码</el-checkbox>
            <el-link primary>忘记密码</el-link>
        </div>
        <el-button primary @click="handleloginclick">立即登陆</el-button>
    </div>
</template>

<script lang="ts" setup>

import { User, ChatLineSquare } from '@element-plus/icons-vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
import {ref} from 'vue'
//属性
 const isremenber =ref(true)
 const accoutRef=ref<InstanceType<typeof LoginAccount>>()
const phoneRef=ref<InstanceType<typeof LoginPhone>>()
 const currentTab=ref('account')
 //方法
 const handleloginclick=()=>{
    if(currentTab.value==='account'){
       accoutRef.value?.loginAction(isremenber.value) 
    }else{
        console.log('掉用phone里面的loginA');
        
    }
    
 }
</script>

<style lang="less" scoped>
.panel {
    width: 25%;
    margin: auto;
    padding: 250px;

    h1 {
        font-size: 20px;
    }

    .el-tabs {
        width: 70%;
        margin:auto;
        margin-top: 20px
    }
}

.demo-tabs>.el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}

.demo-tabs .custom-tabs-label .el-icon {
    vertical-align: middle;
}

.demo-tabs .custom-tabs-label span {
    vertical-align: middle;
    margin-left: 4px;
}
.account-remenber{
  width:70%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  .el-checkbox{
    margin-right:50px;
  }
  .el-link{
    margin-left:50px;
  }
}
.el-button{
    width:70%;
    // background-color:rgb(128, 177, 222);
    // color:rgb(112, 105, 105)
}
</style>