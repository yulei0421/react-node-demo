import mainView from "./../../app.vue"
import topbar from "./../frame/topbar.vue"
import leftbar from "./../frame/leftbar.vue"

export default {
    path: '/demo',
    components: {
        default: mainView,
        // topbar
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
            path: 'querybook',
            name: 'querybook',
            component: () => import('./index.vue'),
            meta: {
                title: '产品详情',
                rightMenu: null,
            }
        }
    ]
}
