import axios from "axios";
import { Math } from "core-js";
const state = {
  pageNumber: 1,
  itemPerPage: 20,
  listEmployeeByPagination: null,
  totalPagination: 0,
  currentPage: 1,
};
const getters = {
  itemPerPage: (state) => state.itemPerPage,
  listEmployeeByPagination: (state) => state.listEmployeeByPagination,
  totalPagination: (state) => state.totalPagination,
  currentPage: (state) => state.currentPage,
};
const mutations = {
  CHANGE_ITEM_PER_PAGE(state, data) {
    state.itemPerPage = data;
  },
  GET_EMOLOYEE_BY_PAGINATION(state, data) {
    state.listEmployeeByPagination = data;
  },
  GET_TOTAL_PAGINATION(state, data) {
    state.totalPagination = Math.ceil(data / state.itemPerPage);
  },
  CHANGE_CURRENT_PAGE(state, data) {
    state.currentPage = data;
  },
};
const actions = {
  async getEmployeeByPagination({ commit }, param) {
    try {
      commit("HANDLE_SHOW_LOADING", null, { root: true });
      const data = await axios.get(
        `https://localhost:44308/api/v1/Employees/Pagination?${param}`
      );
      commit("GET_EMOLOYEE_BY_PAGINATION", data.data);
      commit("HANDLE_SHOW_LOADING", null, { root: true });
    } catch (error) {
      commit("HANDLE_SHOW_LOADING", null, { root: true });
      console.log(error);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
