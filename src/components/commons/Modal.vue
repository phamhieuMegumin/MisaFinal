<template>
  <div class="modal-container">
    <div class="layout"></div>
    <div class="modal-wrapper">
      <!-- modal header -->
      <div class="modal-header-container">
        <div class="modal-header">
          <h3 class="modal-title">Thông tin nhân viên</h3>
          <div class="modal-combobox">
            <div class="combobox-customer">
              <CheckboxField :content="'Là khách hàng'" />
            </div>
            <div class="combobox-provider">
              <CheckboxField :content="'Là nhà cung cấp'" />
            </div>
          </div>
        </div>
        <div class="modal-close">
          <div class="modal-icon help-icon"></div>
          <div class="modal-icon close-icon"></div>
        </div>
      </div>
      <!-- end modal header -->
      <!-- modal content -->
      <div class="modal-content-wrapper">
        <div class="modal-content">
          <!-- modal content left -->
          <div class="modal-content-left">
            <div class="p-12 group-input">
              <div class="input-code pr-6">
                <InputField :label="'Mã'" />
              </div>
              <div class="input-name">
                <InputField :label="'Tên'" />
              </div>
            </div>
            <div class="p-12">
              <DropdownField :label="'Đơn vị'" />
            </div>
            <div class="p-12">
              <InputField :label="'Chức danh'" />
            </div>
          </div>
          <!-- end modal content left -->
          <!-- modal content right -->
          <div class="modal-content-right">
            <div class="p-12 group-input">
              <div class="input-date pr-6">
                <InputField :label="'Ngày sinh'" type="date" />
              </div>
              <!-- gender -->
              <div class="combobox-wrapper">
                <label>Giới tính</label>
                <div class="combobox-gender">
                  <div
                    @click="(male = true), (female = false)"
                    class="comboxbox-item"
                  >
                    <div
                      class="combobox-icon"
                      :class="male ? 'active' : ''"
                    ></div>
                    <div class="combobox-content">
                      Nam
                    </div>
                  </div>
                  <div
                    @click="(male = false), (female = true)"
                    class="comboxbox-item"
                  >
                    <div
                      class="combobox-icon"
                      :class="female ? 'active' : ''"
                    ></div>
                    <div class="combobox-content">
                      Nữ
                    </div>
                  </div>
                </div>
              </div>
              <!-- end gender -->
            </div>
            <div class="p-12 group-input">
              <div class="input-editer pr-6">
                <InputField :label="'Số CMND'" />
              </div>
              <div class="input-date-rage">
                <InputField :label="'Ngày cấp'" type="date" />
              </div>
            </div>
            <div class=" pr-6">
              <InputField :label="'Nơi cấp'" />
            </div>
          </div>
          <!-- end modal content right -->
        </div>
      </div>
      <!-- end modal content -->
    </div>
  </div>
</template>

<script>
import CheckboxField from "./CheckboxField.vue";
import DropdownField from "./DropdownField.vue";
import InputField from "./InputField.vue";
export default {
  data() {
    return {
      male: true,
      female: false,
    };
  },
  components: { CheckboxField, InputField, DropdownField },
};
</script>

<style scoped>
.layout {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9999;
}
.modal-wrapper {
  position: fixed;
  overflow: auto;
  overflow-y: visible;
  height: calc(100% - 73px);
  width: 900px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  z-index: 10000;
}

/* header modal */
.modal-header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modal-header {
  padding: 20px 12px 20px 32px;
  display: flex;
  align-items: center;
}
.modal-title {
  font-size: 24px;
  color: #111;
  font-weight: 700;
}
.modal-combobox {
  display: flex;
}

.modal-close {
  padding: 12px;
  display: flex;
  align-items: center;
}
.combobox-customer,
.combobox-provider {
  padding: 0 19.5px;
}
.modal-icon {
  width: 24px;
  height: 24px;
  cursor: pointer;
  background: url("../../assets/img/Sprites.64af8f61.svg") no-repeat;
}
.help-icon {
  background-position: -89px -144px;
  margin-right: 10px;
}
.close-icon {
  background-position: -144px -144px;
}
/* modal content */
.modal-content-wrapper {
  padding: 0 32px 20px 32px;
}
.modal-content {
  display: flex;
}
/* input */
.group-input {
  display: flex;
  align-items: center;
}
.input-code,
.input-date-rage {
  width: 40%;
}
.input-name,
.input-editer {
  width: 60%;
}
.pr-6 {
  padding-right: 6px;
}

.p-12 {
  padding-bottom: 12px;
}
.modal-content-left {
  padding-right: 26px;
  width: calc(50% + 26px);
}
/* combobox */
.combobox-gender {
  display: flex;
  height: 32px;
  align-items: center;
  padding: 5px 0 6px 10px;
}
.combobox-icon {
  position: relative;
  width: 18px;
  height: 18px;
  border: 1px solid #b0b0b0;
  border-radius: 50%;
  cursor: pointer;
}
.combobox-icon.active {
  border-color: #2ca01c;
}
.combobox-icon.active::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #2ca01c;
}
.comboxbox-item {
  display: flex;
}
.comboxbox-item:first-child {
  margin-right: 20px;
}
.combobox-content {
  margin-left: 10px;
}
.combobox-wrapper label {
  display: block;
  font-size: 12px;
  font-weight: 700;
  padding-left: 10px;
  margin-bottom: 4px;
}
</style>
