<template>
  <div class="dropdown-field">
    <input
      type="text"
      class="value"
      readonly="true"
      value="20 bản ghi trên 1 trang"
      autofocus="autofocus"
    />
    <div class="dropdown-icon-wrapper">
      <div class="dropdown-icon"></div>
    </div>
    <div class="list-select">
      <div class="list-item">10 bản ghi trên một trang</div>
      <div class="list-item active">20 bản ghi trên một trang</div>
      <div class="list-item">30 bản ghi trên một trang</div>
      <div class="list-item">50 bản ghi trên một trang</div>
      <div class="list-item">100 bản ghi trên một trang</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.dropdown-field {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
}
.value {
  padding: 6px 11px;
  border-radius: 2px;
  border: 1px solid #babec5;
  border-right: none;
  cursor: pointer;
  outline: none;
  width: calc(100% - 32px);
}
.value :focus {
  border-color: #2ca01c;
}
.dropdown-icon-wrapper {
  width: 32px;
  height: 32px;
  margin: -1px;
  border: 1px solid #babec5;
  border-left: 0;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.dropdown-icon {
  width: 24px;
  height: 24px;
  background: url("../../assets/img/Sprites.64af8f61.svg") no-repeat -556px -355px;
}
.dropdown-icon-wrapper:hover {
  background: #e0e0e0;
}
.list-select {
  position: absolute;
  width: 100%;
  bottom: 34px;
  padding: 2px 0;
  border: 1px solid #babec5;
  border-radius: 2px;
}
.list-item {
  background: #fff;
  padding: 0 14px 0 10px;
  height: 32px;
  line-height: 32px;
  cursor: pointer;
}
.list-item:hover {
  background: #ebedf0;
  color: #2ca01c;
}
.list-item.active {
  background: #2ca01c;
  color: #fff;
}
</style>
