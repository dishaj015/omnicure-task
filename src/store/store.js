import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);


export default new Vuex.Store({
  namespaced: true,
  //state
  state: {
count: 0,
attemptedQues:0,
data:[]
  },
  //mutations
  mutations: {

    INCREAMENT_ATTEMPTEDQUES(state) {
        state.attemptedQues++;
      },
      GET_DATA(state,data){
          state.data=data;
      }
  },
  //actions
  actions: {

    //getAttemptedQues
    getAttemptedQues({
        commit
      }) {
          commit('INCREAMENT_ATTEMPTEDQUES')
      },
//getData
      getData({commit},data){
          commit('GET_DATA',data)
      }
  }
});