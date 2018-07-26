<template>
  <div class="invoices-list">
    <div class="wrapper">

      <BreadCrumb :paths="breadcrumb" />

      <header>
        <h1 class="underline">Cobranças</h1>
        <router-link to="invoices/add" class="btn">Fazer uma cobrança</router-link>
      </header>

      <table>

        <thead>
          <tr>
            <th>Valor</th>
            <th>Cliente</th>
            <th>Criado em</th>
            <th>Motivo</th>
          </tr>
        </thead>

        <tbody>
          <tr v-if="invoices.length == 0">
            <td><span>Valor </span> -</td>
            <td><span>Cliente </span> - </td>
            <td><span>Criado em </span> - </td>
            <td><span>Motivo </span> - </td>
          </tr>

          <tr v-else v-for="(invoice, i) in invoices" :key="i">
            <td><span>Valor </span>R$ {{ invoice.value }}</td>
            <td><span>Cliente </span>{{ invoice.email }}</td>
            <td><span>Criado em </span>{{ invoice.createDate | moment }}</td>
            <!-- Add class to hide empty description on mobile view -->
            <td :class="!invoice.description ? 'hide_mobile' : null"><span>Motivo </span>{{ invoice.description || '-' }}</td>
          </tr>
        </tbody>

      </table>

      <div class="back_top" @click="back_top()">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><path d="M491.318,235.318H20.682C9.26,235.318,0,244.578,0,256c0,11.423,9.26,20.682,20.682,20.682h470.636    c11.423,0,20.682-9.259,20.682-20.682C512,244.578,502.741,235.318,491.318,235.318z"></path></g><g><path d="M49.932,256L211.795,94.136c8.077-8.077,8.077-21.172,0-29.249c-8.077-8.076-21.172-8.076-29.249,0L6.058,241.375    c-8.077,8.077-8.077,21.172,0,29.249l176.488,176.488c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.625-6.058    c8.077-8.077,8.077-21.172,0-29.249L49.932,256z"></path></g></svg>
      </div>

    </div>
    <div class="bg"></div>
  </div>
</template>

<script>
import moment from 'moment'
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
  computed: {
    invoices() {
      // sort from newest to oldest
      return this.$store.state.invoices.sort((a,b) => a.createDate > b.createDate ? -1 : a.createDate < b.createDate ? 1 : 0);
    } 
  },
  methods: {
    back_top: function() {
      window.scrollTo({
        'behavior': 'smooth',
        'left': 0,
        'top': document.getElementById('app').offsetTop
      });
    },
    
  },
  filters: {
    moment: function(date) {
      return moment.unix(date).format('DD/MM/YYYY [•] H[h]m')
    }
  },
  created() {}
};
</script>

<style lang="less" scoped>

@import '../../assets/variables.less';

.invoices-list {
  background-color: #E6E9F5;
  overflow: auto;
  min-height: 100vh;
  
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

    span {
      display: none;
    }

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

  @media screen and (max-width: 780px) {
    background: none;
    box-shadow: none;
    border-radius: 0;
    margin-bottom: 20px;
    width: 100%;

    thead {
      display: none;
    }

    tr {
      display: block;
      margin-bottom: 10px;
      background: #fff;
      border-radius: 4px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.35);
      padding: 10px 0;
    }

    td {
      display: block;
      text-align: left !important;
      border: none;
      padding: 5px 15px;
      font-size: 16px;
      width: 100% !important;

      span {
        display: block;
        text-transform: uppercase;
        font-size: 13px;
        font-weight: 600;
        color: @secondcolor;
      }

      &.hide_mobile {
        display: none;
      }

      &:last-child {
        max-width: initial;
        text-overflow: initial;
        white-space: initial;
        overflow: auto;
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

  @media screen and (max-width: 780px) {
    margin: 0 auto 60px;
  }

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
