<template>
<div v-if=visible class="cancellation">
    <div class="box">
        <!-- <div v-if="show" @click="clickshow" class="button">图例</div>
        <div v-else="show" @click="clickshow"  class="button">表格</div> -->
    </div>
    <ve-histogram :data="chartData" :settings="chartSettings" v-if="show"></ve-histogram>
     <el-radio-group v-model="radio3" @change='checklabal'>
      <el-radio-button label="上海"></el-radio-button>
      <el-radio-button label="北京"></el-radio-button>
      <el-radio-button label="广州"></el-radio-button>
      <el-radio-button label="深圳"></el-radio-button>
    </el-radio-group>
    <!-- <div class="Assumedrateoreturn">
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </div> -->
    
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
      showLine: ["下单用户", "下单率"]
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
      show: true,
      radio3: "上海"
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
    },
    checklabal(a) {
      console.log(a);
      if (a == "北京") 
       return this.chartData = {
          columns: ["日期", "访问用户", "下单用户", "下单率", "哎哎哎"],
          rows: [
            {
              日期: "1/1",
              访问用户: 1393,
              下单用户: 1093,
              下单率: 999,
            },
            { 日期: "1/2", 访问用户: 3530, 下单用户: 2230, 下单率: 1000 },
            { 日期: "1/3", 访问用户: 2923, 下单用户: 1623, 下单率: 1200 },
            { 日期: "1/4", 访问用户: 1723, 下单用户: 3423, 下单率: 1100 },
            { 日期: "1/5", 访问用户: 3792, 下单用户: 1492, 下单率: 1500 },
            { 日期: "1/6", 访问用户: 4593, 下单用户: 4293, 下单率: 1700 }
          ]
        };
        if (a == "深圳") 
       return this.chartData = {
          columns: ["日期", "访问用户", "下单用户", "下单率", "哎哎哎"],
          rows: [
            {
              日期: "1/1",
              访问用户: 1393,
              下单用户: 1093,
              下单率: 999,
            },
            { 日期: "1/2", 访问用户: 3530, 下单用户: 2230, 下单率: 2000 },
            { 日期: "1/3", 访问用户: 2923, 下单用户: 1623, 下单率: 3200 },
            { 日期: "1/4", 访问用户: 1723, 下单用户: 3423, 下单率: 4100 },
            { 日期: "1/5", 访问用户: 3792, 下单用户: 1492, 下单率: 5500 },
            { 日期: "1/6", 访问用户: 4593, 下单用户: 4293, 下单率: 6700 }
          ]
        };
        if (a == "上海") 
       return this.chartData = {
          columns: ["日期", "访问用户", "下单用户", "下单率", "哎哎哎"],
          rows: [
            {
              日期: "1/1",
              访问用户: 1393,
              下单用户: 1093,
              下单率: 999,
            },
            { 日期: "1/2", 访问用户: 3530, 下单用户: 2230, 下单率: 1000 },
            { 日期: "1/3", 访问用户: 2923, 下单用户: 1623, 下单率: 1200 },
            { 日期: "1/4", 访问用户: 1723, 下单用户: 3423, 下单率: 1100 },
            { 日期: "1/5", 访问用户: 3792, 下单用户: 1492, 下单率: 1500 },
            { 日期: "1/6", 访问用户: 4593, 下单用户: 4293, 下单率: 1700 }
          ]
        };
        if (a == "广州") 
       return this.chartData = {
          columns: ["日期", "访问用户", "下单用户", "下单率", "哎哎哎"],
          rows: [
            {
              日期: "1/1",
              访问用户: 1393,
              下单用户: 1093,
              下单率: 999,
            },
            { 日期: "1/2", 访问用户: 1530, 下单用户: 1230, 下单率: 1000 },
            { 日期: "1/3", 访问用户: 1923, 下单用户: 1623, 下单率: 1200 },
            { 日期: "1/4", 访问用户: 1723, 下单用户: 1423, 下单率: 1100 },
            { 日期: "1/5", 访问用户: 1792, 下单用户: 1492, 下单率: 1500 },
            { 日期: "1/6", 访问用户: 1593, 下单用户: 1293, 下单率: 1700 }
          ]
        };
      
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
  .Assumedrateoreturn {
    display: flex;
    justify-content: space-around;
  }
  .el-radio-group {
    display: flex;
    justify-content: space-around;
  }
}
</style>
