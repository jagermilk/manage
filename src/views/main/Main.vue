<template>
    <div class="Main">
            <div class="common-layout">
                <el-container>
                    <el-aside :width="navstatus? '60px':'160px'" >
                        <NavMenu :iscollapse="navstatus"></NavMenu>
                    </el-aside>
                    <el-container>
                        <el-header>
                            <NavHeader @changenav="isCollpase"></NavHeader>
                        </el-header>
                        <el-main>
                            <div class="pageinfo">
                              <router-view/>  
                            </div>
                            
                        </el-main>
                    </el-container>
                </el-container>
            </div>
    </div>
</template>

<script lang="ts">
import NavMenu from '@/components/nav-menu';
import NavHeader from '@/components/nav-header/src/nav-header.vue';
import {ref, vShow} from 'vue'
export default {
    setup(){

        const navstatus=ref(false)
        const isCollpase=(iscollpase:boolean)=>{
            navstatus.value=iscollpase
        }
        return{
            navstatus,
            isCollpase
        }
    },
    components:{
    NavMenu,
    NavHeader
}
}
</script>

<style lang="less" scoped>


.el-aside {
    background-color: #0c2135;
    height: 100vh;
}
.el-header {
    padding:20px;
}
.el-main{
    padding:0px;
    .pageinfo{
        padding:1px;
        background-color: rgb(242, 242, 242);
        border-radius: 10px;
    }
}

</style>