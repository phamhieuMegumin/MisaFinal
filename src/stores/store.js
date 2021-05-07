import Vue from "vue";
import Vuex from "vuex";
import modalModule from "./modules/Modal";
Vue.use(Vuex);

const storeData = {
  modules: {
    modalModule,
  },
};
const store = new Vuex.Store(storeData);
export default store;
