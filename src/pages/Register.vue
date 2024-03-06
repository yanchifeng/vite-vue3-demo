<template>
  <div class="container">
    <img src="../assets/logo2.png" class="logo">
    <img src="../assets/slogan.png" class="slogan">
    <el-form class="register-form" label-width="80px" ref="ruleFormRef" :inline="true" :model="registerForm" :rules="rules" style="max-width: 320px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="registerForm.username" placeholder="用户名/手机" />
      </el-form-item>
      <el-form-item label="昵称" prop="nickName">
        <el-input v-model="registerForm.nickName" placeholder="昵称" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="registerForm.password" type="password" />
      </el-form-item>
      <el-form-item label="头像" prop="portrait">
        <el-input v-model="registerForm.portrait" />
      </el-form-item>
      <el-form-item label="生日" prop="birthday">
        <el-date-picker v-model="registerForm.birthday" type="date" placeholder="选择日期" style="width: 100%" />
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-radio-group v-model="registerForm.sex" class="radio-group-box">
          <el-radio label="0">男</el-radio>
          <el-radio label="1">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="地址" prop="address">
        <el-input v-model="registerForm.address" />
      </el-form-item>
      <el-form-item label="手机号" prop="phoneNumber">
        <el-input v-model="registerForm.phoneNumber" type="phone" />
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="registerForm.email" type="email" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit(ruleFormRef)">注册</el-button>
        <router-link class="ml5" to="/login">已有账户，去登录</router-link>
      </el-form-item>
    </el-form>
  </div>
</template>
  
<script setup lang='ts'>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { request } from "../utils/axios"
interface RuleForm {
  username: string
  password: string
  portrait: string
  nickName: string
  email: string
  department: string
  birthday: string
  sex: string
  address: string
  phoneNumber: string
}

const registerForm = reactive({
  username: "",
  password: "",
  portrait: "",
  nickName: "",
  email: "",
  department: "",
  birthday: "",
  sex: "",
  address: "",
  phoneNumber: "",
  roleList: [
    {
      "id": "1",
      "roleId": "SUPER_ADMIN",
      "roleEnName": "SUPER_ADMIN",
      "roleCnName": "超级管理员",
      "isUse": "1"
    }
  ]
})
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules<RuleForm>>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 20, message: '长度3~20', trigger: 'blur' },
  ],
  nickName: [
    { required: true, message: '请输入昵称', trigger: 'blur' },
    { min: 2, max: 20, message: '长度2~20', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 8, max: 20, message: '长度8~20', trigger: 'blur' },
  ],
  portrait: [
    {
      required: true,
      message: '请上传头像',
      trigger: 'change',
    },
  ],
  sex: [
    {
      required: true,
      message: '请选择性别',
      trigger: 'change',
    },
  ],
  birthday: [
    {
      type: 'date',
      required: true,
      message: '请选择日期',
      trigger: 'change',
    },
  ],
  phoneNumber: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    { min: 11, max: 11, message: '长度为11', trigger: 'blur' },
  ],
  address: [
    {
      required: true,
      message: '请输入地址',
      trigger: 'blur',
    },
  ],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
  ],
  department: [
    { required: true, message: '请输入部门', trigger: 'blur' },
  ],
})

const onSubmit = async (formEl: FormInstance | undefined) => {
  console.log(formEl)
  if (!formEl) return
  await formEl.validate((valid:any, fields:any) => {
    if (valid) {
      console.log('submit!')
      request('/clinic-management/SysUser/register', registerForm, 'POST').then((response:any) => {
        console.log(`output->`, response)
      })
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>
  
<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100vh;
  max-width: 100%;
}

.register-form {
  margin-right: 150px;
  width: 400px;
  padding: 20px 20px 0 0;
  border-radius: 20px;
  background-color: rgba($color: #fff, $alpha: 0.8);
}
.radio-group-box {
  width: 220px;
}
</style>