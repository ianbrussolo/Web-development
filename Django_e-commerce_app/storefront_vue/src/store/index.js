import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: {
      items: [],
    },
    isAuthenticated: false,
    token: '',
    isLoading: false
  },
  getters: {
  },
  mutations: {
    initializeStore(state) { //store things on the local storage of the browser
      if (localStorage.getItem('cart')) { //check if the local storage exists with a item called cart
        state.cart = JSON.parse(localStorage.getItem('cart'))
      } else { //if it doesn't, create cart
        localStorage.setItem('cart', JSON.stringify(state.cart))
      }
    },
    addToCart(state, item) {
      const exists = state.cart.items.filter(i => i.product.id == item.product.id)

      if (exists.length > 0) { //if item already exists on cart, populate list with first object
        exists[0].quantity = parseInt(exists[0].quantity) + parseInt(item.quantity)
      } else {
        state.cart.items.push(item) //add to cart
      }

      localStorage.setItem('cart', JSON.stringify(state.cart)) //stores the information (if you refresh the browser, the cart is still populated)
    }
  },
  actions: {
  },
  modules: {
  }
})
