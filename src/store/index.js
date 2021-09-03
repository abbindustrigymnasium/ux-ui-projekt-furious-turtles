import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Username : "",
    money: 0,
    loginButtonFeedback: true,
    cartButtonFeedback: false,
    cart: [],
    totalPrice: 0,
    PendingOrders: false,
    CartNumber: 0,
    IsloggedIn: false,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
