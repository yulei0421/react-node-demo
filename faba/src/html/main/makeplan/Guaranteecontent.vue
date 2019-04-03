<template>
    <div class="guaranteecontent">
        <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
        prop="date"
        label="日期"
         >
        <template slot="header" slot-scope="scope">
            <div class="formheader">
            <div>給付項目</div>
            <div class="warn">注1</div>
            </div>
        </template>
        </el-table-column>
        <el-table-column
        prop="name"
        label="姓名"
       >
        </el-table-column>
        <el-table-column
        prop="address"
        label="地址">
        </el-table-column>
        </el-table>
        <p>註1: 保險給付說明</p>
        <p>註2: 本房貸比較表僅供參考，實際數據請以銀行實際核貸金額為準。</p>
        <p>註3: 上述表格數值僅供參考，保險商品詳細內容請參閱保單條款。</p>
    </div>
</template>
<script>
export default {
     data() {
      return {
        activeName: 'first',
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      };
    },
}
</script>

<style lang="less" scoped>
.formheader{
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    .warn{
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        width: 40px;
        height: 15px;
        background: #FA9500;
        color: #999999;
        font-size:12px;
    }
}
</style>
