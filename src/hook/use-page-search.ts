import {ref}from 'vue'
import pageTable from '@/components/page-table'
export function usePageSearch(){
    const PageTableRef:any = ref<InstanceType <typeof pageTable>>()
		const handleResetClick = () => {
			PageTableRef.value?.getPageData()
			console.log('重置按钮')
            
		}
		const handleQueryClick = (value: any) => {
			PageTableRef.value?.getPageData(value)
            console.log('搜索按钮')		
		}
    return {PageTableRef,handleResetClick,handleQueryClick}
}