<template>
  <!--顶部导航栏-->
  <div class="navbar">
    <!--左边部分-->
    <div class="navbar-left">
      <van-icon name="arrow-left" size="24" color="#333" @click="goBack()"/>
    </div>

    <!--右边部分-->
    <div class="navbar-right">
      <van-search v-model="value" shape="round" @search="onSearch" @clear="onClear"
        input-align="left" placeholder="输入城市名或拼音查询" class="search"
        maxlength="10">
        <!--自定义搜索框左边的图标-->
        <template #left-icon>
          <van-icon name="search" size="18" color="#333"/>
        </template>
      </van-search>
    </div>
  </div>

  <!--搜索历史-->
  <div class="historyBox" v-show="showHistory">
    <span class="title">搜索历史</span>
    <ul class="historyList">
      <li v-for="(item,index) in history" :key="index" class="historyItem">
        <van-divider/><!--分隔线-->
        <div @click="chooseCity(item)">{{item}}</div>
      </li>
    </ul>
    <van-divider v-show="showClear"/><!--分隔线-->
    <div class="clearHistory" @click="clearHistory()" v-show="showClear">清除搜索记录</div>
  </div>

  <!--搜索后显示的城市列表-->
  <div class="searchBox" v-show="!showHistory">
    <ul class="searchList">
      <li v-for="(item,index) in searchList" :key="index" class="searchItem"
        @click="chooseCity(item)">
        <van-divider/><!--分隔线-->
        <div>{{item}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, ref, computed, onBeforeMount } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex' // 使用this.$store
export default {
  data () {
    return {

    }
  },
  setup () {
    const state = reactive({
      history: [], // 搜索历史
      cities: [], // 所有城市
      searchList: [], // 搜索列表
      showHistory: true // 是否显示搜索列表
    })

    const router = useRouter() // 使用路由
    const route = useRoute() // 使用路由
    const store = useStore() // 使用this.$store

    // 返回上一页
    const goBack = () => {
      router.go(-1)
    }

    // 是否显示清除搜索记录字样的计算属性
    const showClear = computed(() => {
      if (state.history.length > 0) { // 有搜索记录就显示字样
        return true
      } else {
        return false
      }
    })

    onBeforeMount(() => {
      // 从缓存去搜索历史
      state.history =
        localStorage.searchCityHistory ? JSON.parse(localStorage.searchCityHistory) : []
    })

    onMounted(() => {
      state.cities = JSON.parse(route.query.cities)
    })

    // 搜索功能
    const value = ref('') // 搜索框输入的内容,ref对象
    const onSearch = (key) => {
      state.showHistory = false // 搜索的时候就不显示搜索历史
      const res = [] // 存放结果
      const reg = new RegExp(key) // 使用正则表达式匹配
      for (let i = 0; i < state.cities.length; i++) {
        if (state.cities[i].initial !== '热门') { // 跳过热门城市，避免重复
          for (let j = 0; j < state.cities[i].list.length; j++) {
            if (reg.test(state.cities[i].list[j].city)) { // 匹配就加到res中
              res.push(state.cities[i].list[j].city)
            }
          }
        }
      }
      state.searchList = res // 设置检索后的城市列表
    }

    // 清除搜索框的内容
    const onClear = () => {
      state.showHistory = true // 显示搜索历史
    }

    // 清除搜索记录
    const clearHistory = () => {
      localStorage.searchCityHistory = [] // 清除缓存中的
      state.history = [] // 清除当前文件中的
    }

    // 搜索历史记录去重
    const unique = (arr) => {
      return arr.filter((item, index, arr) => {
        return arr.indexOf(item, 0) === index
      })
    }

    // 选择城市
    const chooseCity = (item) => {
      let tmp = localStorage.searchCityHistory ? JSON.parse(localStorage.searchCityHistory) : [] // 获取localStorage
      tmp.push(item) // 把城市添加到临时数组
      tmp = unique(tmp) // 临时数组去重
      state.history = tmp // 设置history
      localStorage.setItem('searchCityHistory', JSON.stringify(state.history)) // 设置localStorage

      // 把城市set到store中
      store.commit('setCity', item) // 使用this.$store的方法

      // 跳转回首页
      router.push({ // 跳转到选择城市界面
        path: '/home',
        query: {
          city: item // 把城市传给首页
        }
      })
    }

    return {
      ...toRefs(state),
      goBack,
      onSearch,
      onClear,
      route,
      chooseCity,
      value,
      clearHistory,
      showClear,
      unique
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar{
  position: fixed; // 固定定位
  left: 0;
  top: 0;
  right: 0;
  z-index: 9999;

  width: 100%;
  height: 49px;
  padding: 0;

  display: flex;
  flex-direction: row; /*横向排列*/
  align-items: center;
}
.navbar-left{
  padding-left: 5px;

  display: flex;
  align-items: center; // 测轴居中

  background-color: #fff;
}
.search{
  width: 320px; // 改变搜索框长度
  z-index: 9999;
  margin: 5px;
  margin-left: 10px;
  height: 25px;
  padding: 0px;
  border-radius: 40px;
  box-shadow:0 2px 5px 1px #cccccc;/*阴影*/
}

.historyBox{
  margin-top: 59px;
  margin-left: 15px;

  font-size: 14px;
  text-align: left; //靠左对齐
}
.title{
  color: rgb(187, 187, 187);
}
.historyList{
  margin-top: 3px;
}
.historyItem{
  line-height: 1.5px;
}
.clearHistory{
  line-height: 1.5px;
  text-align: center; //居中对齐
}

.searchBox{
  margin-top: 59px;
  margin-left: 15px;

  font-size: 14px;
  text-align: left; //靠左对齐
}
.searchList{
  margin-top: 3px;
}
.searchItem{
  line-height: 1.5px;
}
</style>
