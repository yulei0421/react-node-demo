// import mainView from "./../../app.vue"
// import leftbar from "./../frame/leftbar.vue"


const mainView = {
    template: '<router-view/>',
    name: 'MainView'
}

const sidebar = {
    props: ['id'],
    template: '<div>sidebar {{ id }}</div>'
}

export default {
    path: '/demo',
    components: {
        default: mainView,
        leftbar:sidebar
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
            path: 'sub/:planid/:applyid',
            name: 'sub',
            components: {
                default: () => import('./sub/index.vue')
                // leftbar:leftbar
            },
            props: { default: true,mainView:true},
            meta: {
                title: '制定投保计划',
                rightMenu: null,
            }
        }
    ]
}
