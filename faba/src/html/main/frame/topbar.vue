<template>
    <div id="topbar">
        <ul class="topitem">
            <li class="left"><i></i>返回</li>
            <li class="center">{{titlename}}</li>
            <li class="right">
                <menu>
                    <span class="icon"></span>
                    <span>秋咪</span>

                </menu>
                <menu>
                    <span class="icon">xx</span>银行-
                    <span>xx</span>分行
                </menu>
                <menu>
                    <span class="icon"></span>
                    <span>30</span>s
                </menu>
                <menu>
                    <span class="icon"></span>
                    <span></span>
                </menu>
            </li>
        </ul>



    </div>
</template>

<script>
    let title = '';
    export default {
        name: "leftbar",
        props: ['planid'],
        data:()=>{          //这里必须要函数返回值,()=>就是function()
            return {
                titlename: '',
            }
        },
        created() {
            this.titlename = title;
        },
        beforeRouteEnter (to, from, next) {
            // 在渲染该组件的对应路由被 confirm 前调用
            // 不！能！获取组件实例 `this`
            // 因为当守卫执行前，组件实例还没被创建
            let data = to;
            title = data.meta.title;
            next()
        }
    }
</script>

<style lang='less' scoped>
    @import "~@/style/page.less";


    /*PC*/
    @media all and (min-width: 1200px) {
        #topbar{
            .topitem{
                .left{
                    flex:2;
                }
                .center{
                    flex:2;
                }
                .right{
                    flex:2;
                }
            }
        }
    }
    /*ipad横屏*/
    @media (min-width: 780px) and (max-width: 1080px) {
        #topbar{
            .topitem{
                .left{
                    flex:2;
                }
                .center{
                    flex:2;
                    text-indent: 80px;
                }
                .right{
                    flex:3!important;
                }
            }
        }
    }

    /*ipad竖屏*/
    @media (min-width: 400px)and (max-width: 780px) {
        #topbar{
            .topitem{
                .left{
                    flex:2;
                }
                .center{
                    text-indent: 120px;
                    flex:3!important;
                }
                .right{
                    flex:4!important;
                }
            }
        }
    }


    #topbar{
        width: 100%;
        height: 45px;
        position: fixed;
        top:0px;
        border-bottom: 1px solid #e9e9eb;
        z-index: 889;
        background-color: #ffffff;

        .topitem{
            display: flex;
            flex-direction: row;
            list-style-type: none;
            height: 45px;
            line-height: 45px;
            .left{
                flex:2;
                text-indent: 20px;
                color: #00915A;
                font-size: 14px;
                /*display: flex;*/
                i{
                    display: inline-block;
                    border:#00915A solid;
                    border-width:1px 1px 0 0;
                    width:8px;
                    height:8px;
                    -webkit-transform: rotate(-135deg);
                    transform: rotate(-135deg);
                }


            }
            .center{
                flex:2;
                text-align: center;
                font-size: 17px;
            }
            .right{
                flex:2;
                display: flex;
                font-size: 14px;
                color:#666666;
                menu:nth-child(1){
                    flex:2;
                    .icon{
                        width: 14px; height: 17px;
                        display: inline-block;
                        background: url(~@/assets/images/banner/account.svg) no-repeat center;
                        background-size: 100%;
                        vertical-align: middle;
                    }
                }
                menu:nth-child(2){
                    flex:3;
                }
                menu:nth-child(3){
                    flex:2;
                    .icon{
                        width: 14px; height: 17px;
                        display: inline-block;
                        background: url(~@/assets/images/banner/time.svg) no-repeat center;
                        background-size: 100%;
                        vertical-align: middle;
                    }
                }
                menu:nth-child(4){
                    flex:2;
                    text-align: right;
                    position: relative;
                    .icon{
                        margin-right: 30px;
                        width: 15px; height: 15px;
                        display: inline-block;
                        background: url(~@/assets/images/banner/signout.svg) no-repeat center;
                        background-size: 100%;
                        vertical-align: middle;
                    }
                }
                menu:nth-child(4):before{
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 25%;
                    bottom: auto;
                    right: auto;
                    height: 50%;
                    width: 1px;
                    background-color: #e9e9eb;
                }



            }
        }







    }
</style>