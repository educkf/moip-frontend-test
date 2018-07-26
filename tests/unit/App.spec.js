import { shallowMount, createLocalVue  } from "@vue/test-utils"
import Vuex from 'vuex'
import App from "@/App.vue"

const localVue = createLocalVue()

localVue.use(Vuex)


describe('App.vue', () => {
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

  it('dispatches "getInvoices" when created', () => {
    expect(actions.getInvoices).toHaveBeenCalled()
  })
})