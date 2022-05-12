<template>
  <div class="publish">
    <img alt="Vue logo" src="@/assets/images/logo.png">125
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

</style>
