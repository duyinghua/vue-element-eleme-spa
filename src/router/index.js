import Vue from 'vue'
import Router from 'vue-router'

import app from '../app.vue'
import index from '../pages/index.vue'
import a from '../pages/a.vue'
import b from '../pages/b.vue'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            component: app,
            children: [
                {path: '', redirect: '/index'},
                {path: '/index', component: index},
                {path: '/a', component: a},
                {path: '/b', component: b}
            ]
        }
    ]
})
