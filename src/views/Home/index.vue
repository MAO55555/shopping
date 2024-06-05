<template>
  <div class="home pb-30">
    <Switch />
    <Goods />
  </div>
</template>

<script setup lang="ts">
import Switch from "./components/Switch/index.vue";
import Goods from "./components/Goods/index.vue";
</script>

<style scoped>
.home {
  background-color: #f5f5f5;
}
::v-deep .el-carousel__button {
  width: 60px;
}
</style>