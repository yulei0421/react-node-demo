import Vue from "./elementuiplugin";
// import Vue from "vue";
// import VueRouter from 'vue-router'
// import { Button,Row,Loading, MessageBox, Message} from 'element-ui';
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import VueI18n from 'vue-i18n'
import router from "./../html/router"
// import {axioshttp, jsBridge} from 'src/widget'
import {axioshttp} from './../widget'
import store from './../store'
import animated from 'animate.css' 
Vue.use(animated)
// import VCharts from 'v-charts'
import  'lib-flexible'
import AudioRecorder from 'vue-audio-recorder'




// Vue.use(Button);
// Vue.use(Row);
// Vue.use(Loading.directive);
// Vue.prototype.$loading = Loading.service;
// Vue.prototype.$msgbox = MessageBox;
// Vue.prototype.$alert = MessageBox.alert;
// Vue.prototype.$confirm = MessageBox.confirm;
// Vue.prototype.$prompt = MessageBox.prompt;
// Vue.prototype.$notify = Notification;
// Vue.prototype.$message = Message;

// window.onresize = setHtmlFontSize;
// function setHtmlFontSize(){
//     const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
//     const htmlDom = document.getElementsByTagName('html')[0];
//     htmlDom.style.fontSize = htmlWidth / 10 + 'px';
// };
// setHtmlFontSize();
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(VCharts)
Vue.use(VueI18n);
Vue.use(AudioRecorder);

//国际化
const i18n = new VueI18n({
    locale: 'zh',    // 语言标识
    messages : {
        'us':require('./../lang/region/us'),
        'zh':require('./../lang/region/zh')
    }
})

let app = new Vue({
    el: '#app',
    i18n,
    router:router,
    store
});



axioshttp(app)
window.app = app
export default app
