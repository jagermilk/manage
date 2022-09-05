<template>
    <div class="page-search">
        <Hyform :="formConfig" v-model="formData">
            <template #header>
                高级检索
            </template>
            <template #footer>
                <div class="footer">
                    <button primary>
                        <el-icon><Search /></el-icon>
                        搜索</button>
                    <button primary>
                        <el-icon><Loading /></el-icon>
                        重置</button>
                </div>
            </template>
        </Hyform>
    </div>
</template>

<script lang="ts">
import { formConfig } from '@/views/main/system/user/user-config'
import Hyform from '@/base-ui/form';
import { ref } from 'vue'
export default {
    components: {
        Hyform
    },
    setup() {
        const formData = ref({
            name: '',
            age: '',
            place: '',
            passwords: '',
            sports: '',
            creatTime: ''
        })
        return {
            formData,
            formConfig
        }
    }
}
</script>

<style lang="less" scoped>
    .footer{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        button{
            margin:10px
        }
    }
</style>