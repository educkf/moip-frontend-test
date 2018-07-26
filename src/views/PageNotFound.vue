<template>
  <div class="invoices-list">
    <div class="wrapper">

      <BreadCrumb :paths="breadcrumb" />

      <header>
        <h1 class="underline">Ops... 404!</h1>
        <router-link to="/" class="btn">Voltar para home</router-link>
      </header>

    </div>
  </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb'

export default {
  name: "Homepage",
  components: {
    BreadCrumb
  },
  data: function() {
    return {
      breadcrumb: [ 
        {
          to:"/", 
          title:"Página inicial"
        },
        {
          to:"/404", 
          title:"404"
        }
      ]
    }
  }
};
</script>

<style lang="less" scoped>

@import '../assets/variables.less';

header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    .heading();
  }

  @media screen and (max-width: 750px) {
    h1 {
      font-size: 36px;
    }

    .btn {
      font-size: 15px;
      padding: 12px 36px;
    }
  }

  @media screen and (max-width: 540px) {
    flex-direction: column;
    align-items: flex-start;

    h1 {
      font-size: 28px;
      margin-bottom: 24px;
    }

    .btn {
      font-size: 15px;
      padding: 14px 36px;
      width: 100%;
    }
  }
}

.btn {
  .button();
}

</style>
