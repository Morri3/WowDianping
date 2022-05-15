<template>
  <!--筛选框-->
  <div class="select">

    <van-dropdown-menu active-color="#f4621a">

      <!--第一种排序-->
      <van-dropdown-item title="附近">
        <div class="nearby-classify">
          <div class="zone">商区</div>
          <div class="subway">地铁</div>
        </div>
      </van-dropdown-item>

      <!--第二种排序-->
      <van-dropdown-item title="美食">

      </van-dropdown-item>

      <!--第三种排序-->
      <van-dropdown-item v-model="value3" :options="select3" @change="onChange" />

      <!--第四种排序-->
      <van-dropdown-item title="筛选">

      </van-dropdown-item>
    </van-dropdown-menu>

    <!--灰色圆边tag筛选-->
    <div class="selectBottom">
      <van-swipe class="swiper" :loop="false" :width="80" :height="20"
        :show-indicators="false">
        <van-swipe-item class="select-item" v-for="(item,index) in selectTags" :key="index">
          <van-tag plain type="primary" round class="selectTag"
            size="medium" text-color="#333">{{item}}</van-tag>
        </van-swipe-item>
      </van-swipe>
    </div>

    <van-divider/><!--分隔线-->
  </div>

  <!--商家列表-->
  <van-list v-model:loading="loading" :finished="finished" finished-text="已经到底啦"
    loading-text="正在加载中..." @load="onLoad">
    <van-cell v-for="(item, index) in list[0]" :key="index" @click="detail(item)">
      <van-card :thumb="item.pic">

        <!--自定义标题-->
        <template #title>
          <div class="title">{{item.title}}</div>
        </template>

        <!--自定义描述-->
        <template #desc>
          <div class="desc">
            <van-rate v-model="item.rate" readonly allow-half size="12" gutter="2"
              color="#f4621a" class="rate"/>
            <div class="rateNum">{{item.rate}}</div>
            <div class="comment">{{item.comment}}条</div>
            <div class="price">￥{{item.price}}/人</div>
          </div>
          <div class="desc2">
            <div class="keyword">{{item.keyword2}}</div>
            <div class="keyword2">{{item.keyword}}</div>
            <div class="distanceBox">
              <div class="distance">{{item.distance}}</div>
            </div>
          </div>
        </template>

        <!--自定义标签-->
        <template #tags>
          <div class="tags">
            <van-tag plain type="primary" class="tag" size="medium" text-color="#fff">{{item.year}}</van-tag>
            <van-tag plain type="primary" class="tag2" text-color="#f4621a">收录{{item.year}}年</van-tag>
          </div>
        </template>
      </van-card>
    </van-cell>
  </van-list>
</template>

