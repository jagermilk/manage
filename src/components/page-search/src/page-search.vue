<template>
    <div class="page-search">
        <Hyform :="formConfig" v-model="formData">
            <template #header>
                高级检索
            </template>
            <template #footer>
                <div class="footer">
                    <button primary @click="handleResearchClick">
                        <el-icon><Search /></el-icon>
                        搜索</button>
                    <button primary @click="handleResetClick">
                        <el-icon><Loading /></el-icon>
                        重置</button>
                </div>
            </template>
        </Hyform>
    </div>
</template>

<script lang="ts">

import Hyform from '@/base-ui/form';
import { ref } from 'vue'
export default {
    props:{
        formConfig:{
            type:Object
        }
    },
    components: {
        Hyform
    },
    emits:['resetBtnClick','queryBtnClick'],
    setup(props:any,{emit}:any) {
        const formItems = props.formConfig?.formItems ?? []
        const formOriginData:any={}
        for(const item of formItems){
            formOriginData[item.field]=''
        }
        const formData=ref(formOriginData)
        //优化二 监听重置按钮
        const handleResetClick=()=>{
            formData.value=formOriginData
            emit('resetBtnClick')
        }
        //优化三 搜索按钮的点击
        const handleResearchClick=()=>{
            emit('queryBtnClick',JSON.parse(JSON.stringify(formData.value)))

}
        return {
            formData,
            handleResetClick,
            handleResearchClick
        }
        

    }
}
</script>

<style lang="less" scoped>
    .search{
        background-color: white;
        margin: 10px;
    }
    .footer{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        button{
            margin:10px
        }
    }
</style>