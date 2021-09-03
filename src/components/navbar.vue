<template>
  <nav>
    <img src="https://logos-world.net/wp-content/uploads/2020/11/Razer-Logo.png" id="razer" alt="">
    <div class="menu-item"><router-link to="/">Home</router-link></div>
    <Dropdown title="Order" id="drop" :items="services"></Dropdown>
    <div class="menu-item"><router-link to="/About">About Us</router-link></div>
    <div class="menu-item"><router-link to="/Contact">Contact us</router-link></div>
    <img src="https://logos-world.net/wp-content/uploads/2020/11/Razer-Logo.png" id="razer" alt="">
    <div class="menu-item"><h1> {{ returnUser }}</h1></div>
    <div class="menu-item" id="log"><router-link to="/Login">Login</router-link></div>
    
    
  </nav>
</template>

<script>
import { component } from 'vue/types/umd';
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
        }
      ]
    }
  },

  computed:  {
    returnUser () {
      return this.$store.state.Username
    }
  }
}
</script>

<style>
#log {
  margin-right: -550px;
  margin-left: 430px;
}
#drop1{
  position: absolute;
  margin-left: 1560px;
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