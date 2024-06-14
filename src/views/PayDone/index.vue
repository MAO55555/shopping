<template>
  <div class="payDone main">
    <el-icon :size="88" color="#67C23A"><CircleCheck /></el-icon>
    <div class="text">支付成功</div>
    <div class="btns">
      <el-button @click="$router.push('/')" round>返回首页</el-button>
      <el-button type="primary" @click="$router.push('/order/detail')" round
        >查看订单</el-button
      >
    </div>
  </div>
</template>
  
<script setup lang="ts">
</script>
  
<style lang="scss" scoped>
.payDone {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
}
.text {
  font-size: 24px;
  margin-bottom: 20px;
}
</style>