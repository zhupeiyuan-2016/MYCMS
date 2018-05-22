import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login.vue'
import index from './views/index.vue'
import main from './components/page/main.vue'
import onetitle from './components/page/onetitle.vue'
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
          path:'/onetitle',
          name:'onetitle',
          component:onetitle
        }
      ]
      // children: {
      //    children: 
      // }
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
