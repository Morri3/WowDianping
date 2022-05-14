<template>
  <!--顶部导航栏-->
  <FoodsNavBar/>

  <!--五个类型宫格-->
  <FiveCategory/>
  <!--多个正方形广告框-->
  <AdSquare/>
  <!--商家列表-->
  <BusinessList/>
</template>

<script>
import { onBeforeMount, reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import FoodsNavBar from '@/components/common/navbar/FoodsNavBar.vue'
import FiveCategory from '@/components/home/foods/FiveCategory.vue'
import AdSquare from '@/components/home/foods/AdSquare.vue'
import BusinessList from '@/components/home/foods/BusinessList.vue'
export default {
  components: {
    FoodsNavBar,
    FiveCategory,
    AdSquare,
    BusinessList
  },
  data () {
    return {

    }
  },
  setup () {
    const state = reactive({
      city: '杭州',
      category: [
        {
          pic: require('../../../assets/images/home/icon1.jpg'),
          name: '美食'
        },
        {
          pic: require('../../../assets/images/home/icon2.jpg'),
          name: '美团外卖'
        },
        {
          pic: require('../../../assets/images/home/icon4.jpg'),
          name: '酒店/门票'
        },
        {
          pic: require('../../../assets/images/home/icon3.jpg'),
          name: '休闲/玩乐'
        },
        {
          pic: require('../../../assets/images/home/icon5.jpg'),
          name: '电影/演出'
        }
      ]
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

</style>
