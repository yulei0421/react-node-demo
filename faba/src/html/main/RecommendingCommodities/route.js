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
            path: 'recommendingshop',
            name: 'recommendingshop',
            component: () => import('./index.vue'),
            meta: {
                title: '推荐商品',
                rightMenu: null,
            }
        }
    ]
}
