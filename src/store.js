import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    invoices: []
  },
  mutations: {
    ADD_INVOICE(state, payload) {
      // concat invoices in state with payload. 
      // Works for both new order and localStorage repopulate
      state.invoices = [...state.invoices, ...payload]
    }
  },
  actions: {
    getInvoices({ commit }) {
      const invoices = JSON.parse(localStorage.getItem('invoices'))
      invoices ? commit('ADD_INVOICE', invoices) : null
    },

    addInvoice({ state, commit }, invoice ) {
      // would call save API from here, then...
      const invoices = JSON.stringify([...state.invoices, invoice])
      localStorage.setItem('invoices', invoices)
      commit('ADD_INVOICE', [invoice] )
      return true
    }
  }
});
