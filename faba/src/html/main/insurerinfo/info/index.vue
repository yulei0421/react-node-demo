<template>
    <div class="vessel">
        <div id="insurerinfo">

            <article>
                <section class="baseinfo">
                    <div class="title">
                        基本信息
                    </div>
                </section>
            </article>
        </div>
    </div>
</template>

<script>
    export default {
        name: "insurerinfo",
        data:()=>{          //这里必须要函数返回值,()=>就是function()
            return {
                title: '',
            }
        },
        created(){
        }
    }
</script>

<style lang='less' scoped>
    @import "~@/style/page.less";
    #insurerinfo{
        article{
            .baseinfo{
                background-color: #e9e9eb;
                height: 274px;
                .title{
                    height: 100px;
                    color:#333;
                    font-size: 17px;
                }
            }
        }
    }

</style>