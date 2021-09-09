<template>
  <div class="accountContainer">
    <div class="accountInfo">
      <img :src="account.avatar" alt="" />
      <h1>{{ account.name }}</h1>
      <a :href="'mailto:' + account.email">
        <h2>{{ account.email }}</h2>
      </a>
      <h3>Created At</h3>
      {{ new Date(account.timestamp).toLocaleString() }}
      <br />
      <br />
      <button @click="logout">Logout</button>
    </div>
    <Orders />
  </div>
</template>

<script>
import Orders from "./Orders";

export default {
  name: "AccountPage",
  components: {
    Orders,
  },
  methods: {
    async getProfile() {
      const res = await fetch(
        "http://localhost:5000/Customers/?id=" +
          sessionStorage.getItem("userID")
      );
      const data = await res.json();
      console.log(data);
      this.account = data[0];
    },
    logout() {
      sessionStorage.setItem("userID", "");
      this.$emit("idUpdated");
    },
  },
  data() {
    return {
      account: {},
    };
  },
  created() {
    this.getProfile();
  },
};
</script>

<style scoped>
.accountContainer {
  display: flex;
  text-align: center;
  width: 100%;
}
.accountInfo {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  width: 30%;
  border-radius: 0.5rem;
  min-width: 25rem;
  background-color: #111111;
  padding: 2rem;
  margin: 1rem;
}
img {
  width: 40%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
}
button {
  font-size: 130%;
  background-color: red;
  border-radius: 0.5rem;
  border: #222222 2px solid;
  transition: 0.1s;
  color: black;
}
button:hover {
  background-color: rgb(255, 67, 67);
  transform: scale(1.1);
  cursor: pointer;
}
</style>