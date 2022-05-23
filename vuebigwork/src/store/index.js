import { createStore } from 'vuex'

export default createStore({
  state: {
    searchCityHistory: [], // 城市搜索记录
    user: {
      phone: 13300000000 // 手机号
    }, // 用户
    city: '杭州' // 当前城市
  },
  getters: {
  },
  mutations: {
    setCity (state, city) {
      state.city = city
    }
  },
  actions: {
  },
  modules: {
  }
})
