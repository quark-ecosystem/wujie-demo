<template>
  <main>
    <HomeHeader/>
    <WujieVue class="vue2-container" name="angular" :url="url"></WujieVue>
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
        url: hostMap("//localhost:7400/"),
      };
    },
  };
  </script>
  
  <style lang="css" scoped>
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