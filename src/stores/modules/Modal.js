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
    if (state.isShowModal == false) {
      this.state.employeeDetail = null;
      this.state.newEmloyeeCode = null;
    }
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
