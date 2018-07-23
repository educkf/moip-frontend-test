<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">

@import 'assets/variables.less';

#app {
  font-family: "Quicksand", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: @fontcolor;
}

.wrapper {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

</style>
