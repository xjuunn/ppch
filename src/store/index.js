import { createStore } from 'vuex'

export default createStore({
  state: {
    online:false,
  },
  getters: {
    isonline(state){
      return state.online;
    }
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