<script>
import { reactive, toRefs, ref } from 'vue'
import axios from 'axios'
// import { useRouter } from 'vue-router'
export default {
  data () {
    return {

    }
  },
  setup () {
    const state = reactive({
      list: [], // 商家列表
      down: { pic: require('@/assets/images/home/down.png') }, // 下拉的图标
      selectTags: ['附近1km', '上榜餐厅', '连锁商户', '多年老店', '新店', '营业中',
        '回头客推荐', '火锅', '人气餐厅', '团购特惠', '性价比高', '味道赞', '菜品精致'], // 标签
      // nearby: ['附近', '附近', '附近', '附近', '附近', '附近', '附近', '附近'], // “附近”的下拉菜单
      select3: 0 // 当前第三个筛选选择的item
    })

    // 筛选部分
    // const active = ref(0)
    // //   筛选1
    // const value = ref(0)
    // const select1 = [
    //   { text: '附近', value: 0 }
    // ]
    // //   筛选2
    // const value2 = ref(0)
    // const select2 = [
    //   { text: '美食', value: 0 }
    // ]
    //   筛选3
    const value3 = ref(0)
    const select3 = [
      { text: '智能排序', value: 0 },
      { text: '距离优先', value: 1 },
      { text: '人气优先', value: 2 },
      { text: '好评优先', value: 3 },
      { text: '口味优先', value: 4 },
      { text: '环境优先', value: 5 },
      { text: '服务优先', value: 6 },
      { text: '低价优先', value: 7 },
      { text: '高价优先', value: 8 }
    ]

    const onChange = (value) => {
      state.select3 = value
      console.log(state.select3)
      onLoad()
    }

    // 智能排序
    var sort1by3 = (a, b) => {
      if (a.rate === b.rate) {
        if (a.price === b.price) {
          if (a.distance < b.distance) {
            return -1
          } else {
            return 1
          }
        } else {
          if (a.price < b.price) {
            return -1
          } else {
            return 1
          }
        }
      } else {
        if (a.rate > b.rate) {
          return -1
        } else {
          return 1
        }
      }
    }

    // 距离优先
    var sort2by3 = (a, b) => {
      if (a.distance < b.distance) {
        return -1
      } else if (a.distance === b.distance) {
        return 0
      } else {
        return 1
      }
    }

    // 人气优先
    var sort3by3 = (a, b) => {
      if (a.comment < b.comment) {
        return 1
      } else if (a.comment === b.comment) {
        return 0
      } else {
        return -1
      }
    }

    // 好评优先
    var sort4by3 = (a, b) => {
      if (a.rate < b.rate) {
        return 1
      } else if (a.rate === b.rate) {
        return 0
      } else {
        return -1
      }
    }

    // 口味优先
    var sort5by3 = (a, b) => {
      if (a.taste < b.taste) {
        return 1
      } else if (a.taste === b.taste) {
        return 0
      } else {
        return -1
      }
    }

    // 环境优先
    var sort6by3 = (a, b) => {
      if (a.env < b.env) {
        return 1
      } else if (a.env === b.env) {
        return 0
      } else {
        return -1
      }
    }

    // 服务优先
    var sort7by3 = (a, b) => {
      if (a.serve < b.serve) {
        return 1
      } else if (a.serve === b.serve) {
        return 0
      } else {
        return -1
      }
    }

    // 低价优先
    var sort8by3 = (a, b) => {
      if (a.price < b.price) {
        return -1
      } else if (a.price === b.price) {
        return 0
      } else {
        return 1
      }
    }

    // 高价优先
    var sort9by3 = (a, b) => {
      if (a.price < b.price) {
        return 1
      } else if (a.price === b.price) {
        return 0
      } else {
        return -1
      }
    }

    // 列表刷新等操作
    const loading = ref(false)
    const finished = ref(false)
    const onLoad = () => {
      // 异步更新数据
      // 用axios从mockjs中获取本地json数据
      axios.get('http://localhost:8090/getShops').then(res => {
        // 设置商家列表
        const tmp = res.data.data

        // 进行筛选3的处理
        if (state.select3 === 0) { // 智能排序
          console.log(tmp[0])
          // 根据rate、price、comment排序
          tmp[0].sort(sort1by3)
          console.log(tmp[0])
          state.list = tmp
        } else if (state.select3 === 1) { // 距离优先
          console.log(tmp[0])
          tmp[0].sort(sort2by3)
          console.log(tmp[0])
          state.list = tmp
        } else if (state.select3 === 2) { // 人气优先
          console.log(tmp[0])
          tmp[0].sort(sort3by3)
          console.log(tmp[0])
          state.list = tmp
        } else if (state.select3 === 3) { // 好评优先
          console.log(tmp[0])
          tmp[0].sort(sort4by3)
          console.log(tmp[0])
          state.list = tmp
        } else if (state.select3 === 4) { // 口味优先
          console.log(tmp[0])
          tmp[0].sort(sort5by3)
          console.log(tmp[0])
          state.list = tmp
        } else if (state.select3 === 5) { // 环境优先
          console.log(tmp[0])
          tmp[0].sort(sort6by3)
          console.log(tmp[0])
          state.list = tmp
        } else if (state.select3 === 6) { // 服务优先
          console.log(tmp[0])
          tmp[0].sort(sort7by3)
          console.log(tmp[0])
          state.list = tmp
        } else if (state.select3 === 7) { // 低价优先
          console.log(tmp[0])
          tmp[0].sort(sort8by3)
          console.log(tmp[0])
          state.list = tmp
        } else if (state.select3 === 8) { // 高价优先
          console.log(tmp[0])
          tmp[0].sort(sort9by3)
          console.log(tmp[0])
          state.list = tmp
        }
      }).catch(err => console.log(err))
      // 加载状态结束
      loading.value = false
      finished.value = true
    }

    return {
      ...toRefs(state),
      loading,
      finished,
      onLoad,
      // value,
      // select1,
      // value2,
      // select2,
      value3,
      select3,
      // active
      onChange,
      sort1by3,
      sort2by3,
      sort3by3,
      sort4by3,
      sort5by3,
      sort6by3,
      sort7by3,
      sort8by3,
      sort9by3
    }
  }
}
</script>

<style lang="scss" scoped>
.select{
  margin-top: 5px;
}
.selectTop, .select1, .select2, .select3, .select4{
  display: flex;
  flex-direction: row; //横向排列
  text-align: center; //文本居中对齐
  align-items: center; //居中对齐
  font-size:13px;
  font-weight: 400;
}
.selectTop{
  justify-content: space-between; //平均分布
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 5px;
}
.icon_down{
  margin-left: 2px;
}
.divider{
  width: 1.5px;
  height: 18px;
  background-color: rgb(183, 182, 182);
}

.selectBottom{
  font-size:14px;
  font-weight: 400;
  margin-top: 15px;
  background-color: #fff;
}
.selectTag{
  background-color: rgb(216, 216, 216);
}

.title{
  font-size: 16px;
  font-weight: 600;
}
.desc, .desc2{
  display: flex;
  flex-direction: row; //横向排列
  text-align: center; //文本居中对齐
  align-items: center; //居中对齐
}
.rate{
  margin-top: -1px;
}
.rateNum{
  color: #f4621a;
  font-weight:500;
}
.comment{
  margin-left: 5px;
}
.price{
  margin-left: 8px;
}
.keyword, .keyword2, .distance{
  color: rgb(150, 149, 149);
}
.keyword2{
  margin-left: 8px;
}
.distanceBox{
  position:absolute;
  right: 0px;
}
.tag{
  background-color: #f4621a;
}
.tag2{
  background-color: #fde9df;
}

.nearby-classify{
  display: flex;
  flex-direction: row; //横向排列
  text-align: center; //文本居中对齐
  align-items: center; //居中对齐
}
.zone, .subway{
  font-size: 18px;
  font-weight: 600;
}
</style>
