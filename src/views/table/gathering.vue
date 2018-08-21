<template>
  <section>
    <el-row>
      <el-col :span="24">
        <!-- 查询表单 -->
        <el-form :inline="true" class="demo-form-inline" style="padding: 1px,1px,1px,1px">
            <el-form-item label="活动名称">
                <el-input v-model="searchMap.name" placeholder="活动名称"></el-input>
            </el-form-item>
            <el-form-item label="活动日期">
                <el-date-picker type="date" placeholder="选择开始日期" v-model="searchMap.starttime"></el-date-picker>
                <el-date-picker type="date" placeholder="选择截止日期" v-model="searchMap.endtime"></el-date-picker>
            </el-form-item>
            <el-button type="primary" @click="loadData">查询</el-button>
        </el-form>
        <!--表格-->
        <el-table :data="list" border style="width: 100%">
          <el-table-column type="selection"></el-table-column>
          <el-table-column prop="id" label="ID" width="80"></el-table-column>
          <el-table-column prop="name" label="活动名称" width="180"></el-table-column>
          <el-table-column prop="address" label="活动地址"></el-table-column>
          <el-table-column prop="starttime" label="开始日期"></el-table-column>
          <el-table-column prop="endtime" label="截止日期"></el-table-column>
          <el-table-column label="操作"></el-table-column>
        </el-table>
        <!--增加分页栏-->
        <div class="block">
            <el-pagination 
                    @current-change="loadData"
                    :current-page="currentPage"
                    :page-size="10"
                    layout="prev, pager, next, jumper"
                    :total="total"></el-pagination>
        </div>
      </el-col>
    </el-row>

  </section>
  
    
</template>

<script>
import gathering from '@/api/gathering'

export default {
    data () {
        return {
            list: null, // 活动数据
            listLoading: true, // 是否还在加载
            currentPage: 1, // 当前页
            total: 0, // 总条数
            searchMap: {} // 查询条件
        }
    },
    created () {
        this.loadData()
    },
    methods: {
        loadData() {
            this.listLoading = true;
            gathering.search(this.currentPage, 10, this.searchMap).then(resp => {
                if(resp.flag == true){
                    this.list = resp.data.rows;
                    this.total = resp.data.total;
                }
                this.listLoading = false;
            })
        }
    }
}
</script>
