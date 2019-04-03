<template>
    <div class="ulannex">
        <div class="title">
            <div class="titlecovenant"><span>其他</span><div class="t">法國巴黎人壽一年定期重大疾病健康保險附約（甲型）</div><div class="Explain" @click="motai">说明</div></div>
            <div class="link"><span :class="{'el-icon-success':a,'borderradius':!a}" @click="show"></span></div>
        </div>
         <div class="linebox"><span class="line"></span></div>

         <div class="title">
            <div class="titlecovenant"><span>其他</span><div class="t">法國巴黎人壽一年定期重大疾病健康保險附約（甲型）</div><div class="Explain" @click="motai">说明</div></div>
            <div class="link"><span :class="{'el-icon-success':a,'borderradius':!a}" @click="show"></span></div>
        </div>
        <motai v-if=flag :flag=flag @flag=motai1></motai>
    </div>
</template>
<script>
import motai from "./motai";
export default {
  data() {
    return {
      a: false,
      input1: "",
      flag:false
    };
  },
  components:{
      motai
  },
  methods: {
    show() {
      this.a = !this.a;
    },
    motai() {
        this.flag = true;
    },
    motai1(a) {
        this.flag = !a
        console.log(a)
    }
  }
};
</script>
<style lang="less" scoped>
.ulannex {
  background: #ffffff;
  padding: 20px 20px 20px 20px;
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
      background: #BABABA;
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
    .Explain{
        display: block;
        width: 40px;
        height: 25px;
        background: rgba(251,154,12,0.10);
        border-radius: 3px;
        font-family: PingFangSC-Semibold;
        font-size: 13px;
        color: #FA9500;
        letter-spacing: 0;
        text-align: center;
        line-height: 25px;
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
  
  .linebox {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: 20px;
    .line {
      text-align: center;
      width: 90%;
      border-bottom: 1px solid #DEDEDE;
    }
  }
}
</style>


