import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { // 重定向到首页
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/HomeView.vue'),
    meta: { // 设置网页标题
      title: '首页'
    }
  },
  {
    path: '/goods',
    name: 'goods',
    component: () => import('../views/goods/GoodsView.vue'),
    meta: {
      title: '好物'
    }
  },
  {
    path: '/publish',
    name: 'publish',
    component: () => import('../views/publish/PublishView.vue'),
    meta: {
      title: '写点评'
    }
  },
  {
    path: '/follow',
    name: 'follow',
    component: () => import('../views/follow/FollowView.vue'),
    meta: {
      title: '关注'
    }
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('../views/my/MyView.vue'),
    meta: {
      title: '我的'
    }
  },
  {
    path: '/city',
    name: 'city',
    component: () => import('../components/home/city/ChooseCity.vue'),
    meta: {
      title: '选择城市'
    }
  },
  {
    path: '/city/search',
    name: 'searchcity',
    component: () => import('../components/home/city/SearchCity.vue'),
    meta: {
      title: '搜索城市'
    }
  },
  {
    path: '/home/foods',
    name: 'foods',
    component: () => import('../components/home/foods/FoodsVIew.vue'),
    meta: {
      title: '美食'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/my/LoginView.vue'),
    meta: {
      title: '登录'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title
  if (title) {
    document.title = title
  }
  next()
})

export default router // 把router暴露出去
