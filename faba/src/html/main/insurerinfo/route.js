import mainView from "./../../app.vue"
import topbar from "./../frame/topbar.vue"
import leftbar from "./../frame/leftbar.vue"

export default {
    path: '/insurer',
    components: {
        default: mainView,
        topbar:topbar,
        leftbar:leftbar
    },
    Info: {
        description: '要保人资讯'
    },
    children: [
        {
            path: '',
            redirect: 'info'
        },
        {
            path: 'info/:planid/:applyid',
            name: 'info',
            components: {
                default: () => import('./info/index.vue')
                // leftbar:leftbar
            },
            props: { default: true,mainView:true},
            meta: {
                title: '要保人资讯'
                // rightMenu: null,
            }
        }
    ]
}
