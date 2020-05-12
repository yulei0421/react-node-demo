import axios from 'axios'
import qs from 'qs'

let http: any = {
    get: '',
    post: ''
}
http.post = function (api: string, data: any) {
    let parmas = qs.stringify(data)
    return new Promise((res, req) => {
        axios.post(api, parmas).then(data => {
            res(data)
        })
    })
}

http.get = function (api: string, data: any) {
    let parmas: any = qs.stringify(data)
    axios.interceptors.request.use(function (config) {
        // 在发送请求之前做些什么
        config.headers['X-iChangTou-Json-Api-Token'] = '51f10fe1c9b7416f9aed0952aba7bb10'
        return config;
      }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
      });
    // debugger
    console.log(axios.create)
    return new Promise((res, req) => {
        axios.get(api, parmas).then((data: any) => {
            res(data)
        })
    })
}

export default http