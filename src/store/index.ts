import { state } from './state';
import { createStore } from 'vuex';

export default createStore({
  state,
  mutations: {
    setRouterList(state,list) {
      state.routerList = list
    },
  },
  actions: {},
  modules: {},
});
