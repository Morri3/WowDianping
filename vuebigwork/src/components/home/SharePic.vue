<template>
  <van-tabs v-model:active="active" class="van-tabs">
    <van-tab v-for="(item, index) in list" :key="index" :title="item">
      <!--推荐-->
      <div v-if="index === 0">
        <!--宫格，设置两列-->
        <van-grid :column-num="2" :gutter="8">
          <!--宫格的元素-->
          <van-grid-item v-for="(item, index) in shares" :key="index"
            class="share-item" @click="detail(item)" >
            <van-image width="165" :src="item.pic" class="pic"/>
            <!--内容-->
            <div class="content">{{item.content}}</div>
            <div class="user">
              <!--用户头像、昵称-->
              <div class="userbox">
                <van-image width="23" height="23" :src="item.userhead" round="true" class="userhead"/>
                <div class="username">{{item.username}}</div>
              </div>
              <!--点赞图标、点赞数-->
              <div class="likebox">
                <van-icon name="good-job-o" size="18" color="#333" class="likeicon" @click="like(item)"/>
                <div class="likes" @click="like(item)">{{item.likes}}</div>
              </div>
            </div>
          </van-grid-item>
        </van-grid>
      </div>
    </van-tab>
  </van-tabs>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  data () {
    return {

    }
  },
  setup () {
    const state = reactive({
      list: ['推荐', '附近', '美食', '溜娃', '宠物', '运动健身', '教培',
        '结婚', '旅行', '玩乐', '逛街', '家居生活', '直播', '打卡地'],
      shares: [
        {
          pic: require('../../assets/images/home/pic.jpg'),
          content: '喜茶太好喝啦',
          userhead: require('../../assets/images/home/userhead.jpg'),
          username: 'Morri',
          likes: 100
        },
        {
          pic: require('../../assets/images/home/pic2.jpg'),
          content: '是看了章鱼飞的推荐找来的',
          userhead: require('../../assets/images/home/userhead2.jpg'),
          username: 'Lucifer的小喵',
          likes: 192
        },
        {
          pic: require('../../assets/images/home/pic3.jpg'),
          content: '果然下午就不会排队！但是真的很多外国人，奶油卷很好吃！',
          userhead: require('../../assets/images/home/userhead3.jpg'),
          username: '一只埋酱',
          likes: 123
        }
      ]
    })

    const detail = (item) => {

    }

    return {
      ...toRefs(state),
      detail
    }
  }
}
</script>

<style lang="scss" scoped>
.van-tabs{
  margin-top: 15px;
  margin-bottom: 49px; // 让内容不被底部导航栏遮盖
}

.share-item{
  border-radius: 10px;
  vertical-align: top; //顶部对齐

  width: 180px;
  height: auto;
  margin-top: 13px;
}
.content{
  width: 160px;

  font-size: 14px;
  font-weight: 700;

  margin-top: 10px;
  margin-left: 7px;
  text-align: left; //文本靠左对齐

  //处理换行
  overflow: hidden;//解决溢出问题
  text-overflow: ellipsis;//当对象内文本一处时显示省略标记...
  word-break: break-all;//文本自动换行样式
  word-wrap: break-word;//在长单词或url地址内部进行换行
  white-space: pre-wrap;

  //最多显示两行
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.user{
  display: flex;
  flex-direction: row; /*横向排列*/
  align-items: center; //文字居中

  margin-top: 5px;
  margin-left: 10px;
  width: 160px;
}
.userbox {
  width: 80px;

  display: flex;
  flex-direction: row; /*横向排列*/
  align-items: center; //文字居中
}
.username{
  font-size: 10px;
  margin-left: 3px;

  width: 40px;

  //处理换行
  overflow: hidden;//解决溢出问题
  text-overflow: ellipsis;//当对象内文本一处时显示省略标记...
  word-break: break-all;//文本自动换行样式
  word-wrap: break-word;//在长单词或url地址内部进行换行
  white-space: pre-wrap;

  //最多显示一行
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.likebox{
  width: 50px;
  position:absolute;
  right: 10px;

  display: flex;
  flex-direction: row; /*横向排列*/
  align-items: center; //文字居中
}
.likeicon{
  position: relative; //相对点赞数的相对定位
  margin-right: 10px;
}
.likes{
  font-size: 10px;

  position: absolute; //对点赞父组件采用向右的绝对定位
  right: 2px;
}
</style>
