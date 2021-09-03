<template>
<div id="wrapper">
    <v-card
    v-for="items in DisplayItems" :key="items.id"
    class="mx-auto"
    max-width="344"
    style="width:300px; margin-top: 50px"
  >
    <v-img
      :src="items.image"
      height="200px"
    ></v-img>

    <v-card-title>
      {{ items.title}}
    </v-card-title>

    <v-card-subtitle>
      price: {{ items.price }} USD
    </v-card-subtitle>

  </v-card>

  <h1 id="h1">Total price: {{ this.$store.state.totalPrice }}</h1>
  <v-btn id="check" v-on:click="Checkout()">Checkout</v-btn>

  </div>
</template>

<script>
export default {
    name: 'Cart',
    components: {

    },
    computed: {
      returnCartItems() {
        return this.$store.state.cart
      }
    },
    data(){
      return {
        DisplayItems: []
      }
    },
    mounted(){
      this.DisplayItems = this.returnCartItems
    },

    methods: {

    Checkout() {
      this.$store.state.money -= this.$store.state.totalPrice
    }
    }

}
</script>

<style>
#h1 {
  color: white;
}

#check {
  color: aqua;
}

</style>