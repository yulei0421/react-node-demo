// import store from 'src/store'
// const env = {
//     get inApp() {
//         return store.getters.inApp
//     }
// }
// 全局开启本地mock

let root = ''
export const isPro = () => process.env.NODE_ENV === 'production'

if (isPro()) {
    root = '/api'
} else {
    root = 'http://uat-ipolicy.fosun-uhi.com/api'
}
let path = (inf = null, n) => {
    let result = ''
    if (isPro()) {
        result = root + inf
    } else {
        result = root + inf
    }
    return result
}
// const deco = (app, share) => {
//     return root + (env.inApp ? app : share || app)
// }

export const TEST = path('/applyProgress/queryProgress')