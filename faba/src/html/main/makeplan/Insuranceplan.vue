<template>
    <div class="insuranceplan">
      <div class="user">
          <div class="username">
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1198495970,3782994083&fm=27&gp=0.jpg" alt="" srcset="">
              <div>
                  <div class="Insured">被保人</div>
                  <div class="name">李四</div>
              </div>
          </div>
          <div class="username">
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1198495970,3782994083&fm=27&gp=0.jpg" alt="" srcset="">
              <div>
                  <div class="Insured">被保人</div>
                  <div class="name">李四</div>
              </div>
          </div>
          <!-- <div class="insuranceage">
              <div class="insuranage">
                  <div>貸款年期</div>
                  <div>20年</div>
              </div>
              <div class="insuranage">
                  <div>貸款年期</div>
                  <div>20年</div>
              </div>
              <div class="insuranage">
                  <div>貸款年期</div>
                  <div>20年</div>
              </div>
          </div> -->
           <div class="insuranceage">
              <div class="insuranage">
                  <div>貸款年期</div>
                  <div>20年</div>
              </div>
              <div class="insuranage">
                  <div>貸款年期</div>
                  <div>20年</div>
              </div>
              <div class="insuranage">
                  <div>貸款年期</div>
                  <div>20年</div>
              </div>
          </div>
      </div>
      <div class="mainrisk">
        <div class="mainriskbox">
            <div class="mainriskname">
                <div class="mainname">主約</div>
                <div class="Productname">幸福世貸-平準型（SITC）</div>
            </div>
            <div class="mainriskname">
                <div class="mainname">主約</div>
                <div class="Productname">幸福世貸-平準型（SITC）</div>
            </div>
        </div>
        <div class="content">
            <el-tabs v-model="activeName" @tab-click="handleClick" v-if="show">
                <el-tab-pane label="保障內容" name="first" :key='1'>
                    <!-- <Cancellationmoney :key='1'></Cancellationmoney> -->
                    <Guarantee></Guarantee>
                </el-tab-pane>
                <el-tab-pane label="房貸比較表" name="second" :key='2'>
                    <Hometable></Hometable>
                </el-tab-pane>
                <el-tab-pane label="保額暨解約金" name="third" :key='3'>
                    <Cancellationmoney :key="2" :visible="activeName === 'third'"></Cancellationmoney>
                </el-tab-pane>
                <el-tab-pane label="注意事項" name="fourth" :key='4'>定时任务补偿</el-tab-pane>
            </el-tabs>
            <el-tabs v-model="activeName1" @tab-click="handleClick" v-else>
                <el-tab-pane label="保險計畫表" name="first" :key='1'>
                    <Guarantee></Guarantee>
                </el-tab-pane>
                <el-tab-pane label="保險計畫圖例" name="second" :key='2'>
                    <insuranceplantable :visible="activeName1 === 'second'"></insuranceplantable>
                </el-tab-pane>
            </el-tabs>
        </div>
      </div>
    </div>
</template>
<script>
import Guarantee from './Guaranteecontent' //引入保障内容
import Hometable from './hometable' //引入房貸比較表
import Cancellationmoney from './Cancellationmoney'//引入保額暨解約金
import insuranceplantable from './insuranceplantable'//引入保險計畫圖例
export default {
    data() {
      return {
        activeName: 'first',
        activeName1:'first',
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        show:false
      };
    },
     methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components:{
        Guarantee,
        Hometable,
        Cancellationmoney,
        insuranceplantable
    },
}
</script>

<style lang="less" scoped>
.insuranceplan{
    .user{
        background: #FFFFFF;
        border-radius: 3px;
        margin: 20px 20px 20px 20px;
        display: flex;
        justify-content: space-between;
        padding: 20px 20px 20px 20px;
        .username{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 25%;
            font-family: MicrosoftYaHei;
            font-size: 14px;
            letter-spacing: 0;
          img{
              width: 50px;
              height: 50px;
              margin-right: 20px;
          }
        }
        .insuranceage{
            width: 35%;
            background: #F6F6F6;
            border-radius: 3px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            font-family: MicrosoftYaHei;
            font-size: 14px;
            letter-spacing: 0;
            padding: 10px 10px 10px 10px;
            .insuranage{
                display: flex;
                flex-direction: column;
                align-items: center;
                div:nth-child(1){
                    color:#999999;
                }
            }
          }
    }
    .mainrisk{
        background: #FFFFFF;
        margin: 20px 20px 20px 20px;
        padding: 20px 20px 20px 20px;
        .mainriskbox{
            display: flex;
            .mainriskname{
                margin-left: 20px;
                flex: 1;
                // width: 50%;
                border: 1px solid #00915A;
                padding: 15px 20px 15px 20px;
                display: flex;
                align-items: center;
                justify-content: center;
            .mainname{
                // width: 5%;
                // height: 30%;
                font-family: PingFangSC-Regular;
                font-size: 10px;
                color: #FFFFFF;
                letter-spacing: 0;
                background: #00915A;
                border-radius: 3px;
                text-align: center;
            }
            .Productname{
                font-family: PingFangSC-Semibold;
                font-size: 15px;
                color: #00915A;
                letter-spacing: 0;
                margin-left: 20px;
            }
        }
        }
        
    }
    .content{
        p{
        font-family: MicrosoftYaHei;
        font-size: 12px;
        color: #FA9500;
        letter-spacing: 0;
        line-height: 37px;
        }
    }
}

</style>

