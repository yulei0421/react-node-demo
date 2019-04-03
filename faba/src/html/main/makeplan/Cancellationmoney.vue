<template>
<div v-if=visible class="cancellation">
    <div class="box">
        <div v-if="show" @click="clickshow" class="button">图例</div>
        <div v-else="show" @click="clickshow"  class="button">表格</div>
    </div>
    <ve-histogram :data="chartData" :settings="chartSettings" v-if="show"></ve-histogram>
    <el-table :data="tableData" v-else style="width: 100%" stripe>
        <el-table-column prop="date" label="貸款年期" width="150" align="center" >
        </el-table-column>
        <el-table-column label="一般房貸（A）" align="center" >
            <el-table-column prop="name" label="利率" align="center" >
            </el-table-column>
            <el-table-column prop="address" label="月付金額" align="center" >
            </el-table-column>
        </el-table-column>
        <el-table-column label="保障性房貸（B）" align="center" > 
            <el-table-column prop="city" label="利率" align="center" >
            </el-table-column>
            <el-table-column prop="address" label="月付金額" align="center" >
            </el-table-column>
        </el-table-column>
            <el-table-column label="比較（B-A）" align="center" > 
            <el-table-column prop="city" label="利率" align="center" >
            </el-table-column>
            <el-table-column prop="address" label="月付金額" align="center" >
            </el-table-column>
        </el-table-column>
    </el-table>
</div>
</template>

<script>
import VeHistogram from "v-charts/lib/histogram.common";
import VeLine from "v-charts/lib/line.common.js";
import VeRing from "v-charts/lib/ring.common";
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    this.chartSettings = {
      showLine: ["下单用户","下单率"]
    };
    return {
      value: "",
      chartData: {
        columns: ["日期", "访问用户", "下单用户", "下单率", "哎哎哎"],
        rows: [
          {
            日期: "1/1",
            访问用户: 1393,
            下单用户: 1093,
            下单率: 999,
            哎哎哎: 1000
          },
          { 日期: "1/2", 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
          { 日期: "1/3", 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
          { 日期: "1/4", 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
          { 日期: "1/5", 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 日期: "1/6", 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 }
        ]
      },
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ],
      show: true
    };
  },
  components: {
    VeHistogram,
    VeLine,
    VeRing
  },
  methods: {
    clickshow() {
      this.show = !this.show;
      console.log(this.show);
    }
  }
};
</script>
<style lang="less" scoped>
.cancellation {
  .box {
      width: 100%;
      height: 100px;
    .button {
  
      //  position: absolute;
      //  display: flex;
       float: right;
    }
  }
}
</style>
