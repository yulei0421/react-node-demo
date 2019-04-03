<template>
    <div class="makeplan">
        <div class="makeplan-title">
        <el-steps :active="2">
        <el-step title="客戶資訊"><div icon='el-icon-error'></div></el-step>
        <el-step title="商品資訊" icon="el-icon-upload"></el-step>
        <el-step title="保險計畫" icon="el-icon-picture"></el-step>
        <el-step title="發送建議書" icon="el-icon-picture"></el-step>
        </el-steps>
        </div>
        <!-- <div class="makeplaninformation">
            <div class="title">被保險人資訊</div>
            <div class="content">
                <div class="makeplaninformationdata">
                    <div class="name">
                        <span>被保人姓名</span>
                        <el-input v-model="input" placeholder="被保人姓名" ></el-input>
                    </div>
                <div>
                    被保人生日
                    <el-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="請輸入被保人生日">
                    </el-date-picker></div>
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
        </div> -->
        <router-view></router-view>
        <!-- <Makeplan></Makeplan> -->
    </div>
</template>
<script>
import Makeplan from './makeplan'
export default {
    data() {
        return {
        }
    },
    components:{
       Makeplan 
    }
}
</script>

<style lang="less" scoped>
.makeplan {
//   margin: 20px 20px 20px 20px;
//   background: #ffffff;
  .makeplan-title{
      padding: 20px 200px 20px 200px;
      background: #ffffff;
  }
  .makeplaninformation {
    display: flex;
    margin-top: 30px;
    flex-direction: column;
    .title {
    border-left: 5px solid #00915a;
    padding-left: 20px;
    font-family: PingFangSC-Semibold;
    font-size: 17px;
    color: #333333;
    letter-spacing: 0;
    }
    .makeplaninformationdata{
        display: flex;
        flex: 1;
        margin-top: 20px;
        align-items: center;
        font-family: MicrosoftYaHei;
        font-size: 14px;
        color: #666666;
        letter-spacing: 0;
        .name{
            display: flex;
            align-items: center;
            margin-left: 6%;
            margin-right: 16%;
            width: 300px;
            span{
                min-width: 75px;
            }
        }
         .age{
            display: flex;
            align-items: center;
            width: 300px;
            span{
                min-width: 75px;
            }
        }
        .warn{
            font-family: MicrosoftYaHei;
            font-size: 12px;
            color: #FA9500;
            letter-spacing: 0;
        }
    }
  }
}
</style>

