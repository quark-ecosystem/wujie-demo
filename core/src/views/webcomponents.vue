<template>
    <main>
      <HomeHeader/>
      <my-component class="vue2-container" />
    </main>
    
</template>
  
<script>
import HomeHeader from '../components/HomeHeader.vue';
import "../../lib/index.js"
  export default {
    components: {
      HomeHeader,
    },
    data() {
      return {
      };
    },
    methods: {
    },
  };
  </script>
  
 <style scoped>
  main {
      width: 100vw;
      height: 100vh;
      overflow-y: auto;
      background-color: white;
      display: flex;
      flex-direction: column;
  }
  .vue2-container {
    margin-top: 60px;
    width: 100%;
    height: 100%;
  }
</style>