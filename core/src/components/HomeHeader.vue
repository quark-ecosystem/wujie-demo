<script>
export default {}
</script>

<template>
    <div class="home-header">
      <div class="header-left">
        <a href="/">
          <img
            src="https://m.hellobike.com/resource/helloyun/13459/yjpi2_logo1.png?x-oss-process=image/quality,q_80"
            alt=""
            class="header_logo"
          >
        </a>
        <span class="header_title">Core Service</span>
        <router-link to="/webcomponents"><span class="sub-app">Web Components 组件</span></router-link>
        <router-link to="/vue2"><span class="sub-app">Vue App</span></router-link>
        <router-link to="/react"><span class="sub-app">React App</span></router-link>
        <router-link to="/angular"><span class="sub-app">Angular App</span></router-link>
      </div>
  
      <div
        class="header_right"
      >
        <span class="name">{{ 123 }}</span>
      </div>
  
    </div>
  </template>
  
  <style scoped >
    .name {
        color: #242729;
    }
    .home-header {
      height: 60px;
      width: 100vw;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-bottom: 1px solid #fafafa;
      position: fixed;
      top: 0;
      z-index: 2;
      background: white;
    }

    .header_title {
      color: #242729;
      font-weight: 500;
      font-size: 20px;
    }
  
    .header-left {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
  
    .header_logo {
        width: 26px;
        height: 26px;
        margin-left: 20px;
        margin-right: 20px;
        border-radius: 4px;
    }
  
    .header_right {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        margin-right: 40px;
    }
    .sub-app {
      margin-left: 20px;
      margin-right: 20px;
      cursor: pointer;
      color: #1890ff;
    }
    .sub-app:hover {
      color: #1890ff;
    }
  </style>
  