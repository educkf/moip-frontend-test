<template>
  <div class="invoices-list">
    <div class="wrapper">

      <BreadCrumb :paths="breadcrumb" />

      <header>
        <h1 class="underline">Cobranças</h1>
        <router-link to="invoices/add" class="btn">Fazer uma cobrança</router-link>
      </header>

      <table>
        <tr>
          <th>Valor</th>
          <th>Cliente</th>
          <th>Criado em</th>
          <th>Motivo</th>
        </tr>

        <tr v-for="n in 20" :key="n">
          <td>R$ 100,00</td>
          <td>eduardo.ckf@gmail.com</td>
          <td>12/05/2018 &bull; 17h34</td>
          <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus voluptate modi, delectus aut ullam libero rerum incidunt recusandae sit odio quod dolores commodi doloribus praesentium?</td>
        </tr>

      </table>

      <div class="back_top" @click="back_top()">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><path d="M491.318,235.318H20.682C9.26,235.318,0,244.578,0,256c0,11.423,9.26,20.682,20.682,20.682h470.636    c11.423,0,20.682-9.259,20.682-20.682C512,244.578,502.741,235.318,491.318,235.318z"></path></g><g><path d="M49.932,256L211.795,94.136c8.077-8.077,8.077-21.172,0-29.249c-8.077-8.076-21.172-8.076-29.249,0L6.058,241.375    c-8.077,8.077-8.077,21.172,0,29.249l176.488,176.488c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.625-6.058    c8.077-8.077,8.077-21.172,0-29.249L49.932,256z"></path></g></svg>
      </div>

    </div>
    <div class="bg"></div>
  </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb'

export default {
  name: "ListInvoice",
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
          to: "/invoices",
          title: "Cobranças"
        }
      ]
    }
  },
  methods: {
    back_top: function() {
      window.scrollTo({
        'behavior': 'smooth',
        'left': 0,
        'top': document.getElementById('app').offsetTop
      });
    }
  }
};
</script>

<style lang="less" scoped>

@import '../../assets/variables.less';

.invoices-list {
  background-color: #E6E9F5;
  overflow: auto;
  
  .wrapper {
    position: relative;
    z-index: 1;
  }
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    .heading();
  }
}

.btn {
  .button();
}

table {
  width: 100%;
  margin: 30px 0;
  box-shadow: 0 2px 4px 1px rgba(0,0,0,0.25);
  border-radius: 4px;
  border-spacing: 0;
  border-collapse: collapse;
  background: #fff;

  th, td {
    padding: 16px 64px 16px 0;
    border: none;
    border-bottom: 1px solid #ccc;
    font-size: 15px;
    text-align: left;
    color: @fontcolor;

    &:nth-child(1) {
      text-align: right;
      min-width:100px;
    }

    &:nth-child(3) {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      width: 150px;
    }

    &:last-child {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      max-width: 300px;
    }
  }

  th {
    color: @secondcolor;
    text-transform: uppercase;
    font-weight: 800;
  }

  tr {
    &:last-child {
      td {
        border: none;
      }
    }
  }
}

.back_top {
  width: 40px;
  height: 40px;
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center; 
  border: 2px solid @maincolor;
  margin-bottom: 60px;

  svg {
    width: 20px;
    fill: @maincolor;
    transform: rotate(90deg)
  }
}

.bg {
  width: 100%;
  height: 216px;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #fff;
  z-index: 0;
}

</style>
