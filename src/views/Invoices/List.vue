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

        <tr>
          <td>R$ 100,00</td>
          <td>eduardo.ckf@gmail.com</td>
          <td>12/05/2018 &bull; 17h34</td>
          <td>Lorem ipsum dolor sit amet.</td>
        </tr>

        <tr>
          <td>R$ 100,00</td>
          <td>eduardo.ckf@gmail.com</td>
          <td>12/05/2018 &bull; 17h34</td>
          <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. In pariatur provident quaerat voluptates, praesentium commodi doloremque voluptatum modi quae velit quo rem vero a consequuntur!</td>
        </tr>
      </table>

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
  }
};
</script>

<style lang="less" scoped>

@import '../../assets/variables.less';

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

.bg {
  width: 100%;
  height: calc(100vh - 217px);
  position: absolute;
  left: 0;
  top: 216px;
  background-color: #E6E9F5;
  z-index: -1;
}

</style>
