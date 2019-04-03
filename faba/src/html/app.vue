<template>
    <div  id="contain">
        <router-view></router-view>
    </div>

</template>

<script>
    export default {
        data:()=>{          //这里必须要函数返回值,()=>就是function()
            return {}
        }
    }
</script>

<style lang='less' scoped>
    @import "~@/style/page.less";

</style>