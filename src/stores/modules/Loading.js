const state = {
  isShowLoading: false,
};
const getters = {
  isShowLoading: (state) => state.isShowLoading,
};
const mutations = {
  HANDLE_SHOW_LOADING(state) {
    state.isShowLoading = !state.isShowLoading;
  },
};
const actions = {};
export default {
  state,
  getters,
  mutations,
  actions,
};
