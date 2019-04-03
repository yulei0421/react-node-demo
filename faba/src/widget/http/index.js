import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
// axios.defaults.timeout = 20000
// if (process.env.NODE_ENV !== 'production'){
//     const cookies_token = document.cookie.match(/hq_http_usertoken=(.+);?/)
//     if (cookies_token) {
//         axios.defaults.headers.common['token'] = cookies_token[1].split(';')[0]
//     } else {
//         console.warn('请在浏览器中设置cookie: document.cookie="hq_http_usertoken=你的token"')
//     }
// }

// axios.postFrom = (uri, param) => {
//     let params = new URLSearchParams()
//     Object.keys(param).forEach((v, i, a) => {
//         params.append(v, param[v])
//     })
//     return axios.post(uri, params)
// }
export default function (app) {
    // http request 拦截器
    // app.axios.interceptors.request.use(
    //     config => {
    //
    //         return config
    //     },
    //     err => {
    //         return Promise.reject(err)
    //     }
    // )
    // // 添加响应拦截器
    // app.axios.interceptors.response.use(function (response) {
    //     if (response.data.errorCode === '20000') {
    //         app.$router.push({path: '/login', query: {url: window.location.href, redirectUrl: window.location.href}})
    //     }
    //     return response
    // }, function (error) {
    //     return Promise.reject(error)
    // })
}
