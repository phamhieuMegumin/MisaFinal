<template>
  <div v-if="isShowLoading" class="loading-container">
    <div class="loading">
      <img src="../../assets/loading.svg" alt="loading" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["isShowLoading"]),
  },
};
</script>

<style scoped>
.loading-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
