<template>
  <!--左右轮播图-->
  <van-swipe class="swiper" :loop="false" :width="110" :height="110"
    :show-indicators="false">
    <van-swipe-item v-for="(item, index) in ads" :key="index" class="category-item">
      <!--每个正方形由背景图片+标题+副标题组成-->
      <div class="ad">
        <van-image width="100" height="100" :src="item.pic" class="bg"/>
        <div class="title1">{{item.title1}}</div>
        <div class="title2">{{item.title2}}</div>
      </div>
    </van-swipe-item>
  </van-swipe>
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
      city: '杭州',
      ads: [
        {
          pic: require('../../../assets/images/home/ad5.jpg'),
          title1: '深夜食堂',
          title2: '美味不打烊'
        },
        {
          pic: require('../../../assets/images/home/ad6.jpg'),
          title1: '约会好去处',
          title2: '和ta的专属浪漫'
        },
        {
          pic: require('../../../assets/images/home/ad7.jpg'),
          title1: '学生党美食',
          title2: '平价美味'
        },
        {
          pic: require('../../../assets/images/home/ad8.jpg'),
          title1: '惊喜新店',
          title2: '每日锻炼'
        },
        {
          pic: require('../../../assets/images/home/ad9.jpg'),
          title1: '朋友小聚',
          title2: '聚餐好去处'
        },
        {
          pic: require('../../../assets/images/home/ad10.jpg'),
          title1: '超值特惠',
          title2: '高性价比优选'
        },
        {
          pic: require('../../../assets/images/home/ad11.jpg'),
          title1: '纪念日精选',
          title2: '吃出仪式感'
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
.grid{
  margin-top: 49px; //显示在顶部导航栏下方
}

.ad{
  border-radius: 25px;
}
.bg{
  z-index: -9999;
  box-shadow:0 1.2px 3px 0.5px #969595;/*阴影*/
}
.title1, .title2{
  color: white;
  margin-left: -15px;
  text-shadow: 0.5px 0.5px 0.8px black, 0 0 25px #f4621a, 0 0 1px #f4621a;
}
.title1{
  font-size: 16px;
  margin-top: -45px;
  font-weight: 700;
}
.title2{
  font-size: 12px;
}
.blur{
  z-index: 99999;
  margin-top: -30px;
  height: 60px;
}
</style>
