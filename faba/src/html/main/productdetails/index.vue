<template>
  <div>
      <div class="productdetails">
        <div class="productdetailstitle">
           <div>幸福世貸</div>
           <span>查看其他專案
            <el-select v-model="value" placeholder="请选择">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
            </el-select>
            </span>
            <div class="productdetailstitlebook" @click="dialogVisible = true">製作建議書</div>
                    <el-dialog 
                    title="請選擇商品進入製作建議書頁面"
                    :visible.sync="dialogVisible"
                    >
                     <div class="box" >
                     <div class="boxlist " v-for='(i,index) in arr ' @click="show(index)" :class="{colo:a.indexOf(index)!=-1}">
                         {{i}}
                     <div class="el-icon-success icon"></div>
                     </div>
                     <!-- <div class="boxlist">1</div>
                     <div class="boxlist">1</div> -->
                     </div>
                    <span slot="footer" class="dialog-footer">
                    <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
                    <el-button type="primary" @click="dialogVisible = false">確認</el-button>
                    </span>
                    </el-dialog>
            </div>
            <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="1">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理" name="2">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="3">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="4">定时任务补偿</el-tab-pane>
            </el-tabs>
        </div>
     </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "1",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      dialogVisible: false,
      arr:[1,2,3],
      a:[]
    };
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    show(v) {
        //多选数组
       this.a.push(v)
       let c = []
       c.push(v)
    //    console.log(this.a)
       let b = []
       this.a.forEach(i=>{
           if(!b.includes(i)){
               b.push(i)
           }
       })//点击获取到的数组
       let obj={}
       b.forEach(v=>{
           let num = 0
           this.a.forEach(j=>{
               if(j===v){
                   num++
                   obj[j]=num
               }
           })
       })
           this.a.forEach((i,index)=>{
           if(i===v&&obj[i]==2){
             this.a.splice(index,1)
            //  b.splice(index,1)
           }
       })
           this.a.forEach((i,index)=>{
           if(i===v&&obj[i]==2){
             this.a.splice(index,1)
           }
           })
       console.log(this.a)
    },
  }
};
</script>
<style lang="less">

.productdetails {
  background: #ffffff;
  height: 100%;
  // width: 100%;
  padding: 20px 20px 20px 20px;
    .el-tabs {
    font-family: MicrosoftYaHei;
    font-size: 15px;
    color: #666666;
    letter-spacing: 0;
    margin-left: 10px;
  }
  .el-dialog {
    .box {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    //   background: red;
      .boxlist {
        width: 90%;
        border: 1px solid #dedede;
        border-radius: 3px;
        height: 45px;
        margin: 10px 0 10px 0;
        line-height: 45px;
        position: relative;
        .icon{
            position: absolute;
            right: -15px;
            top: -15px;
            font-size:30px; 
        }
      }
    }
  }
}
.productdetailstitle {
  background: #ffffff;
  display: flex;
  justify-content: space-between;
}
.productdetailstitlebook {
  width: 230px;
  height: 40px;
  line-height: 40px;
  background: #00915a;
  border-radius: 3px;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
}
.colo{
    color: #00915a;
    border: 2px solid #00915a;
}
</style>
