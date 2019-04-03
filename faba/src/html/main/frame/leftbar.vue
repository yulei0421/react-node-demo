<template>
    <div id="leftbar">
        <div class="barmenu">
            <ul class="iconlist">
                <li>
                    <i>1</i>
                </li>
                <li>
                    <i>2</i>
                </li>
                <li>
                    <i>3</i>
                </li>
                <li>
                    <i>4</i>
                </li>
                <li>
                    <i>5</i>
                </li>
                <li>
                    <i>6</i>
                </li>
                <li>
                    <i>7</i>
                </li>
                <li>
                    <i>8</i>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "leftbar",
        props: ['planid']
    }
</script>

<style lang='less' scoped>
    @import "~@/style/page.less";
    #leftbar{
        width: 65px;
        height: 100%;
        z-index: 888;
        position: fixed;
        left:0;
        top:0;
        .barmenu{
            width: 100%;
            height: 100%;
            background-color: #666666;
            .iconlist{
                padding-top: 45px;
                li{
                    height: 60px;
                    line-height: 60px;
                    text-align: center;
                }

            }
        }
    }
</style>