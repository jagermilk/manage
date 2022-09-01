<template>
    <div class="nav-bread">
        <el-breadcrumb separator="/" >
            <template v-for="item in breadcrumbs" :key="item.name">
             <el-breadcrumb-item :to="{ path: item.path }">{{item.name}}</el-breadcrumb-item>
            </template>
    </el-breadcrumb>
    </div>
</template>

<script lang="ts">
import {PropType} from 'vue'
import {IBreadcrumb} from '../type/type'
export default({
    props:{
        breadcrumbs:{
            type:Array as PropType<IBreadcrumb[]>,
            dafault:()=>[]
        }
    }
})
    
</script>

<style lang="scss" scoped>
</style>