<template>
  <div id="wrapper">
    <nav class="navbar" height = "1000px">
      <router-link to="/"><div class="navbar-brand">
        
        

        <a class="navbar-burguer" aria-label="menu" aria-expanded="false" data-target="navbar-menu" @click="showMobileMenu = !showMobileMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
        
      </div></router-link>
      
      <div class="navbar-menu" id="navbar-menu" v-bind:class="{'is-active': showMobileMenu }">
        <div class="navbar-end">
          <router-link to="/acessoriosdiversos" class="navbar-item">Acessórios diversos</router-link>
          <router-link to="/snacks" class="navbar-item">Snacks</router-link>

          <div class="navbar-item">
            <div class="buttons">
              <router-link to="/log-in" class="button is-light">Login</router-link>

              <router-link to="/cart" class="button is-success">
                <span class="icon"><i class ="fas fa-shopping-cart"></i></span>
                <span>Cart {{ cartTotalLength }}</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <section class="section">
      <router-view/>
    </section>
    
    <footer class="footer">
      <p class="has-text-centered">Copyright (c) 2023</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMobileMenu: false,
      cart: {
        items: []
      }
    }
  },
  beforeCreate() { //before cart is created, initialize store
    this.$store.commit('initializeStore') //call the mutations in index
  },
  mounted() {
    this.cart = this.$store.state.cart
  },
  computed: { //calculated variables
    cartTotalLength() { //calculate car length
      let totalLength = 0

      for(let i = 0; i < this.cart.items.length; i++) {
        totalLength += this.cart.items[i].quantity
      }

      return totalLength
    }
  }
}
</script>

<style lang="scss">
@import '../node_modules/bulma';

  .navbar-brand{
    position: sticky;
    background: url(./images/logo.png) center center;
    margin-top: 30px;
    margin-left: 50px;
    width: 130px;
    height: 130px;
    background-size: 100%;
  }

  .navbar-item{
    margin-inline: 10px;
    font-size: 24px;
  }
</style>
