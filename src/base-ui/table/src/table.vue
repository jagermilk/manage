<template>
	<div class="table">
        <div class="header">
            <slot name="header">
            <div class="title">
                <strong>{{title}}</strong>
            </div>
            <div class="adddata">
                <slot name="adddata"></slot>
            </div>
        </slot>
        </div>
        
		<el-table
			:data="tabledata"
			border
			style="width: 100%"
			align="center"
			@selection-change="handleSelectionChange"
		>
			<el-table-column
				v-if="showSelect"
				type="selection"
				width="75"
				align="center"
			>
			</el-table-column>
			<el-table-column
				v-if="showIndexColumn"
				type="index"
				label="序号"
				width="60"
				align="center"
			>
			</el-table-column>
			<template v-for="item in tableItems" :key="item.label">
				<el-table-column v-bind="item" align="center">
					<template #default="scope">
						<slot :name="item.prop" :row="scope.row">
							{{ scope.row[item.prop] }}
						</slot>
					</template>
				</el-table-column>
			</template>
		</el-table>
		<slot name="footer"></slot>
	</div>
</template>

<script lang="ts">
import { computed } from "vue"
import { useStore } from "@/store/main/index"
import { title } from "process"
export default {
	props: {
		tableItems: {
			type: Array
		},
		showIndexColumn: {
			type: Boolean,
			default: true
		},
		showSelect: {
			type: Boolean,
			default: true
		},
        title:{
            type:String
        },
        tabledata:{
            type:Object
        }
	},
    emit:['selectionchange'],
	setup(props:any,{emit}:any) {
		
		const handleSelectionChange = (value: any) => {
			console.log(value),
            emit('selectionchange',value)
		}

		return {
			
			handleSelectionChange
		}
	}
}
</script>

<style lang="less" scoped>
    .table{
        padding:5px;
        .header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .title{
            margin: 5px;
            font-size: 20px;
            line-height: 35px;
        }
        .adddata{
            margin: 5px;
        }

    }

    }
    
</style>
