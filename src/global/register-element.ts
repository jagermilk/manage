import { createApp } from "vue"
import App from "../App.vue"
import "element-plus/dist/index.css"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
import {
	ElButton,
	ElTable,
	ElAlert,
	ElAside,
	ElAutocomplete,
	ElAvatar,
	ElBacktop,
	ElBadge,
	ElTabs,
	ElTabPane,
	ElForm,
	ElFormItem,
	ElInput,
	ElCheckbox,
	ElLink,
	ElContainer,
	ElHeader,
	ElMain,
	ElMenu,
	ElSubMenu,
	ElMenuItem,
	ElMenuItemGroup,
	ElIcon,
	ElDropdown,
	ElDropdownItem,
	ElDropdownMenu,
	ElRow,
	ElSelect,
	ElOption,
	ElDatePicker,
	ElTimePicker,
	ElCol,
	ElBreadcrumb,
	ElBreadcrumbItem,
	ElTableColumn,
	ElPagination,
} from "element-plus"
const components = [
	ElButton,
	ElTable,
	ElAlert,
	ElAside,
	ElAutocomplete,
	ElAvatar,
	ElBacktop,
	ElBadge,
	ElTabs,
	ElTabPane,
	ElForm,
	ElFormItem,
	ElInput,
	ElCheckbox,
	ElLink,
	ElContainer,
	ElHeader,
	ElMain,
	ElAside,
	ElMenu,
	ElSubMenu,
	ElMenuItem,
	ElMenuItemGroup,
	ElIcon,
	ElDropdown,
	ElDropdownItem,
	ElDropdownMenu,
	ElAvatar,
	ElForm,
	ElFormItem,
	ElInput,
	ElRow,
	ElSelect,
	ElOption,
	ElTimePicker,
	ElCol,
	ElBreadcrumb,
	ElBreadcrumbItem,
	ElTable,
	ElTableColumn,
	ElPagination
]

export default function registerElement(app:any){
	for (const cpn of components) {
		app.component(cpn.name, cpn)
	}
	for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
		app.component(key, component)
	  }
}