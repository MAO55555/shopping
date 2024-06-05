<template>
  <div class="topbar">
    <div class="container">
      <el-row
        type="flex"
        justify="space-between"
        align="middle"
        class="topbar-box"
      >
        <div class="left-nav"></div>
        <el-space size="size" spacer="|" class="right-nav">
          <router-link to="/">
            <el-button type="text">登录</el-button>
          </router-link>
          <router-link to="/">
            <el-button type="text">注册</el-button>
          </router-link>
          <router-link to="/">
            <el-button type="text">关于我—MAO</el-button>
          </router-link>
        </el-space>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.topbar {
  height: 40px;
  background-color: #f5f5f5;
  &-box {
    height: 100%;
  }
  .right-nav {
    display: flex;
  }
  .el-button {
    color: #333;
  }
}
</style>