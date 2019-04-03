import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
import demo from './demo';//引入某个store对象

export default new vuex.Store({
    modules: {
        demo
    }
})