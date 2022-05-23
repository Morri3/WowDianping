<template>
  <van-tabs v-model:active="active" line-height="6" line-width="30"
    color="#ff8a65" animated swipeable @change="change()" class="van-tabs"
    title-active-color="#424242" title-inactive-color="#9e9e9e">
    <van-tab v-for="(item, index) in list" :key="index" class="tab">
      <!--自定义标题-->
      <template #title>
        <div class="van-tab-title">{{item}}</div>
      </template>

      <!--推荐-->
      <div v-if="index === 0">

        <!--杭州-->
        <div v-if="city === '杭州'">
          <!--这个div让两个van-grid水平两列摆放-->
          <div class="shareBox">

            <!--第一个grid-->
            <div class="shareBoxInner">

              <div v-for="(item, index) in shares" :key="index">
                <!--偶数index-->
                <div v-if="index % 2 === 0">
                  <div class="share-item">
                    <van-image width="165" :src="item.pic" class="pic"/>
                    <!--内容-->
                    <div class="content">{{item.content}}</div>
                    <div class="user">
                      <!--用户头像、昵称-->
                      <div class="userbox">
                        <van-image width="20" height="20" :src="item.userhead" round="true" class="userhead"/>
                        <div class="username">{{item.username}}</div>
                      </div>
                      <!--点赞图标、点赞数-->
                      <div class="likebox">
                        <van-icon name="good-job-o" size="18" color="#333" class="likeicon" @click="like(item)"/>
                        <div class="likes" @click="like(item)">{{item.likes}}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!--第二个grid-->
            <div class="shareBoxInner">
              <div v-for="(item, index) in shares" :key="index">
                <!--奇数index-->
                <div v-if="index % 2 === 1">
                  <div class="share-item">
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
                  </div>
                </div>
                <div v-else class="else"></div>
              </div>
            </div>

          </div>
        </div>

        <!--温州-->
        <div v-else-if="city === '温州'">
          <!--这个div让两个van-grid水平两列摆放-->
          <div class="shareBox">

            <!--第一个grid-->
            <div class="shareBoxInner">

              <div v-for="(item, index) in shares2" :key="index">
                <!--偶数index-->
                <div v-if="index % 2 === 0">
                  <div class="share-item">
                    <van-image width="165" :src="item.pic" class="pic"/>
                    <!--内容-->
                    <div class="content">{{item.content}}</div>
                    <div class="user">
                      <!--用户头像、昵称-->
                      <div class="userbox">
                        <van-image width="20" height="20" :src="item.userhead" round="true" class="userhead"/>
                        <div class="username">{{item.username}}</div>
                      </div>
                      <!--点赞图标、点赞数-->
                      <div class="likebox">
                        <van-icon name="good-job-o" size="18" color="#333" class="likeicon" @click="like(item)"/>
                        <div class="likes" @click="like(item)">{{item.likes}}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!--第二个grid-->
            <div class="shareBoxInner">
              <div v-for="(item, index) in shares2" :key="index">
                <!--奇数index-->
                <div v-if="index % 2 === 1">
                  <div class="share-item">
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
                  </div>
                </div>
                <div v-else class="else"></div>
              </div>
            </div>

          </div>
        </div>

        <!--其他页面-->
        <div v-else>
          <div class="blank">
            <img alt="Vue logo" src="@/assets/images/logo.png">
            <div class="title">界面即将到来，尽请期待</div>
          </div>
        </div>

      </div>

      <!--其他页面-->
      <div v-else>
        <div class="blank">
          <img alt="Vue logo" src="@/assets/images/logo.png">
          <div class="title">界面即将到来，尽请期待</div>
        </div>
      </div>
    </van-tab>
  </van-tabs>
</template>

<script>
import { reactive, toRefs, onBeforeMount } from 'vue'
import { useStore } from 'vuex' // 使用this.$store
export default {
  data () {
    return {

    }
  },
  setup () {
    const state = reactive({
      city: '', // 当前城市
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
        },
        {
          pic: require('../../assets/images/home/pic4.jpg'),
          content: '可以咕噜咕噜喝上一大碗',
          userhead: require('../../assets/images/home/userhead4.jpg'),
          username: '十三分甜',
          likes: 378
        }
      ],
      shares2: [
        {
          pic: require('../../assets/images/home/pic5.jpg'),
          content: '如果一个人不知道吃什么，可以试试他家',
          userhead: require('../../assets/images/home/userhead5.jpg'),
          username: '四四四小四',
          likes: 6
        },
        {
          pic: require('../../assets/images/home/pic6.jpg'),
          content: '考试党+自由职业 | 效率提升的好去处',
          userhead: require('../../assets/images/home/userhead6.jpg'),
          username: '酒瘾啊扎',
          likes: 2
        },
        {
          pic: require('../../assets/images/home/pic7.jpg'),
          content: '时代巷子里的店，开了又开，层出不穷',
          userhead: require('../../assets/images/home/userhead7.jpg'),
          username: '皮卡丘丘',
          likes: 7
        }
      ]
    })

    const change = () => {

    }

    const store = useStore() // 使用this.$store
    onBeforeMount(() => {
      state.city = store.state.city
      console.log(store.state.city)
      console.log(state.city)
    })

    return {
      ...toRefs(state),
      change
    }
  }
}
</script>

<style lang="scss" scoped>
.van-tabs{
  margin-top: 10px;
  margin-bottom: 49px; // 让内容不被底部导航栏遮盖
  padding-top: 0px;
  padding-left: 7px;
  padding-right: 7px;
}
.tab{
  background-color:#f5f5f5;
}
.van-tab-title{
  margin-bottom: -20px;
  height: 10px;
  z-index: 15;
}

.shareBox{
  display: flex;
  flex-direction: row;
  justify-content:center;
}
.shareBoxInner{
  margin-top: 5px;
  margin-bottom: 10px;
}
.shareBoxInner:nth-child(2){ // 第二个shareBoxInner的样式
  margin-top: 5px;
  margin-bottom: 10px;
  margin-left: 5px;
}

.share-item{
  border-radius: 0 0 5px 5px;

  width: 175px;
  height: auto;
  margin-bottom: 5px; // 同一列相邻两个的间距
  padding-bottom: 5px;
  background-color: #fff;
  box-shadow:0 0.2px 0.1px 0.1px #ababab;/*阴影*/
}
.pic{
  border-radius: 5px;
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
  justify-content:space-around;

  margin-top: 5px;
  margin-left: 10px;
  width: 160px;
}
.userbox {
  width: 80px;

  display: flex;
  flex-direction: row; /*横向排列*/
  align-items: center; //文字居中
  justify-content:center;
}
.username{
  font-size: 10px;
  margin-left: 3px;

  width: 50px;

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
  position:relative;
  // right: 0px;
  margin-right: 0px;

  display: flex;
  flex-direction: row; /*横向排列*/
  align-items: center; //文字居中
  justify-content:center;
}
.likeicon{
  position: relative; //相对点赞数的相对定位
  margin-right: 0px;
}
.likes{
  font-size: 10px;

  position: relative; //对点赞父组件采用向右的绝对定位
  margin-right: 2px;
}

.blank{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  flex-direction: column;
  height:215px
}
.title{
  margin-top: 20px;
  font-size: 18px;
  font-style: italic;
}
</style>
