<template>
    <div class="table">
            <el-table :data="tabledata" border style="width: 100%">
                <template v-for="item in tableItems" :key="item.label">
                        <el-table-column v-bind="item">
                        <template #default="scope">
                           <slot :name="item.prop" :row="scope.row">
                            {{scope.row[item.prop]}}
                            </slot> 
                        </template>
                        </el-table-column>
                </template>
           
            </el-table>
            <slot></slot>
    </div>
</template>

<script lang="ts">
    import { computed } from 'vue'
    import {useStore} from '@/store/main/index'
export default {
    props:{
        tableItems:{
                type:Array
            }
        },
    setup(){
        const store = useStore()
        const tabledata=computed(()=>{       
            const result= JSON.parse(JSON.stringify(store.state.getsystem.userlist))
            console.log(result)
            return result[0]
        }) 
        return{
            tabledata
        }
    }
}
</script>

<style lang="scss" scoped>
</style>