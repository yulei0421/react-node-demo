<template>
<div class="contain">
    <div class="motai" @touchmove.prevent>
      <div class="motaicontent animated fadeInRight ">
        <div class="title"><span class="el-icon-back" @click="motai"></span><div>說明</div></div>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>2</h1>
        <h1>2</h1>
        <h1>2</h1>
        <h1>2</h1>
        <h1>2</h1>
        <h1>2</h1>
        <h1>2</h1>
        <h1>2</h1>
        <h1>2</h1>
      </div>
    </div>
</div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  props:[
      'flag'
  ],
  watch:{
     flag(a) {
        console.log(a)
     }
  },
  mounted() {
    //   var motai = document.querySelector('.motai')
      
  },
  methods: {
      motai () {
    //    this.flag = false
    console.log(1)
    this.$emit('flag',this.flag)
      },
  }
};
</script>

<style lang="less">
html body{
  overflow: hidden;
}
.contain{
    overflow: hidden;
}
.motai {
  position: relative;
  overflow : auto;
  z-index: 9000;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,0.30);
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  .motaicontent{
   overflow:scroll;
   width: 50%;
   height: 100%;
   position: absolute;
   right: 0;
   background: #ffffff;
   box-shadow: -6px 0 16px 0 rgba(0,0,0,0.19);
   .title{
    // padding-left: 20px;
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #DEDEDE;
    font-family: MicrosoftYaHei;
    font-size: 34px;
    color: #333333;
    letter-spacing: 0;
    div{
        display: flex;
        width: 100%;
        justify-content: center;
    }
   }
  }
}
</style>

