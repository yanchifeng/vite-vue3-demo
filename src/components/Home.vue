<!--
 * @Author: your name
 * @Date: 2021-05-08 23:51:55
 * @LastEditTime: 2021-05-08 23:52:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hello-vue3\src\components\Home.vue
-->
<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header<el-button type="primary" @click="toggleDark()">{{ isDark ? 'Dark' : 'Light' }}</el-button></el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { useToggle } from '@vueuse/shared'
import { useDark } from '@vueuse/core'

const isDark = useDark({
  storageKey: 'vitepress-theme-appearance',
})
const toggleDark = useToggle(isDark)
</script>

<style>

</style>