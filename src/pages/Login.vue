<template>
  <div class="container">
    <el-form class="login-form" label-width="80px" :model="loginForm" style="max-width: 320px">
      <el-form-item label="账号">
        <el-input v-model="loginForm.name" placeholder="用户名/手机" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="loginForm.password" type="password" />
      </el-form-item>
      <el-form-item>
      <el-button type="primary" @click="onSubmit">登录</el-button>
      <el-button>注册</el-button>
    </el-form-item>
    </el-form>
  </div>
</template>
  
<script setup lang='ts'>
import { reactive, ref } from 'vue'

const loginForm = reactive({
  name: '',
  password: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>
  
<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100vh;
}
.login-form {
  margin-right: 100px;
  width: 400px;
  height: 250px;
  padding: 20px 20px 0 0;
  // border: 1px solid aqua;
  // border-radius: 20px;
}
</style>