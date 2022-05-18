<template>
  <!--用户已登陆-->
  <div class="userCard" v-if="user.phone !== ''">
    <div class="userLeft">
      <van-image width="60" height="60" round :src="user.pic" class="head"/>
    </div>

    <div class="userMiddle">
      <div class="userMiddleTop">
        <div class="username">{{user.name}}</div>
        <van-tag round color="#f0d941" size="small" type="primary" class="level">Lv{{user.level}}</van-tag>
        <van-tag round color="#dbc010" text-color="#a08e1a" size="small" type="primary" class="medal">{{user.medal}}枚</van-tag>
      </div>
      <div class="userMiddleBottom">
        <div class="fan">粉丝{{user.fan}}</div>
        <div class="follow">关注{{user.follow}}</div>
        <div class="likes">获赞{{user.likes}}</div>
      </div>
    </div>

    <div class="userRight">
      <div class="detail">
        <div class="personal">个人主页</div>
        <van-icon name="arrow" size="14" color="#fff" class="userDetail"/>
      </div>
    </div>
  </div>

  <!--用户未登陆-->
  <div class="userCard" v-else>
    <div class="userLeft">
      <van-image width="60" height="60" round :src="user.pic2" class="head"/>
    </div>

    <div class="userMiddle">
      <div class="userMiddleTop">
        <div class="login" @click="login()">点击登录</div>
      </div>
      <div class="userMiddleBottom">
        <div class="text">登录更精彩</div>
      </div>
    </div>
  </div>
</template>

<script>
import { onBeforeMount, reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
export default {
  setup () {
    const state = reactive({
      user: {
        phone: '', // 手机号
        pic: require('../../assets/images/my/userhead.jpg'), // 头像
        pic2: require('../../assets/images/my/userhead2.png'), // 未登录时头像
        name: 'Morri', // 用户名
        fan: 5, // 粉丝数
        follow: 4, // 关注数
        likes: 1, // 获赞数
        level: 3, // 等级
        medal: 15 // 获得的奖章数
      }
    })

    // 登录
    const router = useRouter() // 使用路由
    const login = () => {
      router.push({ // 跳转到登录界面
        path: '/login'
      })
    }

    const route = useRoute() // 使用路由
    onBeforeMount(() => {
      // state.user.phone = '' // test
      state.user.phone = route.query.phone // 登陆后的手机号传给当前页面
    })

    return {
      ...toRefs(state),
      login
    }
  }
}
</script>

<style lang="scss" scoped>
.userCard, .userMiddleTop, .userMiddleBottom, .detail{
  display: flex;
  flex-direction: row; /*横向排列*/
  align-items: center;
}
.userLeft{
  margin-left: 15px;
}
.userMiddle{
  display: flex;
  flex-direction: column; /*竖向排列*/
  align-items: center;
}
.head{

}
.userMiddleTop{
  font-size: 20px;
  font-weight: 550;
  margin-left: 10px;
}
.level, .medal{
  margin-left: 10px;
}
.userMiddleBottom{
  margin-top: 3px;
  font-size: 12px;
}
.username{
  font-weight: 900;
  font-style: italic;
}
.fan{
  color: grey;
}
.follow, .likes{
  margin-left: 15px;
  color: grey;
}

.userRight{
  width: 140px;
}
.detail{
  position: absolute; // 绝对定位
  right: 0;
  top: 68px;

  width: 75px;
  height: 20px;

  justify-content: center;
  border-radius: 10px 0 0 10px; // 圆弧
  background-color: #ff3d00;
}
.personal{
  font-size: 12px;
  color: #fff;
}
</style>
