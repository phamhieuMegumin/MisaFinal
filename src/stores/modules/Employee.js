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
};
export default {
  state,
  getters,
  mutations,
  actions,
};
