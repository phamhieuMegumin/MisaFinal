import Vue from "vue";
import Vuex from "vuex";
import modalModule from "./modules/Modal";
import employeeModule from "./modules/Employee";
import departmentModule from "./modules/Deparment";
import loadingModule from "./modules/Loading";
import paginationModule from "./modules/Pagination";
Vue.use(Vuex);

const storeData = {
  modules: {
    modalModule,
    employeeModule,
    departmentModule,
    loadingModule,
    paginationModule,
  },
  state: {
    employeeDetail: null,
  },
  getters: {
    employeeDetail: (state) => state.employeeDetail,
  },
};
const store = new Vuex.Store(storeData);
export default store;
