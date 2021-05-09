import axios from "axios";
const state = {
  listEmployee: [],
};
const getters = {
  listEmployee: (state) => state.listEmployee,
};
const mutations = {
  GET_LIST_EMPLOYEE(state, data) {
    state.listEmployee = data;
  },
  GET_EMPLOYEE_BY_ID(state, data) {
    this.state.employeeDetail = data;
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
        url: `https://localhost:44308/api/v1/Employees/${data.EmployeeId}`,
        data,
      });
      commit("HANDLE_SHOW_LOADING", null, { root: true });
      dispatch("getListEmployee");
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
