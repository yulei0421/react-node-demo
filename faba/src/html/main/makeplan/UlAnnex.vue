<template>
    <div class="ulannex">
        <div class="title">
            <div class="titlecovenant"><span>附约</span><div class="t">法國巴黎人壽一年定期重大疾病健康保險附約（甲型）</div></div>
            <div class="link"><span :class="{'el-icon-success':a,'borderradius':!a}" @click="show"></span></div>
        </div>
        <div class="content" v-if="a">
         <div>保額</div>
         <div class="el"><el-input v-model="input1" placeholder="請輸入"></el-input></div>
         <div>萬元</div>
        </div>

         <div class="linebox"><span class="line"></span></div>

         <div class="title">
            <div class="titlecovenant"><span>附约</span><div class="t">法國巴黎人壽一年定期重大疾病健康保險附約（甲型）</div></div>
            <div class="link"><span :class="{'el-icon-success':a,'borderradius':!a}" @click="show"></span></div>
        </div>
        <div class="content" v-if="a">
         <div>保額</div>
         <div class="el"><el-input v-model="input1" placeholder="請輸入"></el-input></div>
         <div>萬元</div>
        </div>
        <div class="warn el-icon-warning">溫馨提示：每一被保險人僅可附加一張本附約，若已投保者，請勿重複勾選以免會影響下單時效</div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      a: false,
      input1: ""
    };
  },
  methods: {
    show() {
      this.a = !this.a;
    }
  }
};
</script>
<style lang="less" scoped>
.ulannex {
  background: #ffffff;
  padding: 20px 20px 20px 20px;
  margin-bottom:20px; 
  .title {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .titlecovenant {
    display: flex;
    align-items: center;
    span {
      display: block;
      height: 18px;
      width: 28px;
      background: #ff90a1;
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
  .link {
    // width: 115px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    font-family: MicrosoftYaHei;
    font-size: 14px;
    color: #00bc8c;
    letter-spacing: 0;
    display: flex;
    align-items: center;
    span {
      margin-left: 20px;
      font-size: 26px;
    }
    .borderradius {
      width: 21.5px;
      height: 21.5px;
      border-radius: 50%;
      border: 2px solid #dedede;
    }
  }
  .content {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    div:nth-child(1) {
      font-family: MicrosoftYaHei;
      font-size: 14px;
      color: #666666;
      letter-spacing: 0;
    }
    div:nth-child(3) {
      font-family: MicrosoftYaHei;
      font-size: 14px;
      color: #666666;
      letter-spacing: 0;
    }
    .el {
      width: 200px;
      margin: 0px 20px 0 20px;
    }
  }
  .linebox {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: 20px;
    .line {
      text-align: center;
      width: 90%;
      background: #DEDEDE;
      border-bottom: 1px solid #DEDEDE;
    }
  }
  .warn{
    padding-left: 20px;
    width: 97%;
    height: 30px;
    line-height: 30px;
    font-family: MicrosoftYaHei;
    font-size: 12px;
    color: #FA9500;
    letter-spacing: 0;
    background: rgba(251,154,12,0.10);
    border-radius: 3px;

  }
}
</style>


