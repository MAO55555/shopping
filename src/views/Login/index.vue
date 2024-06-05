<template>
  <div class="login">
    <div class="loginForm">
      <div class="title mb-40">购物商城</div>
      <el-form :model="form" :rules="rules" ref="form" class="demo-ruleForm">
        <el-form-item prop="username">
          <el-input
            v-model="form.username"
            placeholder="请输入用户名"
            prefix-icon="User"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="form.password"
            placeholder="请输入密码"
            prefix-icon="Lock"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-btn">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
const form = reactive({
  username: "",
  password: "",
});

const rules = reactive({
  name: [
    { required: true, message: "Please input Activity name", trigger: "blur" },
    { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
  ],
  desc: [
    { required: true, message: "Please input activity form", trigger: "blur" },
  ],
});
</script>

<style lang="scss" scoped>
.login {
  position: relative;
  height: 100%;
  background-image: linear-gradient(45deg, #9fddfc 0%, #ffdde1 100%);
  .loginForm {
    position: absolute;
    top: 50%;
    right: 10%;
    transform: translateY(-50%);
    padding: 40px;
    width: 450px;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.5);
    .title {
      font-size: 24px;
    }
    ::v-deep .el-input__wrapper {
      font-size: 18px;
      border-radius: 10px !important;
      .el-input__inner {
        height: 50px;
      }
    }
    .login-btn {
      width: 100%;
      height: 50px;
      font-size: 18px;
      border-radius: 10px;
    }
  }
}
</style>