<template>
  <div :key="key" v-for="(quantity, key) in cart">
    {{ getCake(key)["title"] + " " + quantity }}
  </div>
  <!-- <h1>{{ cakes }}</h1> -->
</template>

<script>
export default {
  name: "Checkout",
  methods: {
    getCake(id) {
      console.log(id);
      console.log(this.cakes[1].id === parseInt("1"));
      let cake = this.cakes.filter(
        (filterCake) => filterCake.id === parseInt(id)
      );
      return cake[0];
    },
    async getData() {
      const cartRes = await fetch(
        "http://localhost:5000/customers/" + sessionStorage.getItem("userID")
      );
      const cartData = await cartRes.json();

      const cakeRes = await fetch("http://localhost:5000/cakes");
      const cakeData = await cakeRes.json();

      this.cakes = cakeData;
      this.cart = cartData.cart;
    },
  },
  data() {
    return {
      cart: {},
      cakes: [],
    };
  },
  created() {
    this.getData();
  },
};
</script>