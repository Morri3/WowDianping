<template>
  <div class="LoginPage">

    <div class="title">
      手机号登录/注册
    </div>

    <!--手机号输入框-->
    <div class="input">
      <van-cell-group inset>
        <van-field v-model="phone" clearable placeholder="请输入手机号">
          <template #label>
            <div class="inputLeft">
              <div>中国+86</div>
              <van-icon name="arrow-down" size="12" class="pull"/>
            </div>
          </template>
        </van-field>
      </van-cell-group>
    </div>

    <van-divider /><!--分隔线-->

    <!--登陆遇到问题-->
    <a href="#/my" class="problem">
      登录遇到问题
    </a>

    <!--登录 按钮-->
    <van-button round type="primary" color="red" size="normal"
      class="button" @click="next()">下一步</van-button>

    <!--提示-->
    <div class="tip">未注册的手机号码验证后自动注册</div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
export default {
  setup () {
    const state = reactive({
      phone: '' // 手机号
    })

    const router = useRouter() // 使用路由
    const next = () => {
      router.push({ // 跳转到我的界面
        path: '/my',
        query: {
          phone: state.phone
        }
      })
    }

    return {
      ...toRefs(state),
      next,
      router
    }
  }
}
</script>

<style lang="scss" scoped>
.LoginPage{
  display: flex;
  flex-direction: column; /*竖向排列*/
}

.title{
  font-size: 20px;
  font-weight: 600;

  margin-top: 29px;
  position: absolute; // 绝对定位
  left: 20px;
}
.inputLeft{
  display: flex;
  flex-direction: row; /*横向排列*/
  align-items: center;
}
.input{
  margin-top: 100px;
}

.problem{
  position: absolute; // 绝对定位
  left: 30px;
  margin-top: 170px;

  font-size: 12px;
  text-decoration: none; /*去掉链接文字的下划线*/
}

.button{
  width: 300px;
  margin:0 auto;//水平居中

  margin-top: 60px;
}

.tip{
  font-size: 14px;
  color: #bdbdbd;
  margin-top: 15px;
}
</style>
