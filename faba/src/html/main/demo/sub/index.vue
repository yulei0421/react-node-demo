<template>
    <div id="testpage">子页面
        <el-row>
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning" @click="changeLangEvent" plain>中文</el-button>
            <el-button type="danger" @click="$store.commit('switch_dialog')" plain>危险按钮</el-button>
        </el-row>
        <!--<div class="testcontain">-->
            <!--<a-button type="primary"  @click="$store.commit('switch_dialog')">Primary</a-button>-->
            <!--<a-button>Default</a-button>-->
            <!--<a-button type="dashed">Dashed</a-button>-->
            <!--<a-button type="danger">Danger</a-button>-->
        <!--</div>-->
        {{show}}
        <div>
            <ve-pie :data="chartData"></ve-pie>
        </div>
        <div>
            <img style="width: 50px;height: 50px" src="~@/assets/images/demo.jpeg">
        </div>
        <div class="imagebackground">

        </div>
        <div class="international">
            <p>{{ $t("lang.message") }}</p>
            <p>{{custommessage}}</p>
            <p>{{navCompany}}</p>
            <!--<p>{{$t("lang.suggestbook.good")}}</p>-->
            <p>{{$t("lang.suggestbook.demochinese.test")}}</p>
            <p>{{planid}}</p>
        </div>



    </div>
</template>

<script>
    import {TEST} from "@/api";
    import store from '@/store'
    import {mapState} from 'vuex'
    // import { Button } from 'ant-design-vue';
    import VePie from 'v-charts/lib/pie.common'
    export default {
        data:()=>{          //这里必须要函数返回值,()=>就是function()
            return {
                store: store,
                custommessage:'',
                imgsrc:'/assets/images/demo2.jepg',
                chartData: {
                    columns: ['日期', '访问用户'],
                    rows: [
                        { '日期': '1/1', '访问用户': 1393 },
                        { '日期': '1/2', '访问用户': 3530 },
                        { '日期': '1/3', '访问用户': 2923 },
                        { '日期': '1/4', '访问用户': 1723 },
                        { '日期': '1/5', '访问用户': 3792 },
                        { '日期': '1/6', '访问用户': 4593 }
                    ]
                }
            }
        },
        created() {
            this.custommessage = this.$t("lang.message")+'处理过的';
            console.log(this.$store.state.show)
            this.axios.post(TEST).then(({ data }) => {

            });
        },
        props: ['planid'],
        components: {
            // AButton:Button,
            VePie
        },
        computed:{
            //这里的三点叫做 : 扩展运算符
            ...mapState({
                show:state=>state.demo.show
            }),
            navCompany:function(){
                // if(this.nav_company){
                    let str = 'lang.message';
                    return this.$t(str)+':8888';
                // }
            }
        },
        methods:{
            changeLangEvent() {
                console.log('changeLangEvent');
                this.$confirm('确定切换语言吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    if ( this.$i18n.locale === 'zh' ) {
                        this.$i18n.locale = 'us';//关键语句
                        console.log('us')
                    }else {
                        this.$i18n.locale = 'zh';//关键语句
                        console.log('zh')
                    }
                }).catch(() => {
                    console.log('catch');
                    this.$message({
                        type: 'info',
                    });
                });
            }
        }
    }
</script>

<style lang='less' scoped>
@import "~@/style/page.less";

    .imagebackground{
        width: 50px;
        height: 50px;
        background: url(~@/assets/images/demo2.jpeg);
        background-size: 100% 100%;
    }

</style>