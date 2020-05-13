/****   http.js   ****/
// 导入封装好的axios实例
import request from '../server'

const http = {
    /**
     * methods: 请求
     * @param url 请求地址 
     * @param params 请求参数
     */
    get(url: string, params: any) {
        const config = {
            methods: 'get',
            url: url,
            params: params ? params : '',
        }
        if (params) config.params = params
        return request(config)
    },
    post(url: string, params: any) {
        const config = {
            methods: 'post',
            url: url,
            data: params ? params : '',

        }
        if (params) config.data = params
        return request(config)
    },
    put(url: string, params: any) {
        const config = {
            methods: 'put',
            url: url,
            params: params ? params : '',
        }
        if (params) config.params = params
        return request(config)
    },
    delete(url: string, params: any) {
        const config = {
            methods: 'delete',
            url: url,
            params: params ? params : '',
        }
        if (params) config.params = params
        return request(config)
    }
}
//导出
export default http