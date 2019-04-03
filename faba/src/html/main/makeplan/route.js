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
            path: 'makeplan',
            name: 'makeplan',
            component: () => import('./index.vue'),
            meta: {
                title: '制作计划书',
                rightMenu: null,
            },
            children:[
                {
                    path:'makeplan1',
                    name: 'makeplan1',
                    component: () => import('./makeplan.vue'),
                },
                {
                    path:'shop',
                    name:'shop',
                    component:() => import('./shop.vue'),
                },
                {
                    path:'lordcovenant',
                    name:'lordcovenant',
                    component:()=>import('./lordcovenant.vue')
                },
                {
                    path:'ULshop',
                    name:'ULshop',
                    component:()=>import('./UIshop.vue')
                },
                {
                    path:'insuranceplan',
                    name:'insuranceplan',
                    component:()=>import('./Insuranceplan.vue')
                },
                {
                    path:'insuranPlanlegend',
                    name:'insuranPlanlegend',
                    component:()=>import('./InsurancePlanLegend.vue')
                }
            ]
            
        }
    ]
}
