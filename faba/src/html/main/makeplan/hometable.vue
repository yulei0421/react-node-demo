<template>
    <div class="hometable">
        <el-table :data="tableData" style="width: 100%" stripe>
            <el-table-column prop="date" label="貸款年期" width="150" align="center" >
            </el-table-column>
            <el-table-column label="一般房貸（A）" align="center" >
                <el-table-column prop="name" label="利率" align="center" >
                </el-table-column>
                <el-table-column prop="address" label="月付金額" align="center" >
                </el-table-column>
            </el-table-column>
            <el-table-column label="保障性房貸（B）" align="center" > 
                <el-table-column prop="city" label="利率" align="center" >
                </el-table-column>
                <el-table-column prop="address" label="月付金額" align="center" >
                </el-table-column>
            </el-table-column>
             <el-table-column label="比較（B-A）" align="center" > 
                <el-table-column prop="city" label="利率" align="center" >
                </el-table-column>
                <el-table-column prop="address" label="月付金額" align="center" >
                </el-table-column>
            </el-table-column>
        </el-table>
        <div>建議有個標題做區分</div>

         <el-collapse  @change="handleChange">
            <div >
            <transition name="bounce">
             <el-table :data="tableData" style="width: 100%" v-if="show">
            <el-table-column prop="date" label="貸款年期" width="150" align="center" >
            </el-table-column>
            <el-table-column label="本息均攤" align="center" >
                <el-table-column prop="name" label="貸款金額：100萬元" align="center" >
                    <el-table-column prop="address" label="利率" align="center" >
                    </el-table-column>
                     <el-table-column prop="address" label="月付金額" align="center" >
                    </el-table-column>
                     <el-table-column prop="address" label="貸款餘額" align="center" >
                    </el-table-column>
                </el-table-column>
            </el-table-column>
             <el-table-column label="本息均攤" align="center" >
                <el-table-column prop="name" label="貸款金額：100萬元" align="center" >
                    <el-table-column prop="address" label="利率" align="center" >
                    </el-table-column>
                     <el-table-column prop="address" label="月付金額" align="center" >
                    </el-table-column>
                     <el-table-column prop="address" label="貸款餘額" align="center" >
                    </el-table-column>
                </el-table-column>
            </el-table-column>
             <el-table-column  align="center" >
                <el-table-column prop="name"  align="center" >
                     <el-table-column prop="address" label="月付金額-差額" align="center" >
                    </el-table-column>
                </el-table-column>
            </el-table-column>
        </el-table>
      </transition>
     </div>

     <div @click="showa" v-if="!show" class="tableoff">打开表格<span class="el-icon-arrow-down"></span></div>
     <div @click="showa" v-else class="tableoff">关闭开表格<span class="el-icon-arrow-up"></span></div>

    </el-collapse>
         
       
    </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ],
      activeNames: ["1"],
      show:true
    };
  },
   methods: {
      handleChange(val) {
        console.log(val);
      },
      showa() {
          this.show = !this.show
      }
    }
};
</script>
<style lang="less" scoped>
.bounce-enter-active {
  animation: bounce-in 1s;
//   animation-duration:.5s;
//   animation-timing-function:.5
}
.bounce-leave-active {
  animation: bounce-in 1s reverse;
//   animation-duration:.5s;
//   animation-timing-function:.5
}
@keyframes bounce-in {
  0% {
    height:0px;
    // height: 0%;
  }
//   25% {
//       height: 150px;
//     // height: 25%;
//   }
//   50% {
//        height:300px;
//     //    height: 50%;
//     // transform: scaleY(0.5);
//   }
//   75% {
//       height: 450px;
//     // height: 75%;
//   }
  100% {
       height: 600px;
  }
}
.tableoff{
    display: flex;
    flex: 1;
    // opacity: 0.1;
    background: rgba(0,145,90,0.1);
    justify-content: center;
    align-items: center;
    height: 40px;
    color: #00915A;
    span{
        color: #00915A;
    }
}
</style>


