import axios from "axios";
const state = {
  listEmployee: [],
  employeeDelete: null,
};
const getters = {
  listEmployee: (state) => state.listEmployee,
  employeeDelete: (state) => state.employeeDelete,
};
const mutations = {
  GET_LIST_EMPLOYEE(state, data) {
    state.listEmployee = data;
  },
  GET_EMPLOYEE_BY_ID(state, data) {
    this.state.employeeDetail = data;
  },
  GET_NEW_EMPLOYEE_CODE(state, data) {
    this.state.newEmloyeeCode = data;
  },
  GET_DELETE_EMPLOYEE(state, data) {
    state.employeeDelete = data;
  },
};
const actions = {
  async getListEmployee({ commit }) {
    try {
      commit("HANDLE_SHOW_LOADING", null, { root: true });
      const data = await axios.get("https://localhost:44308/api/v1/Employees");
      commit("GET_LIST_EMPLOYEE", data.data);
      commit("HANDLE_SHOW_LOADING");
    } catch (error) {
      commit("HANDLE_SHOW_LOADING", null, { root: true });
      console.log(error);
    }
  },
  // Get employee by Id
  async getEmployeeInfo({ commit }, employeeId) {
    try {
      commit("HANDLE_SHOW_LOADING", null, { root: true });
      const data = await axios.get(
        `https://localhost:44308/api/v1/Employees/${employeeId}`
      );
      commit("HANDLE_SHOW_LOADING", null, { root: true });
      commit("GET_EMPLOYEE_BY_ID", data.data);
      commit("Handle_Show_Modal", null, { root: true });
    } catch (error) {
      console.log(error);
      commit("HANDLE_SHOW_LOADING", null, { root: true });
    }
  },
  // Add employee
  async insertEmployee({ commit, dispatch }, data) {
    try {
      commit("HANDLE_SHOW_LOADING", null, { root: true });
      await axios({
        method: "post",
        url: "https://localhost:44308/api/v1/Employees",
        data,
      });
      commit("HANDLE_SHOW_LOADING", null, { root: true });
      dispatch("getListEmployee");
      console.log("Them thanh cong");
    } catch (error) {
      commit("HANDLE_SHOW_LOADING", null, { root: true });
      console.log(error);
    }
  },
  // Update employee
  async updateEmployee({ commit, dispatch }, data) {
    try {
      commit("HANDLE_SHOW_LOADING", null, { root: true });
      await axios({
        method: "put",
        url: `https://localhost:44308/api/v1/Employees/${data.employeeId}`,
        data,
      });
      commit("HANDLE_SHOW_LOADING", null, { root: true });
      dispatch("getListEmployee");
      console.log("Sua thanh cong");
    } catch (error) {
      commit("HANDLE_SHOW_LOADING", null, { root: true });
      console.log(error);
    }
  },
  // Get new code
  async getNewEmployeeCode({ commit }) {
    try {
      commit("HANDLE_SHOW_LOADING", null, { root: true });
      const data = await axios.get(
        "https://localhost:44308/api/v1/Employees/NewCode"
      );
      commit("HANDLE_SHOW_LOADING", null, { root: true });
      commit("GET_NEW_EMPLOYEE_CODE", data.data);
    } catch (error) {
      commit("HANDLE_SHOW_LOADING", null, { root: true });
      console.log(error);
    }
  },
  // Delete employee
  async deleteEmployee({ commit, dispatch, state }) {
    try {
      commit("HANDLE_SHOW_LOADING", null, { root: true });
      await axios.delete(
        `https://localhost:44308/api/v1/Employees/${state.employeeDelete.employeeId}`
      );
      commit("HANDLE_SHOW_LOADING", null, { root: true });
      commit("Handle_Show_Confirm_Modal", null, { root: true });
      dispatch("getListEmployee");
      console.log("Xoa thanh cong");
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
