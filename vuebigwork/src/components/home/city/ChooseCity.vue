<template>
  <!--顶部导航栏-->
  <choose-city-nav-bar :cities="cities"/>

  <!--tab栏-->
  <div class="van-tab">
    <van-tabs v-model:active="active" line-height="4" line-width="40"
      title-active-color="#f4621a" title-inactive-color="#9e9e9e"
      class="van-tabs" v-if="show">
      <van-tab v-for="(item, index) in tabs" :key="index" :title="item" class="vantab">
        <!--自定义标题-->
        <template #title>
          <div class="van-tab-title">{{item}}</div>
        </template>

        <div v-if="item === '国内'">
          <!--灰色分隔区域-->
          <div class="grey"></div>

          <!--上部分：GPS定位-->
          <div class="gps">
            <van-icon name="location" size="18" color="#f4621a" class="locate"/>
            <div class="curCity">{{city}}</div>
            <div class="tip">GPS定位</div>
          </div>

          <van-divider /><!--分隔线-->

          <!--上部分：历史访问城市-->
          <div class="history">
            <div class="historyCity">历史访问城市</div>
            <van-grid :column-num="3" :gutter="8" >
              <van-grid-item v-for="(item, index) in history" :key="index"
                :text="item" class="history-item" @click="chooseCity(item)" />
            </van-grid>
          </div>

          <!--上部分：国内热门城市-->
          <div class="hot">
            <div class="hotCity">热门访问城市</div>
              <van-grid :column-num="3" :gutter="8">
                <van-grid-item v-for="(item, index) in hotCities" :key="index"
                  :text="item" class="hot-item" @click="chooseCity(item)"/>
            </van-grid>
          </div>

          <!--灰色分隔区域-->
          <div class="grey"></div>

          <!--下部分：城市列表-->
          <van-index-bar :index-list="indexList" sticky> <!--遍历索引列表-->
            <van-index-anchor v-for="(item, index) in cities" :key="index"
              :index="item.initial">
              <div v-if="item.initial !== '热门'">
                <span class="index">{{ item.initial }}</span>
                <van-cell v-for="(item2, index2) in item.list" :key="index2"
                  :title="item2.city" class="city-list" @click="chooseCity(item2.city)" />
              </div>
            </van-index-anchor>
          </van-index-bar>
        </div>

        <div v-else>
          <div class="other">
            这是国际/港澳台的城市选择
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
import axios from 'axios'
import ChooseCityNavBar from '@/components/common/navbar/ChooseCityNavBar.vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex' // 使用this.$store
export default {
  components: {
    ChooseCityNavBar
  },
  data () {
    return {

    }
  },
  setup () {
    const state = reactive({
      show: false,
      city: '杭州',
      tabs: ['国内', '国际/港澳台'],
      history: ['杭州', '温州', '永嘉县'],
      indexList: [], // 索引列表
      cities: [], // 所有城市
      hotCities: [] // 热门城市
    })

    // 设置城市
    const route = useRoute() // 使用路由

    // 解决van-tabs下划线显示异常
    onMounted(() => {
      setInterval(() => {
        state.show = true
      }, 300)
    })

    onBeforeMount(() => {
      // 设置城市
      state.city = route.query.city

      // 用axios从mockjs中获取本地json数据
      axios.get('http://localhost:8090/getCities').then(res => {
        // 设置所有城市
        state.cities = res.data.data

        // 向索引列表中添加包含的城市的所有索引
        for (let i = 0; i < state.cities.length; i++) {
          state.indexList.push(state.cities[i].initial)
        }

        // 添加热门城市
        for (let i = 0; i < state.cities.length; i++) {
          if (state.cities[i].initial === '热门') {
            for (let j = 0; j < state.cities[i].list.length; j++) {
              state.hotCities.push(state.cities[i].list[j].city)
            }
          }
        }
        // console.log(res.data.data)
      }).catch(err => console.log(err))
    })

    // 选择城市
    const router = useRouter() // 使用路由
    const store = useStore() // 使用this.$store
    const chooseCity = (item) => {
      state.city = item

      // 把城市set到store中
      store.commit('setCity', state.city) // 使用this.$store的方法

      // 跳转回首页
      router.push({ // 跳转到选择城市界面
        path: '/home',
        query: {
          city: state.city // 把城市传给首页
        }
      })
    }

    // 返回上一页
    const goBack = () => {
      router.go(-1)
    }

    return {
      ...toRefs(state),
      chooseCity,
      goBack
    }
  }
}
</script>

<style lang="scss" scoped>
.van-tab-title{
  height: 17px;
  z-index: 15;
}

.van-tab{
  margin-top: 49px;
}

.vantab{
  margin-bottom: 49px;
}

.grey{
  height: 10px;
  background-color: rgb(240, 238, 238);
}

.gps{
  display: flex;
  flex-direction: row; /*横向排列*/
  justify-content: left;
  align-items: center;

  margin-top: 10px;
}
.locate{
  margin-left: 8px;
  margin-top: 5px;
}
.curCity{
  font-size: 16px;
  font-weight: 800;

  margin-left: 4px;
}
.tip{
  font-size: 14px;
  color: rgb(198, 196, 196);

  margin-top: 5px;
  margin-left: 8px;
}

.historyCity, .hotCity{
  font-size: 14px;
  color: rgb(198, 196, 196);

  display: flex;
  justify-content: left;
  margin-left: 10px;
}
.hotCity{
  margin-top: 10px;
}
.history-item, .hot-item{
  margin-top: 10px;
  width: 100px;
  height: 35px;
}
.hot{
  margin-bottom: 10px;
}

.index, .city-list{
  display: flex;
  justify-content: left;
}

.other{
  width: 375px;
}
</style>
