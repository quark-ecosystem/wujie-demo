<template>
  <main>
      <HomeHeader/>
      <WujieVue width="100%" height="100%" class="vue2-container" name="react" :url="react16Url"></WujieVue>
    </main>
  </template>
  
  <script>
  import hostMap from "../../hostMap";
  import HomeHeader from '../components/HomeHeader.vue';
  export default {
    components: {
      HomeHeader,
    },    data() {
      return {
        react16Url: hostMap("//localhost:7600/"),
      };
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