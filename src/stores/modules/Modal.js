const state = {
  isShowModal: false,
  isShowConfirmModal: false,
  insertOrUpdate: true, // insert = true
};
const getters = {
  isShowModal: (state) => state.isShowModal,
  isShowConfirmModal: (state) => state.isShowConfirmModal,
  insertOrUpdate: (state) => state.insertOrUpdate,
};
const mutations = {
  Handle_Show_Modal(state) {
    state.isShowModal = !state.isShowModal;
    if (state.isShowModal == false) {
      this.state.employeeDetail = null;
      this.state.newEmloyeeCode = null;
      this.state.closeModalReset = true;
    } else {
      this.state.closeModalReset = false;
    }
  },

  Handle_Show_Confirm_Modal(state) {
    state.isShowConfirmModal = !state.isShowConfirmModal;
  },
  // Modal mode
  MODE_INSERT(state) {
    state.insertOrUpdate = true;
  },
  MODE_UPDATE(state) {
    state.insertOrUpdate = false;
  },
  MODAL_TYPE_CONFIRM() {
    this.state.modalType = "confirm";
  },
  MODAL_TYPE_NOTIFY() {
    this.state.modalType = "notify";
  },
};
const actions = {};
export default {
  state,
  getters,
  mutations,
  actions,
};
