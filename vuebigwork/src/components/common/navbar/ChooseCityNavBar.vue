<template>
  <!--顶部导航栏-->
  <div class="navbar">
    <!--左边部分-->
    <div class="navbar-left">
      <van-icon name="cross" size="26" color="#333" @click="goBack()"/>
    </div>

    <!--右边部分-->
    <div class="navbar-right">
      <van-search v-model="value" shape="round"
        input-align="center" placeholder="输入城市名或拼音查询" class="search">
        <!--自定义搜索框左边的图标-->
        <template #left-icon>
          <van-icon name="search" size="18" color="#333"/>
        </template>
      </van-search>
    </div>
  </div>
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

    const router = useRouter() // 使用路由

    // 返回上一页
    const goBack = () => {
      router.go(-1)
    }

    return {
      ...toRefs(state),
      goBack
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar{
  position: fixed; // 固定定位
  left: 0;
  top: 0;
  right: 0;
  z-index: 9999;

  width: 100%;
  height: 49px;
  padding: 0;

  display: flex;
  flex-direction: row; /*横向排列*/
}
.navbar-left{
  padding-left: 15px;

  display: flex;
  align-items: center; // 测轴居中

  background-color: #fff;
}
.search{
  width: 330px; // 改变搜索框长度
  z-index: 9999;
}
</style>
