<template>
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
</template>
<script>
export default {
    data () {
        return {
            // dialogVisible:true
        }
    },
    props:[
     "dialogVisible"
    ],
    methods : {
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
