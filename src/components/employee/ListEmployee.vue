<template>
  <table class="table">
    <thead>
      <tr>
        <th class="table-head-checkbox"></th>
        <th class="m-150">Mã nhân viên</th>
        <th class="m-250">Tên nhân viên</th>
        <th class="m-250">Chức danh</th>
        <th class="m-250">Tên đơn vị</th>
        <th class="m-150">Số tài khoản</th>
        <th class="m-250">Tên ngân hàng</th>
        <th class="m-180">Trạng thái</th>
        <th class="m-120">Chức năng</th>
      </tr>
    </thead>
    <tbody>
      <Employee />
    </tbody>
  </table>
</template>

<script>
import Employee from "./Employee.vue";
export default {
  components: {
    Employee,
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
  background: #eceef1;
}
.table thead th {
  text-align: left;
  padding: 5px 10px;
  border-bottom: 1px solid #c7c7c7;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
}
.table-head-checkbox {
  border-right: 1px dotted #c7c7c7;
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
</style>
