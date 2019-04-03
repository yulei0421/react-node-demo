<template>
    <div class="query">
      <div class="check">
          <div class="checkall"><span>專案名稱</span><el-input v-model="input1" placeholder="請輸入專案名稱"></el-input></div>
          <div class="checkall"><span>商品名稱</span><el-input v-model="input2" placeholder="請輸入商品名稱"></el-input></div>
      </div>
       <div class="check">
          <div class="checkall"><span>被保人姓名</span><el-input v-model="input3" placeholder="請輸入被保人姓名"></el-input></div>
          <div class="checkall"><span>要保人姓名</span><el-input v-model="input4" placeholder="請輸入要保人姓名"></el-input></div>
      </div>
      <div class="check">
          <div class="checkall"><span>被保人姓名</span>
            <el-date-picker
            v-model="value1"
            type="date"
            placeholder="开始日期">
            </el-date-picker>
            <i>至</i>
            <el-date-picker
            v-model="value2"
            type="date"
            placeholder="结束日期"
            @change='a'
            value-format="yyyy-MM-dd">
            </el-date-picker>
          </div>
      </div>
      <div class="querybuttom">
          <div class="leftbutton">重置</div>
          <div class="rightbutton">搜索</div>
      </div>
      <div class="newbook">
          <div class="rightbutton">新增建議書</div>
      </div>
      <div class="nobook">
          <Table v-if="show"></Table>
          <span v-else>暫無建議書</span>
      </div>
    </div>
</template>
<script>
import Table from './table'
export default {
  data() {
    return {
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      value1: '',
      value2: '',
      show:true
    };
  },
  components:{
      Table
  },
  methods:{
     a(){
         console.log(this.value2)
     }
  },
};
</script>

<style lang="less" scoped>
.query {
    margin: 20px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    height: 100%;
  .check {
    display: flex;
    .checkall {
      display: flex;
      width: 40%;
      justify-content: space-around;
      margin-right: 20px;
      margin-bottom: 40px;
      font-family: MicrosoftYaHei;
      font-size: 14px;
      color: #666666;
      align-items: center;
      span {
        width: 40%;
      }
    }
  }
  .querybuttom{
      display: flex;
      .leftbutton{
        border: 1px solid #00915A;
        border-radius: 3px;
        width: 115px;
        height: 35px;
        text-align: center;
        line-height: 35px;
        margin-right: 30px;
        font-family: MicrosoftYaHei;
        font-size: 14px;
        color: #00915A;
        letter-spacing: 0;
      }
      .rightbutton{
        border: 1px solid #00915A;
        background: #00915A;
        border-radius: 3px;
        width: 115px;
        height: 35px;
        text-align: center;
        line-height: 35px;
        font-family: MicrosoftYaHei;
        font-size: 14px;
        color: #FFFFFF;
        letter-spacing: 0;
      }
  }
  .newbook{
      display: flex;
      flex-direction: row-reverse;
      .rightbutton{
        border: 1px solid #00915A;
        background: #00915A;
        border-radius: 3px;
        width: 115px;
        height: 35px;
        text-align: center;
        line-height: 35px;
        font-family: MicrosoftYaHei;
        font-size: 14px;
        color: #FFFFFF;
        letter-spacing: 0;
      }
  }
  .nobook{
      width: 100%;
      display:flex;
      flex: 1;
      justify-content: center;
      align-items: center;
  }
}
</style>
