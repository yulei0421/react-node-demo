<template>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="date"
      label="專案名稱"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="商品名稱(商品代碼)"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="被保人姓名">
    </el-table-column>
    <el-table-column
      prop="address"
      label="要保人姓名">
    </el-table-column>
    <el-table-column
      prop="address"
      label="編輯日期">
    </el-table-column>
    <el-table-column
      prop="address"
      label="狀態">
    </el-table-column>
    <el-table-column
      prop="address"
      label="操作">
    <template slot-scope="scope">
        <el-popover
        placement="left"
        title="标题"
        width="200"
        trigger="click">
        <el-button @click="handleClick(scope.row)" type="text" size="small">我要调整</el-button>
        <el-button type="text" size="small">编辑</el-button>
        <el-button slot="reference">click 激活</el-button>
        </el-popover>
    </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    handleClick(row) {
      console.log(row);
    }
  }
};
</script>
