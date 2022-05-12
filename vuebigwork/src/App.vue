<template>
  <div>
    <!--路由-->
    <router-view/>

    <!--底部导航栏-->
    <van-tabbar v-model="active" active-color="#f4621a" inactive-color="#c2c6cb" fixed v-show="routes"><!--根据路由显示底部导航栏-->
      <van-tabbar-item icon="wap-home" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="bag" to="/goods">好物</van-tabbar-item>
      <van-tabbar-item icon="add" to="/publish"></van-tabbar-item>
      <van-tabbar-item icon="like" to="/follow">关注</van-tabbar-item>
      <van-tabbar-item icon="manager" to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { reactive, toRefs, computed } from 'vue'
import { useRoute } from 'vue-router'
export default {
  components: {

  },

  props: {

  },

  emits: [

  ],

  setup () {
    const state = reactive({

    })

    const route = useRoute() // 使用路由
    const routes = computed(() => { // 显示底部导航栏的路由集合
      let res = null
      if (route.path === '/home' || route.path === '/goods' ||
        route.path === '/publish' || route.path === '/follow' ||
        route.path === '/my') { // 五个主页放底部导航栏
        res = route.path
      }
      return res
    })

    return {
      ...toRefs(state),
      routes
    }
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
