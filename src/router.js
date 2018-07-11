import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login.vue'
import index from './views/index.vue'
import main from './components/page/main.vue'
import setup from './components/page/setup.vue'
import basesetup from './components/page/setup/base.vue'
import writepost from './components/page/write/writepost.vue'
import write from './components/page/write/write.vue'
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
        },
        {
          path:'/writepost',
          name:'writepost',
          component:writepost
        },
        {
          path:'write',
          name:write,
          component:write
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
