<template>
    <div class="insuranplanlegend">
       <div class="Printselection">
            <div class="title">列印選擇</div>
            <div class="surename">
                <div class="box">理專信息</div>
                <div class="box">錄音提示稿</div>
                <div class="box">保險計畫圖例</div>
            </div>
            <div class="insuarnplaninput">
            <div class="insuarnplaninput-1">
                <div>列印從第</div>
                <el-input v-model="input" placeholder="請輸入"></el-input>
                <div>年開始</div>
            </div>
                <div class="insuarnplaninput-1">
                <div>列印從第</div>
                <el-input v-model="input" placeholder="請輸入"></el-input>
                <div>年開始</div>
            </div>  
            </div>
       </div>
       <div class="Printselection">
            <div class="title">建議書封面</div>
            <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            show-file-list>
            <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
       </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            input:'',
            dialogImageUrl: '',
            dialogVisible: false
        }
    },
    methods: {
        handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
}
</script>
<style lang="less" scoped>
.insuranplanlegend{
    .Printselection{
        margin: 20px 20px 20px 20px;
        padding-top:20px; 
        padding-bottom:20px; 
        background:#ffffff; 
        .title{
        font-family: PingFangSC-Semibold;
        font-size: 14px;
        color: #333333;
        letter-spacing: 0;
        border-left: 2px solid #00915A;
        padding-left: 20px;
        height: 10%;
        margin-bottom: 20px;
        }
        .surename{
            display: flex;
            .box{
            width: 10%;
            margin-left: 20px;
            margin-bottom: 30px;
            font-family: MicrosoftYaHei;
            font-size: 15px;
            color: #666666;
            letter-spacing: 0;
            padding:10px 20px 10px 20px; 
            border: 1px solid #DEDEDE;
            border-radius: 3px;
            text-align: center;
            }
        }
        .insuarnplaninput{
            display: flex;
            .insuarnplaninput-1{
                font-family: MicrosoftYaHei;
                font-size: 14px;
                color: #666666;
                letter-spacing: 0;
                display: flex;
                margin-right: 40px;
                justify-content: center;
                align-items: center;
                
                div{
                    flex: 1;
                    margin-left: 20px;
                }
            }
        }
    }
}
</style>
