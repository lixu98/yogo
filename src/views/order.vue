<template>
  <div>
      <my-title title-name="我的订单"></my-title>
      <el-table :data="tableData" style="width: 70%;margin:0 auto">
        <el-table-column label="日期" width="180">
            <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
        </el-table-column>
        <el-table-column label="商品信息" width="180">
            <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                <p>姓名: {{ scope.row.name }}</p>
                <p>住址: {{ scope.row.address }}</p>
                <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
                </el-popover>
            </template>
        </el-table-column>
        <el-table-column label="单价" width="180">
            <template slot-scope="scope">
                <span>￥{{ scope.row.price }}</span>
            </template>
        </el-table-column>
        <el-table-column label="数量" width="180">
            <template slot-scope="scope">
                <span>{{ scope.row.num }}</span>
            </template>
        </el-table-column>
        <el-table-column label="应付金额" width="180">
            <template slot-scope="scope">
                <span>￥{{ scope.row.num * scope.row.price }}</span>
            </template>
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button size="mini" type="success" @click="handleDelete(scope.$index, scope.row)">购买</el-button>
                <el-button size="mini" type="danger" icon="el-icon-delete" circle @click="handleEdit(scope.$index, scope.row)"></el-button>
            </template>
        </el-table-column>
      </el-table>
  </div>
</template>

<script>
import MyTitle from '../components/title'
export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          price:400,
          num:3
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          price:400,
          num:1
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          price:400,
          num:1
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          price:400,
          num:2
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
    components:{
        MyTitle
    }
}
</script>

<style>
el-table{
    margin: 0 auto;
}
.el-table th>.cell {
    text-align: center;
}
.el-table .cell {
    text-align: center;
}
</style>
