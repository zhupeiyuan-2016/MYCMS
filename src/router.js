import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login.vue'
import index from './views/index.vue'
import main from './components/page/main.vue'
import setup from './components/page/setup.vue'
import basesetup from './components/page/setup/base.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children:[
        {
          path:'/',
          name:'main',
          component:main
        },
        {
          path:'/setup',
          name:'setup',
          component:setup
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path:'/base',
      name:'base',
      component:basesetup
    }
  ]
})
