<template>
  <div>
    <ConfirmModal />
    <Modal />
    <table class="table">
      <thead>
        <tr>
          <th class="table-head-checkbox"><CheckboxField /></th>
          <th class="m-150">
            Mã nhân viên
            <div class="line"></div>
          </th>
          <th class="m-250">
            Tên nhân viên
            <div class="line"></div>
          </th>
          <th class="m-250">
            Chức danh
            <div class="line"></div>
          </th>
          <th class="m-250">
            Tên đơn vị
            <div class="line"></div>
          </th>
          <th class="m-150">
            Số tài khoản
            <div class="line"></div>
          </th>
          <th class="m-250">
            Tên ngân hàng
            <div class="line"></div>
          </th>
          <th class="m-180">
            Trạng thái
            <div class="line"></div>
          </th>
          <th class="m-120 th-sticky">
            Chức năng
            <div class="line"></div>
          </th>
        </tr>
      </thead>
      <tbody>
        <Employee />
        <Employee />
        <Employee />
        <Employee />
        <Employee />
        <Employee />
        <Employee />
        <Employee />
        <Employee />
        <Employee />
        <Employee />
        <Employee />
        <Employee />
        <Employee />
        <Employee />
        <Employee />
      </tbody>
    </table>
  </div>
</template>

<script>
import Employee from "./Employee.vue";
import CheckboxField from "../commons/CheckboxField";
import Modal from "../commons/Modal.vue";
import ConfirmModal from "../commons/ConfirmModal";
export default {
  components: {
    Employee,
    CheckboxField,
    Modal,
    ConfirmModal,
  },
};
</script>

<style scoped>
.table {
  border-collapse: collapse;
  width: 100%;
}
.table thead tr {
  height: 34px;
}
.table thead th {
  text-align: left;
  padding: 5px 10px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  position: sticky;
  background: #eceef1;
  top: 0;

  border-bottom: 1px solid #c7c7c7;
  box-shadow: 0 1px 1px -1px #bbb;
  z-index: 999;
}

.m-250 {
  min-width: 250px;
}
.m-150 {
  min-width: 150px;
}
.m-180 {
  min-width: 180px;
}
.m-120 {
  min-width: 120px;
}
.th-sticky {
  right: 0;
  text-align: center !important;
}
.line {
  position: absolute;
  left: 0;
  top: 0;
  width: 1px;
  background-color: #c7c7c7;
  height: 100%;
}
</style>
