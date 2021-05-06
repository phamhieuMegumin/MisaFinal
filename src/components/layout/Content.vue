<template>
  <div class="content-container">
    <div class="content-title">
      <h3 class="title">Nhân viên</h3>
      <Button content="Thêm mới nhân viên" />
    </div>
    <!-- main content -->
    <div class="main-content">
      <div class="search-content"></div>
      <!-- Table -->
      <div class="table-content">
        <ListEmployee />
      </div>
      <!-- end table-->
    </div>
    <!-- end main content -->
  </div>
</template>

<script>
import Button from "../commons/Button";
import ListEmployee from "../employee/ListEmployee";
export default {
  components: {
    Button,
    ListEmployee,
  },
};
</script>

<style scoped>
.content-container {
  position: absolute;
  top: 48px;
  left: 178px;
  right: 0;
  bottom: 0;
  background: #f4f5f6;
}
.content-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 94px;
}
.title {
  display: block;
  font-size: 24px;
  font-weight: 700;
  color: #111;
  padding: 0 20px;
}
.main-content {
  background: #fff;
  padding: 0 20px;
}
.table-content {
  overflow-x: auto;
}
::-webkit-scrollbar {
  height: 10px;
  background: #fff;
}
::-webkit-scrollbar-thumb {
  background: #d4d7dc;
}
::-webkit-scrollbar-thumb:hover {
  background: #616164;
}
</style>
