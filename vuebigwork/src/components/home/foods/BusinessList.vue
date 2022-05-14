<template>
  <!--筛选框-->
  <div class="select">

    <div class="selectTop">
      <!--第一个筛选-->
      <div class="select1">
        <div>附近</div>
        <van-image width="12" height="12" :src="down.pic" class="icon_down"/>
      </div>
      <div class="divider"></div><!--分隔竖线-->
      <!--第二个筛选-->
      <div class="select2">
        <div>美食</div>
        <van-image width="12" height="12" :src="down.pic" class="icon_down"/>
      </div>
      <div class="divider"></div><!--分隔竖线-->
      <!--第三个筛选-->
      <div class="select3">
        <div>智能排序</div>
        <van-image width="12" height="12" :src="down.pic" class="icon_down"/>
      </div>
      <div class="divider"></div><!--分隔竖线-->
      <!--第四个筛选-->
      <div class="select4">
        <div>筛选</div>
        <van-image width="12" height="12" :src="down.pic" class="icon_down"/>
      </div>
    </div>

    <van-divider/><!--分隔线-->

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
        '回头客推荐', '火锅', '人气餐厅', '团购特惠', '性价比高', '味道赞', '菜品精致'] // 标签
    })

    // 列表刷新等操作
    const loading = ref(false)
    const finished = ref(false)
    const onLoad = () => {
      // 异步更新数据
      // 用axios从mockjs中获取本地json数据
      axios.get('http://localhost:8090/getShops').then(res => {
        // 设置商家列表
        state.list = res.data.data
        // console.log(res.data.data)
      }).catch(err => console.log(err))
      // 加载状态结束
      loading.value = false
      finished.value = true
    }

    return {
      ...toRefs(state),
      loading,
      finished,
      onLoad
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
</style>
