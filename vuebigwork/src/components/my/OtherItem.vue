<template>
  <div class="otherItem">
    <ul class="list">
      <li class="item" v-for="(item,index) in item" :key="index">
        <van-image width="20" height="20" round :src="item.pic" class="icon"/>
        <div class="text">{{item.name}}</div>
        <van-icon name="arrow" size="16" color="#bdbdbd" class="next"/>
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  setup () {
    const state = reactive({
      item: [
        {
          pic: require('../../assets/images/my/item1.png'),
          name: '收藏'
        },
        {
          pic: require('../../assets/images/my/item2.png'),
          name: '最近浏览'
        },
        {
          pic: require('../../assets/images/my/item3.png'),
          name: '待评价'
        },
        {
          pic: require('../../assets/images/my/item4.png'),
          name: '订单'
        },
        {
          pic: require('../../assets/images/my/item5.png'),
          name: '卡券'
        },
        {
          pic: require('../../assets/images/my/item6.png'),
          name: '积分'
        },
        {
          pic: require('../../assets/images/my/item7.png'),
          name: '每日福利'
        },
        {
          pic: require('../../assets/images/my/item8.png'),
          name: '贡献信息'
        },
        {
          pic: require('../../assets/images/my/item9.png'),
          name: '联系客服'
        },
        {
          pic: require('../../assets/images/my/item10.png'),
          name: '我要合作'
        },
        {
          pic: require('../../assets/images/my/item11.png'),
          name: '更多'
        },
        {
          pic: require('../../assets/images/my/item12.png'),
          name: '我的钱包'
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
.otherItem{
  margin-top: 20px;
  margin-bottom: 69px;
}

.item{
  margin-left: 20px;
  display: flex;
  flex-direction: row; /*横向排列*/
  align-items: center;

  font-size: 16px;
  font-weight: 400;
  margin-top: 25px;
}
.text{
  margin-left: 20px;
}
.next{
  position: absolute;
  right: 20px;
}
</style>
