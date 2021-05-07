const state = {
  isShowModal: false,
  isShowConfirmModal: false,
};
const getters = {
  isShowModal: (state) => state.isShowModal,
  isShowConfirmModal: (state) => state.isShowConfirmModal,
};
const mutations = {
  Handle_Show_Modal(state) {
    state.isShowModal = !state.isShowModal;
  },
  Handle_Show_Confirm_Modal(state) {
    state.isShowConfirmModal = !state.isShowConfirmModal;
  },
};
const actions = {};
export default {
  state,
  getters,
  mutations,
  actions,
};
