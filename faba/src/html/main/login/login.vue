<template>

    <div class="login">
       <div class="left-img">
           <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2584422743,1020351689&fm=27&gp=0.jpg" alt="" srcset="">
       </div> 
       <div class="right-login">
        <div class="line">login</div>
        <div class="name line">歡迎登錄法國巴黎人壽</div>
        <input class="button line" placeholder="請選擇通路代號"></input>
        <input class="button line" placeholder="請輸入業務員登錄字號"></input>
        <input class="button line" placeholder="請輸入密碼"></input>
        <div class="button line color">登录</div>
        <div @click="dialogVisible = true">忘记密码</div>
            <el-dialog class="box"
            title="重設帳戶密碼"
            :visible.sync="dialogVisible"
            center>
            <input class="button line" placeholder="請選擇通路代號"></input>
            <input class="button line" placeholder="請輸入業務員登錄字號"></input>
            <input class="button line" placeholder="請輸入密碼"></input>
            <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
            </el-dialog>
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
        dialogVisible: false
        }
    },
    components:{
    },
    methods:{
        handleClose(done) {
        this.$confirm('确认关闭？')
        .then(_ => {
        done();
        })
        .catch(_ => {});
        }
    }
}
</script>
<style lang="less" scoped>
html body{
    width: 100%;
    // height: 100vh;
}
.login{
    display: flex;
    background: #ffffff; 
 .right-login{  
    display: flex;
    flex: 1;
    flex-direction:column;
    align-items: center;
    justify-content: center;
      .button{ 
        width: 61%;
        height: 7.7%;
        background: #FFFFFF;
        border: 1px solid #DEDEDE;
        border-radius: 3px;
        font-family: MicrosoftYaHei;
        font-size: 26px;
        color: #CCCCCC;
        letter-spacing: 0.013%;
        display: flex;
        align-items: center;
      }
      .line{
          margin: 20px 0 20px 0;
      }
      .name{
        font-family: MicrosoftYaHei;
        font-size: 32px;
        color: #333333;
        letter-spacing: 10.66px;
      }
      .color{
        background: #00915A;
        border-radius: 3px;
        font-family: PingFangSC-Regular;
        font-size: 32px;
        color: #FFFFFF;
        letter-spacing: 1.6px;
        justify-content: center;
      }
 }
}
img{
    height: 100vh;
    width:100%;
}
.box{
    // width: 150%;
//    margin-top:25vh; 
}
</style>
