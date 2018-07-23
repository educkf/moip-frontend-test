<template>
  <nav class="breadcrumb">
    <router-link to="/">Página inicial</router-link>
    <router-link to="/invoices">Cobranças</router-link>
  </nav>
</template>

<script>

export default {
  name: "BreadCrumb",
  components: {}
};
</script>

<style lang="less">

@import '../assets/variables.less';

.breadcrumb {
  margin: 24px 0;

  a {
    color: @maincolor;
    text-decoration: none;
    font-weight: 600;
    text-transform: uppercase;

    &.router-link-exact-active {
      color: @fontcolor;
    }

    &:hover {
      opacity: 0.75;
    }

    &::after {
      content: '>';
      font-size: 20px;
      color: @fontcolor;
      margin: 0 10px;
    }

    &:last-child::after {
      content: ''
    }
  }

}

</style>
