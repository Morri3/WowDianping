<template>
  <!--轮播图-->
  <van-swipe class="swiper" :height="220" indicator-color="#f4621a" show-indicators>
    <van-swipe-item>
      <!--种类的宫格第一页-->
      <van-grid :column-num="5" :gutter="0" :border="false" class="grid">
        <van-grid-item v-for="(item, index) in category" :key="index"
          class="category-item" @click="gotoCategory(item.name)">
          <van-image width="30" height="30" :src="item.pic"/>
          <div class="category-text">{{item.name}}</div>
        </van-grid-item>
      </van-grid>
    </van-swipe-item>

    <van-swipe-item>
      <!--种类的宫格第二页-->
      <van-grid :column-num="5" :gutter="0" :border="false" class="grid">
        <van-grid-item v-for="(item, index) in category2" :key="index"
          class="category-item" @click="gotoCategory(item.name)">
          <van-image width="30" height="30" :src="item.pic"/>
          <div class="category-text">{{item.name}}</div>
        </van-grid-item>
      </van-grid>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import { onBeforeMount, reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
// import axios from 'axios'
export default {
  data () {
    return {

    }
  },
  setup () {
    const state = reactive({
      city: '',
      category: [
        {
          pic: require('../../assets/images/home/icon1.jpg'),
          name: '美食'
        },
        {
          pic: require('../../assets/images/home/icon2.jpg'),
          name: '美团外卖'
        },
        {
          pic: require('../../assets/images/home/icon4.jpg'),
          name: '酒店/门票'
        },
        {
          pic: require('../../assets/images/home/icon3.jpg'),
          name: '休闲/玩乐'
        },
        {
          pic: require('../../assets/images/home/icon5.jpg'),
          name: '电影/演出'
        },
        {
          pic: require('../../assets/images/home/icon7.jpg'),
          name: '医疗/口腔'
        },
        {
          pic: require('../../assets/images/home/icon6.jpg'),
          name: '丽人/美发'
        },
        {
          pic: require('../../assets/images/home/icon8.jpg'),
          name: '学习培训'
        },
        {
          pic: require('../../assets/images/home/icon9.jpg'),
          name: '生活服务'
        },
        {
          pic: require('../../assets/images/home/icon10.jpg'),
          name: '孕产护理'
        }
      ],
      category2: [
        {
          pic: require('../../assets/images/home/icon11.jpg'),
          name: '宠物'
        },
        {
          pic: require('../../assets/images/home/icon12.jpg'),
          name: 'KTV'
        },
        {
          pic: require('../../assets/images/home/icon18.jpg'),
          name: '健身/运动'
        },
        {
          pic: require('../../assets/images/home/icon15.jpg'),
          name: '理发'
        },
        {
          pic: require('../../assets/images/home/icon14.jpg'),
          name: '景点/门票'
        },
        {
          pic: require('../../assets/images/home/icon13.jpg'),
          name: '密室'
        },
        {
          pic: require('../../assets/images/home/icon17.jpg'),
          name: '轰趴馆'
        },
        {
          pic: require('../../assets/images/home/icon16.jpg'),
          name: '按摩/足疗'
        },
        {
          pic: require('../../assets/images/home/icon19.jpg'),
          name: '手工DIY'
        },
        {
          pic: require('../../assets/images/home/icon20.jpg'),
          name: '逛街/商场'
        }
      ]
    })

    const route = useRoute() // 使用路由
    onBeforeMount(() => {
      // 设置城市
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

    // 点击宫格图标跳转到相应界面
    const gotoCategory = (name) => {
      if (name === '美食' && state.city === '杭州') { // 跳转到美食界面
        router.push({
          path: '/home/foods'
        })
      }
    }

    return {
      ...toRefs(state),
      chooseCity,
      route,
      gotoCategory
    }
  }
}
</script>

<style lang="scss" scoped>
.grid{
  margin-top: 49px; //显示在顶部导航栏下方
}
.category-text{
  font-size: 12px;
}
</style>
