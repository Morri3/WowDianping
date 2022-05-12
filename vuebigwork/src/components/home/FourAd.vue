<template>
  <div class="ads">
    <div v-for="(item, index) in ads" :key="index" class="board">
      <div class="title">{{item.title}}</div>
      <div class="title2">{{item.title2}}</div>
      <van-image width="14" height="14" :src="item.pic" class="img"/>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  data () {
    return {

    }
  },
  setup () {
    const state = reactive({
      ads: [
        {
          pic: require('../../assets/images/home/ad1.png'),
          title: '限时秒杀',
          title2: '每日福利'
        },
        {
          pic: require('../../assets/images/home/ad2.png'),
          title: '点评榜单',
          title2: '好店排行'
        },
        {
          pic: require('../../assets/images/home/ad3.png'),
          title: '免费试',
          title2: '吃喝玩乐'
        },
        {
          pic: require('../../assets/images/home/ad4.png'),
          title: '积分商城',
          title2: '兑换惊喜'
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
.ads{
  display: flex;
  flex-direction: row; /*横向排列*/
  align-items: center;
}
.board{
  background-color: rgb(250, 244, 244);
  width: 80px;
  height: 50px;
  margin: 0 10px 0 10px;
  border-radius: 10px;
  box-shadow:0 0.8px 2px 0.5px #ababab;/*阴影*/
}
.title{
  font-size: 14px;
  margin-right: 5px;
  color: white;
  text-shadow: 0.5px 0.5px 0.8px black, 0 0 25px #f4621a, 0 0 1px #f4621a;
}
.title2{
  font-size: 10px;
  margin-right: 10px;
}
.img{
  margin-left: 40px;
  margin-bottom: 15px;
}
</style>
