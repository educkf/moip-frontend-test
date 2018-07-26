<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$store.dispatch('getInvoices')
    }
  }
</script>

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
