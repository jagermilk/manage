<template>
    <div class="nav-menu">
        <div class="logo">
            <img src="@/assets/nav-menu.png" alt="logo">
            <h3>{{ iscollapse ? '' : 'vue3+Ts' }}</h3>
        </div>
        <el-menu :default-active="defaultvalue" class="el-menu-vertical" background-color="#0c2135" :collapse="iscollapse" text-color="#e3e9ef"
            active-text-color="#0a60bd" :unique-opened="false">
            <template v-for="item in userMenu" :key="item.name">
                <template v-if="item.type === 1">
                    <el-sub-menu :index="item.name">
                        <template #title>
                            <el-icon>
                                <component :is="item.icon"></component>
                            </el-icon>
                            <span>{{  item.name  }}</span>
                        </template>
                        <template v-for="subitem in item.children" :key="subitem.id">
                            <el-menu-item :index="subitem.id+''" @click="handleMenuClick(subitem)">
                                <el-icon>
                                    <component :is="subitem.icon"></component>
                                </el-icon>
                                <span>{{  subitem.name  }}</span>
                            </el-menu-item>
                        </template>
                    </el-sub-menu>
                </template>
                <template v-else-if="item.type === 2">
                    <!-- <el-sub-menu>
                        <template>
                            <i v-if="item.icon" :class="item.icon"></i>
                            <span>{{ item.name }}</span>
                        </template>
                    </el-sub-menu> -->
                </template>
            </template>
        </el-menu>

    </div>
</template>

<script lang="ts">
import { computed,ref } from "vue"
import { useStore } from '@/store/main/index'
import { IRootState } from "@/store/main/types"
import { useRouter,useRoute } from "vue-router"
import {pathMapToMenu} from '@/utils/map-menus'
export default {
    props: {
        iscollapse: {
            type: Boolean,
            default: false
        }
    },
    setup() {
        //vuex
        const store = useStore()
        const userMenu = computed(() => store.state.loginmudule.userMenu)

        //router
        const router = useRouter()
        const route=useRoute()
        const currentPath=route.path
        //data
        const menu=pathMapToMenu(userMenu.value,currentPath)
        const defaultvalue=ref(menu.id+'')

        const handleMenuClick = (item: any) => {
            router.push({
                path: item.url ?? '/not-found'
            })
            
            
        }
        return {
            userMenu,
            handleMenuClick,
            defaultvalue
        }
    }
}
</script>

<style lang="less" scoped>
.nav-menu {
    color: #e3e9ef !important;
}

.logo {
    background-color: #0c2135;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    img {
        width: 55px;
        height: 50px;
        margin: 5px;
    }

}
</style>