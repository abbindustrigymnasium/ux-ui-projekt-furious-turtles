<template>
  <nav>
    <div class="menu-item" id="log1"><h1> {{ returnUser }} balance: {{ returnBalance }} $</h1></div>
    <img src="https://logos-world.net/wp-content/uploads/2020/11/Razer-Logo.png" id="razer" alt="">
    <div class="menu-item"><router-link to="/">Home</router-link></div>
    <Dropdown title="Order" id="drop" :items="services"></Dropdown>
    <div class="menu-item"><router-link to="/About">About Us</router-link></div>
    <div class="menu-item"><router-link to="/Contact">Contact us</router-link></div>
    <!-- <img src="https://logos-world.net/wp-content/uploads/2020/11/Razer-Logo.png" id="razer" alt=""> -->
    <div class="menu-item" id="log" v-show="this.$store.state.loginButtonFeedback"><router-link to="/Login">Login</router-link></div>
    <div id="routerCart" v-if="this.$store.state.Username !== 'Samuel'">
       <router-link id="link5" to="/Cart">
          <v-row>
            <v-img src="https://cdn.iconscout.com/icon/free/png-256/shopping-cart-452-1163339.png " id="cart"></v-img>
            <p style="color:green"> {{ this.$store.state.CartNumber }}</p>
          </v-row>
      </router-link>
     </div>
    <div class="menu-item" id="log4" v-show="this.$store.state.PendingOrders"><router-link to="/PendingOrders">Pending Orders</router-link></div>
    <div class="menu-item" id="log3" v-show="this.$store.state.IsLoggedIn" @click="Reload()"><router-link to="/">Sign Out</router-link></div>
    
   
    
    
  </nav>
</template>

<script>
import Dropdown from './Dropdown';
export default {
  name: 'navbar',
  components: {
    Dropdown
  },
  data () {
    return {
      services: [
        {
          title: 'Cakes',
          link: '/Cakes'
        },
        {
          title: 'Ratingpage',
          link:'/Ratingpage'
        },
        {
          title: 'Cookie',
          link: '#'
        },
      ]
    }
  },

  computed:  {
    returnUser () {
      return this.$store.state.Username
    },
    returnBalance () {
      return this.$store.state.money
    }, 
  },

  methods: {
    Reload() {
        this.$store.state.Username = '',
        this.$store.state.IsLoggedIn = false,
        this.$store.state.loginButtonFeedback = true,
        this.$store.state.money = 0,
        this.$store.state.cartButtonFeedback = false,
        this.$store.state.totalPrice = 0,
        this.$store.state.PendingOrders = false,
        this.$store.state.CartNumber = 0

    }
  }


}
</script>

<style>
#cart {
  width: 80px;
  height: 80px;
}
#log1 {
  margin-left: -600px;
  margin-right: 300px;
}

#log {
  margin-right: -650px;
  margin-left: 600px;
}

#log3 {
  margin-right: -600px;
  margin-left: 450px;
}

#log4 {
  margin-left: 0px;
  margin-right: -70px;
}

#drop1{
  position: absolute;
  margin-left: 1500px;
}
#razer {
  height: 50px;
  width: 100px;
}
nav {
  display: flex;
  align-items: center;
  justify-content: center;
}
nav .menu-item {
  color: #FFF;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
}
nav .menu-item.active,
nav .menu-item:hover {
  background-color: #444;
  border-bottom-color: #FF5858;
}
nav .menu-item a {
  color: inherit;
  text-decoration: none;
}

</style>