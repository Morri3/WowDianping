<template>
  <!--顶部导航栏-->
  <van-nav-bar @click-left="chooseCity()" @click-right="more()" class="navbar">

    <!--自定义左边部分-->
    <template #left>
      <div class="city">{{city}}</div>
      <van-icon name="arrow-down" size="18" color="#333"/>
    </template>

    <!--自定义中间部分-->
    <template #title>
      <van-search v-model="value" shape="round" disabled
        input-align="center" placeholder="咖啡" class="search">
        <!--自定义搜索框左边的图标-->
        <template #left-icon>
          <van-icon name="search" size="18" color="#333"/>
        </template>
      </van-search>
    </template>

    <!--自定义右边部分-->
    <template #right>
      <van-icon name="ellipsis" size="20" color="#333"/>
    </template>

  </van-nav-bar>
</template>

<script>
import { onBeforeMount, reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
export default {
  data () {
    return {

    }
  },
  setup () {
    const state = reactive({
      city: '杭州'
    })

    // 设置城市
    const route = useRoute() // 使用路由
    onBeforeMount(() => {
      state.city = route.query.city
    })

    // 选择城市
    const router = useRouter() // 使用路由
    const chooseCity = () => {
      router.push({ // 跳转到选择城市界面
        path: '/city',
        query: {
          city: state.city // 把城市传给选择城市页
        }
      })
    }

    return {
      ...toRefs(state),
      chooseCity,
      route
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar { //固定顶部导航栏
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999; //位置在最上面

  height: 49px;
}

.city{
  font-size: 14px;
  font-weight: 800;

  // 下面4行：限制文字长度，多出的省略号省略
  max-width: 45px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.search{
  height:49px;
}

</style>
