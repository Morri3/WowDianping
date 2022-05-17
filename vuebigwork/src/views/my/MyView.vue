<template>
  <!--顶部导航栏-->
  <my-nav-bar/>

  <!--用户卡片-->
  <user-card/>
  <!--会员等级、VIP俱乐部-->
  <member-vip/>
  <!--其他的item，通过ul li实现-->
  <other-item/>
</template>

<script>
import { reactive, toRefs } from 'vue'
import MyNavBar from '@/components/common/navbar/MyNavBar.vue'
import UserCard from '@/components/my/UserCard.vue'
import MemberVip from '@/components/my/MemberVip.vue'
import OtherItem from '@/components/my/OtherItem.vue'
export default {
  components: {
    MyNavBar,
    UserCard,
    MemberVip,
    OtherItem
  },
  setup () {
    const state = reactive({

    })
    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
