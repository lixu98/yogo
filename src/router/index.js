import Vue from 'vue'
import Router from 'vue-router'
import Detail from '@/views/detail'
import Index from '@/views/index'
import News from '@/views/news'
import notFount from '@/views/notFount'
import About from '@/views/about'
import About1 from '@/views/about/about1'
import About2 from '@/views/about/about2'
import About3 from '@/views/about/about3'
import Login from '@/views/login'
import Center from '@/views/center'
import Order from '@/views/order'
Vue.use(Router)

let router=new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'index',
      alias:"/doc",
      component: Index,
      meta:{
        showHeader:true,
        showFooter:true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta:{
        showHeader:false,
        showFooter:false
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      children:[
        {
          path:'',
          component:About1,
          meta:{
            index:0,
            showHeader:true,
            showFooter:true
          }
        },
        {
          path:'two',
          component:About2,
          meta:{
            index:1,
            showHeader:true,
            showFooter:true
          }
        },
        {
          path:'three',
          component:About3,
          meta:{
            index:2,
            showHeader:true,
            showFooter:true
          }
        }
      ]
    },
    {
      path: '/detail/:gid',
      name: 'detail',
      component: Detail,
      meta:{
        showHeader:true,
        showFooter:true
      }
    },
    {
      path: '/news',
      name: 'news',
      component: News,
      meta:{
        showHeader:true,
        showFooter:true
      }
    },
    {
      path: '/center',
      name: 'Center',
      component: Center,
      meta:{
        showHeader:true,
        showFooter:true,
        login:true
      }
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
      meta:{
        showHeader:true,
        showFooter:true,
        login:true
      }
    },
    {
      path: '*',
      // redirect:{name:"index"}
      component:notFount
      // redirect:(to)=>{
      //   console.log(to);
      //   if(to.path=="/aaa"){
      //       return "/"
      //   }else if(to.path=="/bbb"){
      //       return "/about"
      //   }else{
      //     return {name:"news"}
      //   }
        
      // }
    }
  ]
})
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
router.beforeEach((to,form,next)=>{
  if(to.meta.login){
    let info=router.app.$local.get("user").username;
    if(info){
      next();
    }else{
      alert("请先登录");
      router.push("/login");
    }
  }else{
    next();
  }
})
export default router