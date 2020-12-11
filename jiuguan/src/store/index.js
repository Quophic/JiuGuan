import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    //存储token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
  },
  actions:{

  },
  mutations:{
    //修改tokne，并将token存入localStorage
    changeLogin (state, user) {
        state.Authorization = user.Authorization;
        localStorage.setItem('Authorization', user.Authorization);
    }
  },
  modules:{

  }

})