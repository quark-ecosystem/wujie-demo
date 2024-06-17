<script setup lang="ts">
import { ElMessage, ElMessageBox } from 'element-plus';
import { ref, reactive, nextTick } from 'vue';
//@ts-ignore
import HomeHeader from '../components/HomeHeader.vue';
</script>

<template>
  <main>
    <HomeHeader />
    <span class="wujie-example">无界微前端示例</span>
  </main>
</template>
<style scoped>
  main {
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
  }
  .wujie-example {
    font-size: 20px;
    font-weight: bold;
    color: #333;
  }
</style> 
