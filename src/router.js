import Vue from "vue";
import Router from "vue-router";
import HomePage from "./views/HomePage.vue";
import InvoicesList from "./views/Invoices/List.vue";
import InvoicesAdd from "./views/Invoices/Add.vue";
import PageNotFound from "./views/PageNotFound.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage
    },
    {
      path: "/invoices",
      name: "invoices/list",
      component: InvoicesList
    },
    {
      path: "/invoices/add",
      name: "invoices/add",
      component: InvoicesAdd
    },
    { 
      path: "*", 
      component: PageNotFound 
    }
  ]
});
