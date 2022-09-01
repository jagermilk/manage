<template>
  <div class="NavHeader">
    <el-icon @click="changenav" class="shownav">
      <component :is="iscollpase ? 'Expand' : 'Fold'"></component>
    </el-icon>
    <div class="conetent">
      <div>
        <HyBreadcrumb :breadcrumbs="breadcrumbs"></HyBreadcrumb>
      </div>
      <div style="cursor:pointer" >
          <el-dropdown :hide-on-click="false">
            <span class="el-dropdown-link">
              <el-avatar shape="square" :size="30" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
              {{username}}
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item><el-icon><RefreshRight /></el-icon>退出登陆</el-dropdown-item>
                <el-dropdown-item><el-icon><User /></el-icon>用户信息</el-dropdown-item>
                <el-dropdown-item><el-icon><More /></el-icon>用户管理</el-dropdown-item>
                </el-dropdown-menu>
            </template>
          </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { emit } from 'process'
import { defineComponent, ref, computed, Ref, ComputedRef } from 'vue'
import { ArrowDown } from '@element-plus/icons-vue'
import {useStore} from '@/store/main'
import HyBreadcrumb,{IBreadcrumb} from '@/base-ui/breadcrumb'
import {pathMapBread} from '@/utils/map-menus'
import {useRoute} from 'vue-router'

export default defineComponent({
    emits: ["changenav"],
    setup(props, { emit }) {
        const iscollpase = ref(true);
        const store = useStore();
        const username = computed(() => store.state.loginmudule.userInfo.name);
        const changenav = () => {
            iscollpase.value = !iscollpase.value;
            console.log(iscollpase.value);
            emit("changenav", iscollpase.value);
            console.log(iscollpase);
        };

        //面包屑
        
        
        
        const breadcrumbs=computed(()=>{
          const route=useRoute()
          const userMenu=store.state.loginmudule.userMenu
          const currentPath=route.path
          return pathMapBread(userMenu,currentPath)
          
        } )
        return {
            iscollpase,
            changenav,
            username,
            breadcrumbs
        };
    },
    components: { HyBreadcrumb }
})
</script>

<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.NavHeader {
  height: 100%;
  width: 100%;
  display: flex;

  .shownav {
    padding:0px;
  }

  .conetent {
    padding:0px 10px;
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    span{
      display: flex;
      flex-direction: row;
      align-items: center;
      .el-avatar{
        margin-right: 5px;
      }
    }
  }
}
.example-showcase .el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
