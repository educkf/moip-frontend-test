import { shallowMount, createLocalVue  } from "@vue/test-utils"
import Vuex from 'vuex'
import Add from "@/views/Invoices/Add.vue"

const localVue = createLocalVue()

localVue.use(Vuex)


describe('Add.vue', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      getInvoices: jest.fn()
    }
    store = new Vuex.Store({
      state: {},
      actions
    })
  })

  it('calls addInvoice action when button is clicked', () => {
    const wrapper = shallowMount(Add, { store, localVue })
    wrapper.find('button').trigger('click')
    expect(actions.addInvoice).toHaveBeenCalled()
  })
})