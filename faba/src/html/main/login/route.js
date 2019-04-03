import mainView from "./../../app.vue"

export default {
    path: '/demo',
    components: {
        default: mainView
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
            path: 'login',
            name: 'login',
            component: () => import('./login.vue'),
            meta: {
                title: '登录页面',
                rightMenu: null,
            }
        }
    ]
}
