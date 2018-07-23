<template>
  <div class="invoices-add">
    <div class="wrapper">
      <nav>
        <router-link to="/invoices">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><path d="M491.318,235.318H20.682C9.26,235.318,0,244.578,0,256c0,11.423,9.26,20.682,20.682,20.682h470.636    c11.423,0,20.682-9.259,20.682-20.682C512,244.578,502.741,235.318,491.318,235.318z"></path></g><g><path d="M49.932,256L211.795,94.136c8.077-8.077,8.077-21.172,0-29.249c-8.077-8.076-21.172-8.076-29.249,0L6.058,241.375    c-8.077,8.077-8.077,21.172,0,29.249l176.488,176.488c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.625-6.058    c8.077-8.077,8.077-21.172,0-29.249L49.932,256z"></path></g></svg>
          Voltar
        </router-link>
      </nav>
      <header>
        <h1>Nova cobrança</h1>
      </header>
    </div>
  </div>
</template>

<script>

export default {
  name: "AddInvoice",
  components: {}
};
</script>

<style lang="less" scoped>

@import '../../assets/variables.less';

header {
  h1 {
    .heading();
  }
}

nav {
  margin: 24px 0;

  a {
    font-size: 15px;
    color: @maincolor;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;

    svg {
      height: 15px;
      margin-right: 5px;
      fill: @maincolor;
      position: relative;
      top: 2px;
    }
  }
}

.btn {
  .button();
}

</style>
