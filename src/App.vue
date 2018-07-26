<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    created() {
      // action to get invoices from LocalStorage, could also work for API call
      this.$store.dispatch('getInvoices')
    }
  }
</script>

<style lang="less">

@import 'assets/variables.less';

* {
  box-sizing: border-box;
}

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

  @media screen and (max-width: 780px) {
    width: calc(100% - 30px);
  }
}

</style>
