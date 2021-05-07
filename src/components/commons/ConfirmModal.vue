<template>
  <div class="modal-container">
    <div class="layout" :class="isShowConfirmModal ? 'active' : ''"></div>
    <div class="modal-wrapper" :class="isShowConfirmModal ? 'active' : ''">
      <div class="modal-content">
        <div class="logo-message"></div>
        <div class="modal-message">
          <p>
            Bạn có thực sự muốn xóa Nhân viên <span> {{ test }}</span> không?
          </p>
        </div>
      </div>
      <div class="line"></div>
      <div class="modal-bottom">
        <div @click="Handle_Show_Confirm_Modal">
          <Button :content="'Không'" :btnWhite="true" />
        </div>
        <Button :content="'Có'" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Button from "./Button.vue";
export default {
  components: { Button },
  data() {
    return {
      test: "<NV00001>",
    };
  },
  computed: {
    ...mapGetters(["isShowConfirmModal"]),
  },
  methods: {
    ...mapMutations(["Handle_Show_Confirm_Modal"]),
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
</style>
