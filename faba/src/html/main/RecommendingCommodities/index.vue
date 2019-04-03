<template>
<div class="shop">
  <div class="tabs">
   <div v-for="(i,index) in arr" @click="tabs(index)" class="tabplan"  :class="{'tabplanhover':index==a}">{{i}}</div>
    <div class="sousuo">請輸入產品名稱或類型</div>
  </div>
   <div v-for="(i,index) in arr" v-if="index==a" class="content">
       <div class="box">123</div>
       <div class="box">123</div>
       <div class="box">123</div>
       <div class="box">123</div>
       <div class="box">123</div>
       <div class="box">123</div>
       <div class="box">123</div>
       <div class="box">123</div>
       <div class="box">123</div>
       <div class="box">123</div>
       <div class="box">123</div>
       <div class="box">123</div>
       <div class="box">123</div>
       <div class="box">123</div>
       <div class="box">123</div>
       <div class="box">123</div>
       <div class="box">123</div>
       <div class="box">123</div>
       <div class="box">123</div>
   </div>
 
</div>

</template>
<script>
  export default {
    data() {
      return {
       arr:['你好','我是','余磊dada','你dasd呢'],
       a:0
      };
    },
    methods: {
      tabs(a){
          console.log(a)
          this.a=a
      }
    }
  };
</script>
<style lang="less" scoped>
.shop{
    // display: flex;
    // justify-content: center;
     background: #F3F6F8;
    .tabs{
        background: #FFFFFF;
        box-shadow: 1px 0 21px 0 rgba(0,0,0,0.07);
        width: 100%;
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        height:70px;
        position: relative;
        .sousuo{
            width: 25%;
            background: #F3F6F8;
            height: 40px;
            position: absolute;
            line-height: 40px;
            border-radius:100px; 
            right: 0;
            font-family: MicrosoftYaHei;
            font-size: 13px;
            color: #D3D3D3;
            letter-spacing: 0;
        }
       
        .tabplan{
            line-height: 70px;
            height: 100%;
            margin:0 10px 0 10px;
            font-family: MicrosoftYaHei;
            font-size: 15px;
            color: #666666;
            letter-spacing: 0;
        }
        .tabplanhover{
            color: #00915A ;
            border-bottom: 2px solid #00915A ;
        }
    }
    .content{
        display: flex;
        // justify-content: space-around;
        //  overflow:scroll;
        //  height: 100vh;
         flex-wrap:wrap;
        .box{
            background: #FFFFFF;
            box-sizing:border-box;
            width: 22%;
            height: 195px;
            border: 1px solid #666666;
            margin: 0 0 0 2.5%;
            margin-top: 5%;
        }
    }
}
</style>
