<template>
    <div class="shopinformation">
        <div class="shopinformation1">
            <div class="title">投资型</div>
            <div class="search">
            <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            v-model="input21">
            </el-input>
            </div>
        </div>
        <div class="content">
         <div class="title"><span class="point"></span>元氣滿滿專案</div>
         <div class="checkbox">
             <div class="box">1</div>
             <div class="box">2</div>
             <div class="box">3</div>
             <div class="box">4</div>
             <div class="box">4</div>
             <div class="box">4</div>
         </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            input21:''
        }
    }
}
</script>
<style lang="less" >
.shopinformation1{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title{
        font-family: MicrosoftYaHei;
        font-size: 15px;
        color: #00915A;
        letter-spacing: 0;
        text-align: center;
    }
    .search{
        width: 200px;
        font-family: MicrosoftYaHei;
        font-size: 13px;
        color: #D3D3D3;
        letter-spacing: 0;
       
        .el-input__inner{
         border-radius: 100px;
        }
    }
}
.content{
    display: flex;
    flex-direction: column;
    .title{
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }
    .checkbox{
        display: flex;
        // justify-content: space-between;
        flex-wrap: wrap;
        .box{
            display: flex;
            width: 20%;
            height: 100px;
            border: 1px solid #DEDEDE;
            justify-content: center;
            align-items: center;
            margin-right:4.5%; 
            margin-bottom: 20px;
        }
    }
}
.point{
    display: block;
    height: 7px;
    width: 7px;
    opacity: 0.3;
    background: #00915A;
    border-radius: 50%;
    margin-right: 20px;
}
</style>
