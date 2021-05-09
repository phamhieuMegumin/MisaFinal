<template>
  <div class="container">
    <label v-if="label">{{ label }}</label>
    <div class="dropdown-field">
      <input
        type="text"
        class="value"
        readonly="true"
        :value="currentValue"
        autofocus="autofocus"
      />
      <div @click="handleShowSelect" class="dropdown-icon-wrapper">
        <div class="dropdown-icon"></div>
      </div>
      <div
        class="list-select"
        :class="[
          isShowSelect ? 'active' : '',
          down ? 'list-select-down' : 'list-select-up',
        ]"
      >
        <div
          v-for="option in listOption"
          :key="option.optionId"
          class="list-item"
          @click="getSelectValue(option.optionContent, option.value)"
        >
          {{ option.optionContent }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["label", "down", "listOption", "nameField", "value"],
  data() {
    return {
      isShowSelect: false,
      currentValue: "",
    };
  },
  watch: {
    value() {
      for (let i = 0; i < this.listOption.length; i++) {
        if (this.listOption[i].value === this.value) {
          this.currentValue = this.listOption[i].optionContent;
          break;
        }
      }
    },
  },
  methods: {
    ...mapMutations(["CHANGE_ITEM_PER_PAGE"]),
    handleShowSelect() {
      this.isShowSelect = !this.isShowSelect;
    },
    getSelectValue(content, value) {
      this.currentValue = content;
      if (this.nameField === "ItemPerPage") {
        this.$store.commit("CHANGE_ITEM_PER_PAGE", value);
      }
      if (this.nameField === "DeparmentField") {
        this.$store.commit("DEPARTMENT_SELECT_VALUE", value);
      }
      this.handleShowSelect();
    },
  },
};
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
.list-select-up {
  position: absolute;
  width: 100%;
  bottom: 34px;
  padding: 2px 0;
  border: 1px solid #babec5;
  border-radius: 2px;
  visibility: hidden;
  opacity: 0;
  transform: translateY(-5px);
  transition: all linear 0.2s;
  z-index: 9999;
}
.list-select-down {
  position: absolute;
  width: 100%;
  top: 34px;
  padding: 2px 0;
  border: 1px solid #babec5;
  border-radius: 2px;
  visibility: hidden;
  opacity: 0;
  transform: translateY(5px);
  transition: all linear 0.2s;
  z-index: 9999;
}
.list-select.active {
  visibility: visible;
  opacity: 1;
  transform: translateY(0);
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
label {
  display: block;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 4px;
}
</style>
