<template>
    <div class="pagination">
        <div class="demo-pagination-block">
            <el-pagination v-model:currentPage="currentPage4" v-model:page-size="pageSize4"
                :page-sizes="[100, 200, 300, 400]" :small="small" :disabled="disabled" :background="background"
                layout="total, sizes, prev, pager, next, jumper" :total="400" @size-change="handleSizeChange"
                @current-change="handleCurrentChange" />
        </div>
    </div>
</template>

<script lang="ts">
export default {

}
</script>

<style lang="less" scoped>
.pagination {
    margin: 15px 10px 0px 0px;
    display: flex;
    flex-direction: row;
    justify-content: end;
}
</style>