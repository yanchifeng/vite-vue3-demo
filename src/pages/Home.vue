<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        <div class="logo">某系统</div>
        <div class="header-right">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="1">Processing Center</el-menu-item>
  
            <el-menu-item index="2">Info</el-menu-item>
          </el-menu>
          <el-popover
            placement="bottom"
            :width="100"
            trigger="hover"
          >
            <template #reference>
              <el-avatar class="cursor-pointer" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
            </template>
            <div class="avatar-text cursor-pointer">个人信息</div>
            <div class="avatar-text cursor-pointer">退出</div>
          </el-popover>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px" class="aside">Aside</el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { useToggle } from '@vueuse/shared'
import { useDark } from '@vueuse/core'
import { ref } from 'vue'

const activeIndex = ref('1')
const isDark = useDark({
  storageKey: 'vitepress-theme-appearance',
})
const toggleDark = useToggle(isDark)
const handleSelect = (e:any) => {
  console.log(e)
}
</script>

<style>

</style>