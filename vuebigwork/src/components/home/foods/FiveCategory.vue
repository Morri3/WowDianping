<template>
  <van-grid :column-num="5" :gutter="0" :border="false" class="grid">
    <van-grid-item v-for="(item, index) in category" :key="index"
      class="category-item" @click="gotoCategory(item.name)">
      <van-image width="40" height="40" :src="item.pic"/>
      <div class="category-text">{{item.name}}</div>
    </van-grid-item>
  </van-grid>
</template>

<script>
import { reactive, toRefs } from 'vue'
// import { useRouter } from 'vue-router'
export default {
  data () {
    return {

    }
  },
  setup () {
    const state = reactive({
      category: [
        {
          pic: require('../../../assets/images/home/rank.png'),
          name: '美食排行'
        },
        {
          pic: require('../../../assets/images/home/icon12.jpg'),
          name: '火锅'
        },
        {
          pic: require('../../../assets/images/home/icon21.png'),
          name: '排队取号'
        },
        {
          pic: require('../../../assets/images/home/icon22.png'),
          name: '订座'
        },
        {
          pic: require('../../../assets/images/home/icon23.png'),
          name: '美团外卖'
        }
      ]
    })

    return {
      ...toRefs(state)
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
