<template>
  <div class="tableContainer">
    <table>
      <tr>
        <th class="type">Type</th>
        <th class="number">Quantity</th>
        <th class="currency">Price</th>
        <th class="currency">Total</th>
      </tr>
      <tr class="cakeGridItem" :key="item.id" v-for="item in cart">
        <td class="type">{{ item.title }}</td>
        <td class="number">{{ item.quantity }}</td>
        <td class="currency">{{ "€" + item.price }}</td>
        <td class="currency">{{ "€" + item.price * item.quantity }}</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td class="currency">{{ "€" + totalPrice }}</td>
      </tr>
    </table>
    <br />
    <div @click="purchase(cart)" class="action">
      <span>Purchase <span class="accent">></span></span>
    </div>
  </div>
  <!-- <h1>{{ cakes }}</h1> -->
</template>

<script>
export default {
  name: "Checkout",
  methods: {
    async purchase(cart) {
      let timestamp = new Date().toISOString();
      let jsonData = {
        customerId: sessionStorage.getItem("userID"),
        totalPrice: this.totalPrice,
        cakes: [],
        timestamp: timestamp,
      };

      console.log("cart", cart);

      for (const item in cart) {
        console.log("item ", item);
        jsonData.cakes.push({
          cakeId: cart[item].id,
          quantity: cart[item].quantity,
        });
      }
      console.log(cart);

      console.log("data", jsonData);
      console.log(JSON.stringify(jsonData));

      const postRes = await fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(jsonData),
      });
      const data = await postRes.json();
      console.log(data);

      const deleteRes = await fetch(
        "http://localhost:5000/customers/" + sessionStorage.getItem("userID"),
        {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ cart: {} }),
        }
      );
      console.log(deleteRes);
      window.location.reload();
    },
    addTotalPrice(add) {
      this.totalPrice += parseFloat(add);
      console.log(this.totalPrice, add);
    },
    getCake(id) {
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

      let data = {};
      for (const id in cartData.cart) {
        console.log(id, cartData.cart);
        data[id] = {
          title: cakeData[id].title,
          price: cakeData[id].price,
          id: id,
          quantity: cartData.cart[id],
        };
        this.totalPrice += cakeData[id].price * cartData.cart[id];
      }
      console.log(data);
      this.cart = data;
    },
  },
  data() {
    return {
      cart: {},
      totalPrice: 0,
    };
  },
  created() {
    this.getData();
  },
  computed: {},
};
</script>

<style scoped>
.tableContainer {
  color: #ededed;
  width: 50%;
  min-width: 25rem;
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto;
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
.actions {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-evenly;
}
.accent {
  display: inline;
  color: #44d62d;
  text-shadow: 0px 0px 3px #111111;
}
.action {
  background-color: rgba(0, 0, 0, 0.158);
  font-size: 120%;
  border: white 2px solid;
  border-radius: 5px;
  padding: 2px;
  padding-left: 4px;
  padding-right: 4px;
  height: max-content;
  transition: 0.1s;
  user-select: none;
}
.action:hover {
  transform: scale(1.05);
  cursor: pointer;
  color: #44d62d;
}
.action:active {
  transform: scale(0.95);
  background-color: #44d62d;
}
</style>