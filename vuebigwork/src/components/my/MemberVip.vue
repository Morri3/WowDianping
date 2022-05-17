<template>
  <div class="memberVip">
    <div class="card">
      <div class="cardLeft">
        <van-image width="20" height="20" round :src="pic1" class="icon"/>
        <div>会员等级</div>
      </div>

      <div class="divider"></div><!--分割线-->

      <div class="cardRight">
        <van-image width="20" height="20" round :src="pic2" class="icon"/>
        <div>VIP俱乐部</div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  setup () {
    const state = reactive({
      pic1: require('../../assets/images/my/level.png'),
      pic2: require('../../assets/images/my/vip.png')
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
.memberVip{
  background-color: #fff;

  display: flex;
  flex-direction: row; /*横向排列*/
  align-items: center;
  justify-content: center;

  margin-top: 25px;
}

.card, .cardLeft, .cardRight{
  display: flex;
  flex-direction: row; /*横向排列*/
  align-items: center;
  justify-content: center;

  font-size: 16px;
  font-weight: 700;
}
.card{
  box-shadow:0.3px 1.8px 3px 0.8px #969595;/*阴影*/
  border-radius: 20px;

  width: 300px;
}
.divider{
  width: 1px;
  height: 20px;
  background-color: #bdbdbd;

  margin-top: 10px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 10px;
}
</style>
