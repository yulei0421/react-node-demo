<template>
<div class="home">
    <div class="banner">
    <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
        </el-carousel-item>
    </el-carousel>
    </div>
    <div class="option">
        <div class="el">1</div>
        <div class="el">1</div>
        <div class="el">1</div>
        <div class="el">1</div>
        <div class="el">1</div>
    </div>
</div>
</template>

<style lang='less' scoped>
.home{
  height: 100%;
   background: #F3F6F8;
   flex: 1;
}
.banner{
    margin: 2% 2% 2% 2%;
    box-shadow: 6px 0 25px 0 #62DDA1;
    opacity: 0.5;
}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .option{
      display: flex;
      flex: 1;
    //   width: 100%;
      justify-content:space-around;
      .el{
        //   flex: 1;
          width: 17%;
          height: 110pt;
          border: 1px solid silver;
          background: #FFFFFF;
          border-radius: 3px;
      }
  }
</style>