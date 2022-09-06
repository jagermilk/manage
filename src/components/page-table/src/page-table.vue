<template>
    <div class="page-table"> 
        <Table :="tableConfig">
        <template #status="scope">
            <el-button>{{scope.row? '启用':'禁用'}}</el-button>
        </template>
        </Table>
        
    </div>
</template>

<script lang="ts">
import Table from '@/base-ui/table/src/table.vue';
import { tableConfig } from '@/views/main/system/user/user-config'
import { log } from 'console';
    export default {
    components: { Table },
    setup(){
        
        
        return{
            tableConfig
            
        }
    }
}
</script>

<style lang="scss" scoped>

</style>