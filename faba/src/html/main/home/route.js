import mainView from "./../../app.vue"
import topbar from "./../frame/topbar.vue"
// import leftbar from "./../frame/leftbar.vue"

export default {
    path: '/demo',
    components: {
        default: mainView,
        topbar:topbar,
        // leftbar:leftbar
    },
    Info: {
        description: '制定投保计划'
    },
    children: [
        {
            path: '',
            redirect: 'demo'
        },
        {
            path: 'home',
            name: 'home',
            component: () => import('./home.vue'),
            meta: {
                title: '首页',
                rightMenu: null,
            }
        }
    ]
}
