<template>
  <!--顶部导航栏-->
  <van-nav-bar @click-left="goBack()" @click-right="map()" class="navbar">

    <!--自定义左边部分-->
    <template #left>
      <van-icon name="arrow-left" size="24" color="#333"/>
    </template>

    <!--自定义中间部分-->
    <template #title>
      <van-search v-model="value" shape="round" disabled
        input-align="left" placeholder="烤肉" class="search">
        <!--自定义搜索框左边的图标-->
        <template #left-icon>
          <van-icon name="search" size="16" color="#333"/>
        </template>
      </van-search>
    </template>

    <!--自定义右边部分-->
    <template #right>
      <van-icon name="location-o" size="20" color="#333"/>
      <div class="mapMode">地图模式</div>
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

    // 返回上一页
    const router = useRouter() // 使用路由
    const goBack = () => {
      router.go(-1)
    }

    return {
      ...toRefs(state),
      goBack,
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
.search{
  width: 180px;

  margin: 5px;
  margin-left: 10px;
  height: 25px;
  padding: 0px;
  border-radius: 40px;
  box-shadow:0 2px 5px 1px #cccccc;/*阴影*/
}

</style>
