<template>
  <nav class="breadcrumb">
    <router-link v-for="(path, i) in paths" :key="i" :to="path.to">{{ path.title }}</router-link>
  </nav>
</template>

<script>

export default {
  name: "BreadCrumb",
  props: ['paths'],
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
