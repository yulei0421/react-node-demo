<template>
    <div>
      <div class="search">
        <el-input
        class="searchbox"
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="input21"
        clearable
        @input="chang">
        </el-input>
       <!-- <input class="searchbox" placeholder="搜索"></input> -->
       <span>取消</span>
      </div>
      <div class="list" v-if="a">
          <div class="listcontent">1</div>
          <div class="listcontent">1</div>
          <div class="listcontent">1</div>
          <div class="listcontent">1</div>
          <div class="listcontent">1</div>
      </div>
      <div class="histroylist" v-else>
          <div class="searchhistory">搜索歷史<span>删除</span></div>
          <div class="searchhislist">
           <div class="histroycontent">金賺100變額萬能壽險</div>
           <div class="histroycontent">金賺100變額萬能壽險</div>
           <div class="histroycontent">金賺100變額萬能壽險</div>
           <div class="histroycontent">金賺100變額萬能壽險</div>
           <div class="histroycontent">金賺100變額萬能壽險</div>
          </div>
      </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            input21:null,
            a:false
        }
    },
    methods:{
        chang(a){
          console.log(1)
        }
    }
}
</script>

<style lang="less" >
.search{
    background: #FFFFFF;
    box-shadow: 1px 0 21px 0 rgba(0,0,0,0.07);
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    .searchbox{
       width: 70%;
       height: 40px;
       background: #F3F6F8;
       border-radius: 100px;
       line-height: 40px;
       color: #333333;
       .el-input__inner{
          border-radius: 100px;
       }
      }
    }
.list{
    width: 100%;
    display: flex;
    // flex-wrap: wrap;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    .listcontent{
        width: 65%;
        line-height: 70px;
        height: 70px;
        border-bottom: 1px solid #DEDEDE;
    }
}
.histroylist{
    width: 100%;
    display: flex;
    // flex-wrap: wrap;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    .searchhistory{
        width: 65%;
        line-height: 70px;
        height: 70px;
        border-bottom: 1px solid #DEDEDE;
    }
    .searchhislist{
        line-height: 70px;
        height: 70px;
        width: 65%;
        display: flex;
        // justify-content: space-around;
        flex-wrap: wrap;
        .histroycontent{
            width: 50%;
            font-family: MicrosoftYaHei;
            font-size: 15px;
            color: #999999;
        }
    }
    
}
</style>
