<template>
    <main>
      <HomeHeader/>
      <WujieVue width="100%" class="vue2-container" height="100%" name="vue2" :url="vue2Url"></WujieVue>
    </main>
    
</template>
  
<script>
import hostMap from "../../hostMap";
import HomeHeader from '../components/HomeHeader.vue';
  export default {
    components: {
      HomeHeader,
    },
    data() {
      return {
        vue2Url: hostMap("//localhost:7200/"),
      };
    },
    methods: {
      jump(name) {
        this.$router.push({ name });
      },
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
  }
</style>