<template>
  <div>
    <HelloWorld msg="Vue2 App 示例"></HelloWorld>
  </div>
</template>

<script>
  import HelloWorld from "@/components/HelloWorld.vue";
  export default {
    data() {
      return {
      };
    },
    components: {
      HelloWorld,
    },
  };
</script>

<style>
  :root {
    --host-color: #f16b5f;
  }
</style>