// import mainView from "./../../app.vue"
// import leftbar from "./../frame/leftbar.vue"


const mainView = {
    template: '<router-view/>',
    name: 'MainView'
}


export default {
    path: '/',
    components: {
        default: mainView
    },
    Info: {
        description: '录音'
    },
    children: [
        {
            path: '',
            redirect: 'recorder'
        },
        {
            path: 'recorder',
            name: 'recorder',
            components: {
                default: () => import('./index.vue')
            },
            props: { default: true,mainView:true},
            meta: {
                title: '录音'
            }
        }
    ]
}
