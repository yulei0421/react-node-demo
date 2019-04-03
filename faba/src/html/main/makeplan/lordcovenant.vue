<template>
    <div class="Lordcovenant">
     <div class="title">
         <div class="titlecovenant"><span>主約</span><div class="t">法商法國巴黎人壽幸福世貸定期壽險</div></div>
         <div class="button">變更主約</div>
     </div>
     <div class="content">
        <div class="check">
            <div class="checkall"><span>貸款金額（萬元）</span><el-input v-model="input1" placeholder="請輸入貸款金額"></el-input></div>
            <div class="checkall"><span>貸款年期（年）</span><el-input v-model="input2" placeholder="請輸入貸款年限"></el-input><div class="warn">*（共24期）</div></div>
        </div>
        <div class="check">
            <div class="checkall"><span>保險金額（萬元）</span><el-input v-model="input1" placeholder="請輸入保險金額"></el-input></div>
            <div class="checkall"><span>貸款寬限期</span><el-input v-model="input2" placeholder="請輸入貸款年限"></el-input><div class="warn"></div></div>
        </div>
         <div class="check">
            <div class="checkall"><span>繳費方式</span> 
                <el-select v-model="value" placeholder="请选择" @input='show'>
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <i>至</i>
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="checkall"><span>保險期間（年）</span>
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <div class="warn"></div>
            </div>
        </div>
     </div>
     <div class="mortgage">
         <div class="mortgagerate">
             <div>房貸利率</div>
             <div class="mortgageratebox1">
                <el-select v-model="value" placeholder="请选择" @input='show'>
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <i>至</i>
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
             </div>
             <div class="mortgageratebox1">
                <el-select v-model="value" placeholder="请选择" @input='show'>
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <i>至</i>
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
             </div>
             <div class="mortgageratebox1">
                <el-select v-model="value" placeholder="请选择" @input='show'>
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <i>至</i>
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
             </div>
         </div>
         <div class="mortgagerate">
             <div>房貸利率</div>
             <div class="mortgageratebox1">
               <el-input v-model="input1" placeholder="請輸入貸款金額"></el-input><span>%</span>
             </div>
             <div class="mortgageratebox1">
               <el-input v-model="input1" placeholder="請輸入貸款金額"></el-input><span>%</span>
             </div>
             <div class="mortgageratebox1">
               <el-input v-model="input1" placeholder="請輸入貸款金額"></el-input><span>%</span>
             </div>
         </div>
         <div class="mortgagerate">
             <div>房貸利率</div>
             <div class="mortgageratebox1">
               <el-input v-model="input1" placeholder="請輸入貸款金額"></el-input><span>%</span>
             </div>
             <div class="mortgageratebox1">
               <el-input v-model="input1" placeholder="請輸入貸款金額"></el-input><span>%</span>
             </div>
             <div class="mortgageratebox1">
                <el-input v-model="input1" placeholder="請輸入貸款金額"></el-input><span>%</span>
             </div>
         </div>
     </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      input1: "",
      input2: "",
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
      value: ""
    };
  },
  methods: {
    show() {
      console.log(this.value);
    }
  }
};
</script>

<style lang="less" >
.Lordcovenant {
  margin: 20px 20px 20px 20px;
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
  .content {
    background: #ffffff;
    padding: 20px 20px 20px 20px;
    margin-bottom: 20px;
    .check {
      display: flex;
      .checkall {
        display: flex;
        width: 40%;
        justify-content: space-around;
        margin-right: 50px;
        margin-bottom: 40px;
        font-family: MicrosoftYaHei;
        font-size: 14px;
        color: #666666;
        align-items: center;
        span {
          width: 40%;
        }
        .warn {
          width: 40%;
          font-family: MicrosoftYaHei;
          font-size: 12px;
          color: #fa9500;
          letter-spacing: 0;
        }
      }
    }
  }
  .mortgage{
    background: #ffffff;
    padding: 20px 20px 20px 20px;
    margin-bottom: 20px;
    display: flex;
    .mortgageratebox1{
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        margin-right: 100px;
        margin-top: 20px;
        span{
          margin-left:20px; 
        }
        .el-select{
            width: 100px;
        }
        .el-input{
            //  width: 100px;
        }
    }
  }
}
</style>

