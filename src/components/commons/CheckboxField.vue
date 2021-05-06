<template>
  <div @click="handleCheck" class="checkbox-field">
    <div v-if="isCheck" class="check-icon"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCheck: false,
    };
  },
  methods: {
    handleCheck() {
      this.isCheck = !this.isCheck;
    },
  },
};
</script>

<style scoped>
.checkbox-field {
  width: 18px;
  height: 18px;
  border-radius: 2px;
  border: 1px solid #afafaf;
  background: #fff;
  cursor: pointer;
}
.check-icon {
  width: 24px;
  height: 24px;
  background: url("../../assets/img/Sprites.64af8f61.svg") no-repeat -1224px -360px;
}
</style>
