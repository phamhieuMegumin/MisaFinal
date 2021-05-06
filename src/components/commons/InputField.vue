<template>
  <div class="field-input-container">
    <div class="input-field" :class="[searchField ? 'search-field' : '']">
      <input type="text" :placeholder="placeholder" />
      <div v-if="searchField" class="search-icon"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["placeholder", "searchField"],
};
</script>

<style scoped>
.input-field {
  position: relative;
}
.input-field input {
  padding: 6px 11px;
  border-radius: 2px;
  border: 1px solid #babec5;
  outline: none;
  width: 100%;
}
.input-field input:focus {
  border-color: #2ca01c;
}
::placeholder {
  font-style: italic;
}
.search-icon {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  background: url("../../assets/img/Sprites.64af8f61.svg") no-repeat -992px -357px;
  cursor: pointer;
}
</style>
