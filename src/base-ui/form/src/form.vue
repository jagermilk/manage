<template>
    <div class="search">
        <el-form :label-width="labelWidth">
            <el-row>
                <template v-for="item in formItems" :key="item.label">
                    <el-col :="colLayout">
                        <el-form-item :label="item.label">
                            <template v-if="item.type==='input'||item.type==='password'">
                               <el-input :placeholder="item.placeholder"></el-input> 
                            </template>
                            <template v-else-if="item.type==='select'">
                               <el-select>
                                    <el-option style="width:100%" v-for="subitem in item.options" :key="subitem.title" :value="subitem.value">{{subitem.title}}</el-option>                            
                                </el-select> 
                            </template>
                            <template v-else-if="item.type==='timepicker'">
                               <el-time-picker></el-time-picker> 
                            </template>
                        </el-form-item>
                    </el-col>
                </template>
            </el-row>
            
        </el-form>
    </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import {IFormItem} from '@/base-ui/form/types'
export default {
    props: {
        formItems: {
        type:Array as PropType<IFormItem[]>,
        default: () => {}
    },
    labelWidth:{
        type:String,
        default:'100px'
    },
    itemStyle:{
        type:Object,
        default:()=>{}
    },
    colLayout:{
        type:Object,
        default:{
            xl:6,
            lg:8,
            md:12,
            sm:24,
            xs:24
        }
    }
    }
}
</script>

<style lang="less" scoped>
    .search{
        padding-top: 20px;
        .el-form-item{
            padding:20px;
        }
    }
    .el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>