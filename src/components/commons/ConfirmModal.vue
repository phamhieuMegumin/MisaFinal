<template>
  <div class="modal-container">
    <div class="layout" :class="isShowConfirmModal ? 'active' : ''"></div>
    <div class="modal-wrapper" :class="isShowConfirmModal ? 'active' : ''">
      <div class="modal-content">
        <div class="logo-message"></div>
        <div class="modal-message">
          <p v-if="type === 'confirm'">
            Bạn có thực sự muốn xóa Nhân viên
            <span> {{ confirmEmployeeCode }}</span>
            không?
          </p>
          <p v-if="type === 'notify'">
            Mã nhân viên {{ employeeCodeNotify }} đã tồn tại trong hệ thống, vui
            lòng kiểm tra lại
          </p>
        </div>
      </div>
      <div class="line"></div>
      <div
        class="modal-bottom"
        :class="type === 'notify' ? 'notify-bottom' : ''"
      >
        <div v-if="type == 'confirm'" @click="Handle_Show_Confirm_Modal">
          <Button :content="'Không'" :btnWhite="true" />
        </div>
        <div v-if="type === 'confirm'" @click="handleDelete">
          <Button :content="'Có'" />
        </div>
        <div class="notify-btn" v-if="type === 'notify'" @click="handleNotify">
          <Button :content="'Đồng ý'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import Button from "./Button.vue";
export default {
  components: { Button },
  mounted() {
    this.$store.watch(
      (state) => state.deleteMode,
      () => {
        this.confirmEmployeeCode = `<${this.employeeDelete.employeeCode}>`;
      }
    );
    this.$store.watch(
      (state) => state.modalType,
      () => {
        this.type = this.modalType;
      }
    );
    this.$store.watch(
      (state) => state.employeeCode,
      () => {
        this.employeeCodeNotify = `<${this.employeeCode}>`;
      }
    );
  },
  data() {
    return {
      confirmEmployeeCode: "",
      type: "confirm",
      employeeCodeNotify: "",
    };
  },
  computed: {
    ...mapGetters([
      "isShowConfirmModal",
      "employeeDelete",
      "modalType",
      "employeeCode",
    ]),
  },
  methods: {
    ...mapMutations(["Handle_Show_Confirm_Modal"]),
    ...mapActions(["deleteEmployee"]),
    handleDelete() {
      this.deleteEmployee();
    },
    handleNotify() {
      this.Handle_Show_Confirm_Modal();
    },
  },
};
</script>

<style scoped>
.layout {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  visibility: hidden;
  opacity: 0;
  z-index: 9999;
  transition: all linear 0.15s;
}
.layout.active {
  visibility: visible;
  opacity: 1;
}
.modal-wrapper {
  position: fixed;
  overflow: auto;
  overflow-y: visible;
  width: 444px;
  min-width: 444px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  background: #fff;
  z-index: 10000;
  visibility: hidden;
  opacity: 0;
  transition: all linear 0.15s;
  padding: 32px;
  border-radius: 3px;
}
.modal-wrapper.active {
  visibility: visible;
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}
.modal-content {
  display: flex;
  align-items: center;
  margin-bottom: 32px;
}
.logo-message {
  width: 48px;
  height: 48px;
  min-width: 48px;
  min-height: 48px;
  background: url("../../assets/img/Sprites.64af8f61.svg") no-repeat -592px -456px;
}
.modal-message {
  overflow: auto;
  max-height: 400px;
  padding-left: 16px;
}
.line {
  height: 1px;
  background: #b8bcc3;
  margin-bottom: 20px;
}
.modal-bottom {
  display: flex;
  justify-content: space-between;
}
.modal-bottom.notify-bottom {
  justify-content: flex-end;
}
</style>
