import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Booklist from '@/components/Booklist'
import AppNavigation from '@/components/AppNavigation'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: AppNavigation,
      children:[
        {
          path:'/home',
          component:Home,
          name:'Home'
        },
        {
          path:'/book',
          component:Booklist,
          name:'Booklist'
        },
      ]

    }
  ],
    mode:'history'
},

  )
