import { createStore } from 'vuex'

export default createStore({
  state: {
    online:false,
  },
  getters: {
  },
  mutations: {
    isOnline(store,b){
      this.state.online = b;
    }
  },
  actions: {
  },
  modules: {
  }
})
