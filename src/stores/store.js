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
    deparmentValueSelect: "", // deparment value modal
    closeModalReset: null,
    modalType: "confirm",
    employeeCode: null,
  },
  getters: {
    employeeDetail: (state) => state.employeeDetail,
    newEmloyeeCode: (state) => state.newEmloyeeCode,
    deleteMode: (state) => state.deleteMode,
    deparmentValueSelect: (state) => state.deparmentValueSelect,
    closeModalReset: (state) => state.closeModalReset,
    modalType: (state) => state.modalType,
    employeeCode: (state) => state.employeeCode,
  },
  mutations: {
    DELETE_MODE(state) {
      state.deleteMode = !state.deleteMode;
    },
  },
};
const store = new Vuex.Store(storeData);
export default store;
