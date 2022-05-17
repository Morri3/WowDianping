<template>
  <div class="publish">
    <img alt="Vue logo" src="@/assets/images/logo.png">
    <div class="title">写点评界面即将到来，尽请期待</div>
  </div>
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

<style scoped>
.publish{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 250px;
  flex-direction: column;
}
.title{
  margin-top: 20px;
  font-size: 18px;
  font-style: italic;
}
</style>
