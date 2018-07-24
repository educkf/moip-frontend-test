<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">

@import 'assets/variables.less';

body, html {
  margin: 0;
}

#app {
  font-family: "Quicksand", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: @fontcolor;
  overflow: auto;
}

.wrapper {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

</style>
