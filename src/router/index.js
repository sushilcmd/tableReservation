import Vue from 'vue'
import VueRouter from 'vue-router'

import dashboard from '../views/dashboard.vue';
import newReservation from "../views/newReservation.vue";

Vue.use(VueRouter)

const routes = [{
        path: '/dashboard',
        name: 'dashboard',
        component: dashboard
    },
    {
        path: '/new',
        name: 'newReservation',
        component: newReservation
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            // component: () =>
            //     import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router