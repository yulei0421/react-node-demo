<template>
     <div class="makeplaninformation">
        <div class="title">被保險人資訊</div>
        <div class="sureoneself">
            <div>要保人是否為被保險人本人</div>
            <el-switch
            v-model="value5"
            active-color="#13ce66"
            inactive-color="#DEDEDE"
            active-value="100"
            inactive-value="0"
            >
            </el-switch>
        </div>
        <div class="content">
            <div class="makeplaninformationdata">
                <div class="name">
                    <span>被保人姓名</span>
                    <el-input v-model="input" placeholder="被保人姓名" ></el-input>
                </div>
                <div class="birthday"> 
                    <span>被保人生日</span>
                    <el-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="請輸入被保人生日">
                    </el-date-picker>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="makeplaninformationdata">
                <div class="name">
                    <span>被保人性別</span>
                    <div>
                        <el-row>
                        <el-button>男</el-button>
                        <el-button size="medium">女</el-button>
                        </el-row>
                    </div>
                </div>
            <div>
            <div class="age">
                <span>被保人性別</span>
                <el-input v-model="input" placeholder="被保人姓名" ></el-input>
            </div>
            <div class="el-icon-warning warn">提醒您！再過99天會增加一歲！</div>
        </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      value1: "",
      value5: "100"
    };
  }
};
</script>
<style lang="less" scoped>
.makeplaninformation {
  background: #ffffff;
  margin: 30px 20px 20px 20px;
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  .sureoneself {
    display: flex;
    margin-left:6%;
    margin-top:3%; 
  }
  .title {
    border-left: 5px solid #00915a;
    margin-top: 20px;
    padding-left: 20px;
    font-family: PingFangSC-Semibold;
    font-size: 17px;
    color: #333333;
    letter-spacing: 0;
  }
  .makeplaninformationdata {
    display: flex;
    flex: 1;
    margin-top: 2%;
    align-items: center;
    font-family: MicrosoftYaHei;
    font-size: 14px;
    color: #666666;
    letter-spacing: 0;
    .birthday{
      display: flex;
      align-items: center;
      span{
        width: 35%;
      }
    }
    .name {
      display: flex;
      align-items: center;
      margin-left: 6%;
      margin-right: 20%;
      width: 300px;
      span {
        min-width:35%;
      }
    }
    .age {
      display: flex;
      align-items: center;
      // width: 300px;
      span {
        min-width: 35%;
      }
    }
    .warn {
      font-family: MicrosoftYaHei;
      font-size: 12px;
      color: #fa9500;
      letter-spacing: 0;
    }
  }
}
</style>
