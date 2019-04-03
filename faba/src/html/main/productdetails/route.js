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
            path: 'productdetails',
            name: 'productdetails',
            component: () => import('./index.vue'),
            meta: {
                title: '产品详情',
                rightMenu: null,
            }
        }
    ]
}
