<template>
  <!--顶部导航栏-->
  <div class="navbar">
    <!--左边部分-->
    <div class="navbar-left">
      <van-icon name="cross" size="24" color="#333" @click="goBack()"/>
    </div>

    <!--右边部分-->
    <div class="navbar-right">
      <van-search v-model="value" shape="round" @click="gotoSearch(cities)"
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
  props: {
    cities: {
      type: Object,
      default () {
        return {}
      }
    }
  },
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

    // 跳转到搜索页
    const gotoSearch = (cities) => {
      console.log(cities)
      router.push({ // 跳转到搜索城市界面
        path: '/city/search',
        query: {
          cities: JSON.stringify(cities) // 把城市传给SearchCity
        }
      })
    }

    return {
      ...toRefs(state),
      goBack,
      gotoSearch
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
  background-color: #fff;

  display: flex;
  flex-direction: row; /*横向排列*/
  align-items: center;
}
.navbar-left{
  padding-left: 15px;

  display: flex;
  align-items: center; // 测轴居中

  background-color: #fff;
}
.search{
  width: 310px; // 改变搜索框长度
  z-index: 9999;
  margin: 5px;
  margin-left: 10px;
  height: 25px;
  padding: 0px;
  border-radius: 40px;
  box-shadow:0 2px 5px 1px #cccccc;/*阴影*/
  // background-color: #e0e0e0;
}
</style>
