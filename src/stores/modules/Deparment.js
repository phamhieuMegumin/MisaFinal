import axios from "axios";

const state = {
  listDeparment: [],
};
const getters = {
  listDeparment: (state) => state.listDeparment,
};
const mutations = {
  GET_LIST_DEPARMENT(state, data) {
    state.listDeparment = data;
  },
  DEPARTMENT_SELECT_VALUE(state, data) {
    this.state.deparmentValueSelect = data;
  },
};
const actions = {
  async getListDeparment({ commit }) {
    try {
      const data = await axios.get("https://localhost:44308/api/v1/Deparments");
      commit("GET_LIST_DEPARMENT", data.data);
    } catch (error) {
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
