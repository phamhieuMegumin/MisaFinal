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
    newEmloyeeCode: null,
    deleteMode: false,
  },
  getters: {
    employeeDetail: (state) => state.employeeDetail,
    newEmloyeeCode: (state) => state.newEmloyeeCode,
    deleteMode: (state) => state.deleteMode,
  },
  mutations: {
    DELETE_MODE(state) {
      state.deleteMode = !state.deleteMode;
    },
  },
};
const store = new Vuex.Store(storeData);
export default store;
