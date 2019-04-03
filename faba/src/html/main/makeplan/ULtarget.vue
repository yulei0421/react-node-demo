<template>
    <div class="ulTarget">
        <div class="title">
            <div class="titlecovenant"><span>標的</span><div class="t">投資標的</div></div>
            <div class="link" @click="dialogVisible = true">投資標的選擇<span class="el-icon-arrow-right"></span></div>
        </div>
        <div class="content">
         <div class="row"><span class="radius"></span><div class="contenttitle">投資標的配置比例</div></div>
         <div class="row"><div class="rowname">MF</div><div class="rowcontent"><el-input v-model="input1" placeholder="請輸入"></el-input></div><span class="company">%</span></div>
         <div class="row"><div class="rowname">MF</div><div class="rowcontent"><el-input v-model="input1" placeholder="請輸入"></el-input></div><span class="company">%</span></div>
         <div class="row"><div class="rowname">MF</div><div class="rowcontent"><el-input v-model="input1" placeholder="請輸入"></el-input></div><span class="company">%</span></div>
         <div class="row"><div class="rowname">MF</div><div class="rowcontent"><el-input v-model="input1" placeholder="請輸入"></el-input></div><span class="company">%</span></div>
        </div>
        <div class="content">
            <div class="row"><span class="radius"></span><div class="contenttitle">投資標的配置比例</div></div>
            <div class="row"><div class="rowname">目標到期基金(一般型)</div><div class="rowcontent"><el-input v-model="input1" placeholder="請輸入"></el-input></div><span class="company">%</span></div>
            <div class="row"><div class="rowname">目標到期基金(階梯型)</div><div class="rowcontent"><el-input v-model="input1" placeholder="請輸入"></el-input></div><span class="company">%</span></div>
            <div class="row"><div class="rowname">貨幣帳戶</div><div class="rowcontent"><el-input v-model="input1" placeholder="請輸入"></el-input></div><span class="company">%</span></div>
        </div>
        <div class="content">
            <div class="row"><span class="radius"></span><div class="">保險成本及帳戶管理費用扣款方式</div></div>
            <div class="row"><div class="rowname">目標到期基金(一般型)</div><div class="rowcontent"><el-select v-model="value" placeholder="请选择">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select></div><span class="company">%</span></div>
        </div>
        <div class="content">
            <div class="row"><span class="radius"></span><div class="contenttitle">假設平均年報酬率</div></div>
            <div class="row"><div class="rowname">報酬率1</div><div class="rowcontent"><el-input v-model="input1" placeholder="請輸入"></el-input></div><span class="company">%</span></div>
            <div class="row"><div class="rowname">報酬率2</div><div class="rowcontent"><el-input v-model="input1" placeholder="請輸入"></el-input></div><span class="company">%</span></div>
            <div class="row"><div class="rowname">報酬率3</div><div class="rowcontent"><el-input v-model="input1" placeholder="請輸入"></el-input></div><span class="company">%</span></div>
        </div>
        <el-dialog
        :visible.sync="dialogVisible"
        width="80%"
        :close-on-click-modal=false>
        <Uldialog></Uldialog>
        <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
        </el-dialog>
    </div>
</template>
<script>
import Uldialog from './ULDialog'
export default {
  data() {
    return {
      input1: "",
      dialogVisible: false,
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
      value: ""
    };
  },
  components:{
    Uldialog
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>

<style lang="less" scoped>
.ulTarget {
  background: #ffffff;
  padding: 20px 20px 20px 20px;
  margin-bottom: 20px;
  .title {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .titlecovenant {
    display: flex;
    align-items: center;
    span {
      display: block;
      height: 18px;
      width: 28px;
      background: #00bc8c;
      border-radius: 1.5px;
      color: aliceblue;
      margin-right: 20px;
      text-align: center;
    }
    .t {
      font-family: PingFangSC-Semibold;
      font-size: 17px;
      color: #333333;
      letter-spacing: 0;
    }
  }
  .link {
    width: 115px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    font-family: MicrosoftYaHei;
    font-size: 14px;
    color: #00bc8c;
    letter-spacing: 0;
  }
  .content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    .contenttitle {
      width: 100px;
      margin-right: 20px;
    }
    .row {
      display: flex;
      align-items: center;
      .radius {
        display: block;
        width: 5px;
        height: 5px;
        opacity: 0.3;
        background: #00915a;
        border-radius: 50%;
        margin-right: 10px;
      }
      .rowname {
        margin-right: 20px;
      }
      .rowcontent {
        width: 40%;
      }
      .company {
        margin-left: 10px;
      }
    }
  }
}
</style>

