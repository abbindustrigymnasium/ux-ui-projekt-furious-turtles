<template>
  <div id="wrapper">
    <v-card
    v-for="cake in cakes" :key="cake.id"
    class="mx-auto"
    max-width="344"
    style="width:300px; margin-top: 50px"
  >
    <v-img
      :src="cake.image"
      height="200px"
    ></v-img>

    <v-card-title>
      {{ cake.title}}
    </v-card-title>

    <v-card-subtitle>
      price: {{ cake.price}} USD
    </v-card-subtitle>

    <v-card-actions>
      <v-btn v-on:click="addToCart(cake.id)">Add to cart</v-btn>
      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="ShowDetail(cake.id)"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div :id="cake.id" style="display:none">
        <v-divider></v-divider>

        <v-card-text>
         {{ cake.detailDescription }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      cakes: [],
      IdObject: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]

    }
    },
    mounted () {
    axios.get("http://localhost:3000/cakes")
      .then((result) => {
        this.cakes = result.data
      })
  },
   methods: {
      ShowDetail(id){
      this.IdObject[id] = !this.IdObject[id]
      if(this.IdObject[id] === true){
        document.getElementById(id).style.display = "block"
      } else{
        document.getElementById(id).style.display = "none"
      }
    },
    addToCart(id) {
      if (this.$store.state.IsLoggedIn == true){
      this.$store.state.cart.push(this.cakes[id -1])
      this.$store.state.totalPrice += this.cakes[id -1].price
      this.$store.state.CartNumber++
      } else {
        alert('You are not logged in')
      }
    }
  }
}
</script>


<style >

#wrapper2 {
    width: 98vw;
    display: flex;
    height: 80vh;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
}

#p {
    color: white;
    font-weight: 900;
    margin: 25px;
}
 

</style>