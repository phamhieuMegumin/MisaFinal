import axios from "axios";

const state = {
  listDeparment: [],
  deparmentValueSelect: "", // deparment value modal
};
const getters = {
  listDeparment: (state) => state.listDeparment,
  deparmentValueSelect: (state) => state.deparmentValueSelect,
};
const mutations = {
  GET_LIST_DEPARMENT(state, data) {
    state.listDeparment = data;
  },
  DEPARTMENT_SELECT_VALUE(state, data) {
    state.deparmentValueSelect = data;
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
