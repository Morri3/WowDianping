<template>
  <!--顶部导航栏-->
  <HomeNavBar/>

  <!--种类宫格-->
  <CategoryGrids />
  <!--四个广告方框-->
  <Advertisement />
  <!--底部图片方框-->
  <SharePic/>
</template>

<script>
import { reactive, toRefs } from 'vue'
import HomeNavBar from '@/components/common/navbar/HomeNavBar.vue'
import CategoryGrids from '@/components/home/CategoryGrids.vue'
import Advertisement from '@/components/home/FourAd.vue'
import SharePic from '@/components/home/SharePic.vue'
export default {
  components: { // 组件引用
    HomeNavBar,
    CategoryGrids,
    Advertisement,
    SharePic
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

<style scoped>

</style>
