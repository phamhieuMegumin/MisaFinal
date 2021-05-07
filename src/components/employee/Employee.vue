<template>
  <tr>
    <td class="table-checkbox">
      <CheckboxField />
    </td>
    <td>Helosdf</td>
    <td>Helosdf</td>
    <td>Helosdf</td>
    <td>Helosdf</td>
    <td>Helosdf</td>
    <td>Helosdf</td>
    <td>Helosdf</td>
    <td class="sticky">
      <div class="fix-container">
        <span @click="Handle_Show_Confirm_Modal">Sửa</span>
        <div @click="handleShowSelect" class="choose-btn">
          <div class="dropdown-icon"></div>
          <div v-if="isShownFixSelect" class="list-select">
            <div class="list-select-item">Nhân bản</div>
            <div class="list-select-item">Xóa</div>
            <div class="list-select-item">Ngừng sử dụng</div>
          </div>
        </div>
      </div>
      <div class="line"></div>
    </td>
  </tr>
</template>

<script>
import { mapMutations } from "vuex";
import CheckboxField from "../commons/CheckboxField";
export default {
  data() {
    return {
      isShownFixSelect: false,
    };
  },
  components: {
    CheckboxField,
  },
  methods: {
    handleShowSelect() {
      this.isShownFixSelect = !this.isShownFixSelect;
    },
    ...mapMutations(["Handle_Show_Modal", "Handle_Show_Confirm_Modal"]),
  },
};
</script>

<style scoped>
tr {
  height: 47px;
}
.table-checkbox {
  min-width: 40px;
  width: 40px;
}
tr td {
  padding: 5px 10px;
  border-bottom: 1px solid #c7c7c7;
  border-right: 1px dotted #c7c7c7;
  background: #fff;
}
tr:hover td {
  background: #f3f8f8;
}
.sticky {
  position: sticky;
  border-right: none;
  right: 0;
  text-align: center;
  background: #fff;
}
.line {
  position: absolute;
  left: -1px;
  top: 0;
  width: 1px;
  background-color: #c7c7c7;
  height: 100%;
}
/* choose btn */
.fix-container {
  display: flex;
  justify-content: center;
  cursor: pointer;
}
.fix-container span {
  font-weight: 550;
  color: #0075cb;
  padding: 6px 0 6px 16px;
}
.choose-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  z-index: 1000;
}
.dropdown-icon {
  width: 16px;
  height: 16px;
  background: url("../../assets/img/Sprites.64af8f61.svg") no-repeat -896px -359px;
}
.list-select {
  position: absolute;
  height: auto;
  width: auto;
  z-index: 9990;
  transform: translate(-101%);
  background-color: #fff;
  top: 16px;
  right: 0;
  padding: 2px 0;
  border: 1px solid #babec5;
  border-radius: 2px;
  text-align: left;
}
.list-select-item {
  background: #fff;
  padding: 5px 10px;
  height: 32px;
  cursor: pointer;
}
.list-select-item:hover {
  background: #ebedf0;
  color: #2ca01c;
}
</style>
