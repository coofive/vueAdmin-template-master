<template>
  <section>
    <el-row>
      <el-col :span="24">
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
            total: 0 // 总条数
        }
    },
    created () {
        this.loadData()
    },
    methods: {
        loadData() {
            this.listLoading = true;
            gathering.getPageList(this.currentPage, 10).then(resp => {
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
