/*
 * @Author: 余磊
 * @Date: 2020-05-25 15:56:34
 * @LastEditTime: 2020-05-25 15:56:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-app/src/util/getEnv/index.ts
 */ 
export function getEnv() {
    const navigatorEnvironment = {
        platform: '', //  pc端;移动端;
        surroundings: '',
        tripartite: '', // 判断环境
    }
    var u = navigator.userAgent;
    if (u.match(/AppleWebKit.*Mobile.*/)) {
        navigatorEnvironment.platform = 'mobile'

        const ua = navigator.userAgent.toLowerCase();//获取判断用的对象

        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            navigatorEnvironment.tripartite = 'weixin'
        }else if (ua.match(/WeiBo/i) == "weibo") {
            //在新浪微博客户端打开
            navigatorEnvironment.tripartite = 'weibo'
        }else if (ua.match(/QQ/i) == "qq") {
            //在QQ中打开
            navigatorEnvironment.tripartite = 'qq'
        }else if(/alipay/ig.test(ua)){
            //在支付宝打开中打开
            navigatorEnvironment.tripartite = 'alipay'
        }else if (/swan/ig.test(ua)) {
            //在QQ中打开
            navigatorEnvironment.tripartite = 'swan'
        }else if(/toutiaomicroapp/ig.test(ua)){
            //头条小程序
            navigatorEnvironment.tripartite = 'toutiao'
        }else {
            //在支付宝打开中打开
            navigatorEnvironment.tripartite = 'browser'
        }
    } else {
        navigatorEnvironment.platform = 'pc'
        navigatorEnvironment.tripartite = 'browser'
        navigatorEnvironment.surroundings = 'browser'
    }
    return navigatorEnvironment
}
