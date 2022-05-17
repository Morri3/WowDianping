<template>
  <!--顶部导航栏-->
  <LoginNavBar/>

  <!--正文-->
  <LoginPage class="loginpage"/>
</template>

<script>
import { reactive, toRefs } from 'vue'
import LoginNavBar from '@/components/common/navbar/LoginNavBar.vue'
import LoginPage from '@/components/my/login/LoginPage.vue'
export default {
  components: {
    LoginNavBar,
    LoginPage
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
.loginpage{
  margin-top: 49px;
}
</style>
