const state = {
  itemPerPage: 20,
};
const getters = {
  itemPerPage: (state) => state.itemPerPage,
};
const mutations = {
  CHANGE_ITEM_PER_PAGE(state, data) {
    state.itemPerPage = data;
  },
};
const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
};
