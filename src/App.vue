<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/"></router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view />
  </div>
</template>

<style lang="less">
@import url("./assets/screen.css");

body {
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
}

.large {
  width: 100%;
}
.half {
  width: 50%;
}
</style>
