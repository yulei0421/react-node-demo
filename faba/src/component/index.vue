<template>
    <div  id="app">组件{{planid}}
       <router-view></router-view>
    </div>

</template>

<script>
    export default {
        data:()=>{          //这里必须要函数返回值,()=>就是function()
                return {age:"18"}
           },
        props: ['planid'],
        }
</script>

<style scoped>

</style>