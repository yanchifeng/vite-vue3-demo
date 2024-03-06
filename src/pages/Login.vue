<template>
  <div class="container">
    <img src="../assets/logo2.png" class="logo">
    <img src="../assets/slogan.png" class="slogan">
    <el-form class="login-form" ref="ruleFormRef" :rules="rules" label-width="80px" :model="loginForm" style="max-width: 320px">
      <el-form-item label="后台管理系统" size="large" label-width="130px"></el-form-item>
      <el-form-item label="账号" prop="username">
        <el-input v-model="loginForm.username" placeholder="用户名/手机" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password" type="password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit(ruleFormRef)">登录</el-button>
        <!-- <el-button><router-link to="/register">注册</router-link></el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>
  
<script setup lang='ts'>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'
import { request } from "../utils/axios"
import { useMainStore } from '../store/main'

interface RuleForm {
  username: string
  password: string
}
const store = useMainStore()
const loginForm = reactive({
  username: '',
  password: '',
})
const jump = (path:string) => {
  router.push(path)
}
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules<RuleForm>>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ]})

const onSubmit = async (formEl: FormInstance | undefined) => {
  console.log(formEl)
  if (!formEl) return
  await formEl.validate((valid:any, fields:any) => {
    // if (valid) {
    //   console.log('submit!')
    //   request('/clinic-management/SysUser/login', loginForm, 'POST').then((response:any) => {
    //     store.isLoggedIn = true
    //     store.token = response.data.token
    //     store.userInfo = response.data
        jump('/')
    //   })
    // } else {
    //   console.log('error submit!', fields)
    // }
  })
}
const router = useRouter()


</script>
  
<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100vh;
  max-width: 100%;
}

.login-form {
  width: 400px;
  height: 250px;
  padding: 20px 20px 0 0;
  margin-right: 150px;
  border-radius: 20px;
  background-color: rgba($color: #fff, $alpha: 0.8);
}
</style>