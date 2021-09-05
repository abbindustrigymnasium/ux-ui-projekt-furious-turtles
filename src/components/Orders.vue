<template>
  <div class="orderContainer">
    <div class="order" :key="order.id" v-for="order in orders">
      <div>
        <h2>{{ new Date(order.timestamp).toLocaleString() }}</h2>
        <div class="orderTableContainer">
          <table>
            <tr>
              <th class="type">Type</th>
              <th class="number">Quantity</th>
              <th class="currency">Price</th>
              <th class="currency">Total Price</th>
            </tr>
            <tr class="cakeGridItem" :key="cake.id" v-for="cake in order.cakes">
              <td class="type">{{ getCake(cake.cakeId).title }}</td>
              <td class="number">{{ cake.quantity }}</td>
              <td class="currency">{{ "€" + getCake(cake.cakeId).price }}</td>
              <td class="currency">
                {{
                  "€" +
                  parseInt(getCake(cake.cakeId).price) * parseInt(cake.quantity)
                }}
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Orders",
  data() {
    return {
      orders: [],
      cakes: [],
    };
  },
  methods: {
    async getProfile() {
      const res = await fetch(
        "http://localhost:5000/orders/?customerId=" +
          sessionStorage.getItem("userID")
      );
      const data = await res.json();
      this.orders = data;
      console.log(data);
    },
    async getCakes() {
      const res = await fetch("http://localhost:5000/cakes/");
      const data = await res.json();
      this.cakes = data;
      console.log(data);
    },
    getCake(id) {
      console.log(id);
      let cake = this.cakes.filter((filterCake) => filterCake.id === id);
      return cake[0];
    },
  },
  created() {
    this.getCakes();
    this.getProfile();
  },
};
</script>

<style scoped>
.order {
  margin: 1rem;
  margin-left: 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  background-color: #111111;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}
h2 {
  margin-top: auto;
  margin-bottom: auto;
}
table {
  border-collapse: collapse;
  background-color: #222222;
  width: 100%;
}
th,
tr,
td {
  margin: 0%;
  padding: 5px;
  border: #555555 1px solid;
}
th {
  font-size: 120%;
  background-color: #44d62c;
  color: rgb(29, 29, 29);
}
.type {
  text-align: left;
}
tr:nth-child(odd) {
  background-color: #181818;
}
.currency,
.number {
  text-align: right;
}
</style>