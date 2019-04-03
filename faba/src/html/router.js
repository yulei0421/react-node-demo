/*
* @Author: jankergg
* @Date:   2018-05-08 11:13:40
* @Last Modified by:   jankergg
* @Last Modified time: 2018-06-25 15:35:08
说明： 控制step流程的逻辑写在store/modules/plan.js
* TODO: 1、重复模块合并, addUser/insure
* TODO: 2、页面导航，前进后退，指定跳转
* TODO: 3、侧边栏导航
* TODO: 4、nextStep guarding
*/

import Vue from 'vue'
import Router from 'vue-router'
import demo from './main/demo/route'
import login from './main/login/route'
import home from './main/home/route'
import recommendingcommodities from './main/RecommendingCommodities/route'
import search from './main/search/route'
import productdetails from './main/productdetails/route'
import query from './main/querybook/route'
import makeplan from './main/makeplan/route'
import insurerinfo from './main/insurerinfo/route'
import record from './main/record/route'
import recorder from './main/recorder/route'
// import Antd from 'ant-design-vue'
// import 'ant-design-vue/lib/button/style';


Vue.use(Router)
// Vue.use(Antd)

// 所有页面
export const routes = [
    demo,
    login,
    home,
    recommendingcommodities,
    search,
    productdetails,
    query,
    makeplan,
    insurerinfo,
    record,
    recorder
]

const router = new Router({
    mode: 'history',
    linkExactActiveClass: '',
    linkActiveClass: 'active',
    routes
})

// router.onReady(() => {
//     store.commit(MUTATION.SET_STEP_ROUTES, {stepRoutes: pluckRoutes(routes)})
// })

export default router

