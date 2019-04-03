<template>
<div class="ulshop">
    <div class="title">
         <div class="titlecovenant"><span>主約</span><div class="t">UL商品全稱</div></div>
         <div class="button">變更主約</div>
     </div>
     <div class="ulshop-premium">
       <div class="rowbox">
          <div class="box">
            <span>保費</span>
            <el-input v-model="input1" placeholder="請輸入貸款金額"></el-input>
          </div>
          <div class="box">
            <span>繳別</span>
            <el-select v-model="value" placeholder="请选择" @input='show'>
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
          </div>
          <div class="box">
            <span>幣別</span>
            <el-select v-model="value" placeholder="请选择" @input='show'>
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
          </div>
       </div>
        <div class="rowbox">
          <div class="box">
            <span>保額比例</span>
            <el-input v-model="input1" placeholder="請輸入貸款金額"></el-input>
          </div>
          <div class="box">
            <span>繳別</span>
            <el-select v-model="value" placeholder="请选择" @input='show'>
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
          </div>
          <div class="box">
            <span>幣別</span>
            <el-select v-model="value" placeholder="请选择" @input='show'>
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
          </div>
       </div>
     </div>
     <ulTarget></ulTarget>
     <ulAnnex></ulAnnex>
     <ulOther></ulOther>
</div>
</template>
<script>
import ulTarget from "./ULtarget";
import ulAnnex from "./UlAnnex";
import ulOther from "./ULother";
import motai from "./motai";
export default {
  data() {
    return {
      input1: "",
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
      flag:true
    };
  },
  mounted(){
  },
  methods: {
    show() {},
    motai() {
      
    }
  },
  components: {
    ulTarget,
    ulAnnex,
    ulOther,
    motai
   
  }
};
</script>

<style lang="less" >
.ulshop {
  margin: 20px 20px 20px 20px;
  overflow: hidden;
  .title {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .titlecovenant {
      display: flex;
      align-items: center;
      span {
        display: block;
        height: 18px;
        width: 28px;
        background: #00915a;
        border-radius: 1.5px;
        color: aliceblue;
        margin-right: 20px;
        text-align: center;
      }
      .t {
        font-family: PingFangSC-Semibold;
        font-size: 17px;
        color: #333333;
        letter-spacing: 0;
      }
    }
    .button {
      width: 115px;
      height: 35px;
      background: #00915a;
      border-radius: 3px;
      border: 1px solid #00915a;
      text-align: center;
      line-height: 35px;
      font-family: MicrosoftYaHei;
      font-size: 14px;
      color: #ffffff;
      letter-spacing: 0;
    }
  }
  .ulshop-premium {
    background: #ffffff;
    padding: 20px 20px 20px 20px;
    margin-bottom: 20px;
    // display: flex;
    .rowbox {
      display: flex;
      margin-bottom: 20px;
      .box {
        display: flex;
        align-items: center;
        margin-right: 60px;

        span {
          width: 70px;
          font-family: MicrosoftYaHei;
          font-size: 13px;
          color: #666666;
          letter-spacing: 0;
          text-align: center;
        }
      }
    }
  }
}
</style>

