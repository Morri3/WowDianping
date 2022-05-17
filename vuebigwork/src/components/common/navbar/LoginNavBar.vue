<template>
  <!--顶部导航栏-->
  <van-nav-bar @click-left="close()" class="navbar">

    <!--自定义左边部分-->
    <template #left>
      <van-icon name="cross" size="22" color="#333"/>
    </template>

  </van-nav-bar>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
export default {
  data () {
    return {

    }
  },
  setup () {
    const state = reactive({
    })

    // 关闭登录界面
    const router = useRouter() // 使用路由
    const close = () => {
      router.go(-1)
    }

    return {
      ...toRefs(state),
      close
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

</style>
