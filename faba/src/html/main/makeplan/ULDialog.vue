<template>
    <div class="dialog">
        <div class="content">
            <div>客户风险等级</div>
            <el-select v-model="value" @input='show'>
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </div>
        <div class="title">
         投資標的選擇
        </div>
        <div class="content">
            <div class="box">
                <div>客户风险等级</div>
                <el-select v-model="value" @input='show'>
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="box">
                <div>客户风险等级</div>
                <el-select v-model="value" @input='show'>
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </div>
         <div class="content">
            <div class="box">
                <div>客户风险等级</div>
                <el-select v-model="value" @input='show'>
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="box">
                <div>客户风险等级</div>
                <el-select v-model="value" @input='show'>
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
         </div>
         <div class="content">
            <div class="box">
                <div>客户风险等级</div>
                <el-select v-model="value" @input='show'>
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="box">
                <div>客户风险等级</div>
                <el-select v-model="value" @input='show'>
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <div class="button">添加</div>
            </div>
         </div>
         <div class="title">
         投資標的選擇
         </div>
        <div class="chart-box">
          <div class="chart-right">
            <div class="chart-title">
                <div class="row"><span class="radius"></span><div class="contenttitle">投資標的配置比例</div></div>
                <span class="el-icon-delete"></span>
            </div>
            <div class="chart-title">
                <div class="row"><span class="radius"></span><div class="contenttitle">投資標的配置比例</div></div>
                <span class="el-icon-delete"></span>
            </div>
            <div class="chart-title">
                <div class="row"><span class="radius"></span><div class="contenttitle">投資標的配置比例</div></div>
               <span class="el-icon-delete"></span>
            </div>
          </div>
          <div class="chart-left">
            <div>
              <ve-ring :data="chartData" :legend-visible="false" :settings=chartSettings height=300px></ve-ring>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import VeRing from 'v-charts/lib/ring.common'

export default {
  data() {
      this.chartSettings = {
        radius: [60,80],
        offsetY: 100
      }
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      chartData: {
          columns: ['日期', '访问用户'],
          rows: [
            { '日期': '1/1', '访问用户': 1393 },
            { '日期': '1/2', '访问用户': 3530 },
            { '日期': '1/3', '访问用户': 2923 },
            { '日期': '1/4', '访问用户': 1723 },
            { '日期': '1/5', '访问用户': 3792 },
            { '日期': '1/6', '访问用户': 4593 }
          ]
        }
    };
  },
  components:{
      VeRing,
  },
  methods: {
    show() {}
  }
};
</script>
<style lang="less" scoped>
.dialog {
  .content {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    div:nth-child(1) {
      margin-right: 20px;
    }
    .box {
      display: flex;
      align-items: center;
      margin-right: 20px;
      .button{
          width: 100px;
          height: 40px;
          background: #00915a;
          color: #ffffff;
          border-radius:2px;
          line-height: 40px;
          text-align: center; 
          position: absolute;
          right: 0;
        //   margin-left: 100px;
      }
    }
  }
  .title {
    margin-top: 20px;
    margin-bottom: 20px;
    border-left: 2px solid #00915a;
    padding: 0px 20px 0px 20px;
  }
  .chart-box {
    display: flex;
    flex: 1;
    .chart-right {
      width: 70%;
      display: flex;
      flex-direction: column;
      .chart-title{
          display: flex;
          margin-bottom:20px; 
          align-items: center;
      }
      .row {
        width: 80%;
        position: relative;
        background: #ffffff;
        border: 1px solid #dde3e8;
        border-radius: 3px;
        line-height: 40px;
        display: flex;
        align-items: center;
        .radius {
          margin-left: 20px;
          display: block;
          width: 5px;
          height: 5px;
          opacity: 0.3;
          background: #00915a;
          border-radius: 50%;
          margin-right: 10px;
        }
        .Proportion {
          position: absolute;
          right: 0;
          padding-right: 10px;
          span {
            border-bottom: 1px solid #333333;
          }
        }
      }
    }
    .chart-left{
        width: 300px;
        height: 300px;
    }
  }
}
</style>


