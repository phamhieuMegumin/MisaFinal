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
      <div class="table-content"></div>
      <!-- end table-->
    </div>
    <!-- end main content -->
  </div>
</template>

<script>
import Button from "../commons/Button";
export default {
  components: {
    Button,
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
  padding: 0 20px;
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
}
</style>
