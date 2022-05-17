<template>
  <van-nav-bar @click-right="onClickRight">
    <template #right>
      <div class="navBarTop">
        <van-icon name="setting-o" size="22" color="black" class="setting"/>
        <van-icon name="comment-o" size="22" color="black" badge="2"/>
      </div>
    </template>
  </van-nav-bar>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
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
.navBarTop{
  display: flex;
  flex-direction: row; //横向排列
  text-align: center; //文本居中对齐
  align-items: center; //居中对齐

  height: 49px;
}
.setting{
  margin-right: 13px;
}
</style>
