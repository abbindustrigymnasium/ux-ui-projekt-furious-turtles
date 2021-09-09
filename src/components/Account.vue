<template>
  <div class="accountContainer">
    <div v-if="!account">
      <Login @idUpdated="idUpdated" @login="login" />
    </div>
    <div v-if="account">
      <AccountPage @idUpdated="idUpdated" />
    </div>
  </div>
</template>

<script>
import Login from "./Login";
import AccountPage from "./AccountPage";

export default {
  name: "Account",
  components: {
    Login,
    AccountPage,
  },
  data() {
    return {
      account: sessionStorage.getItem("userID"),
    };
  },
  created() {
    console.log(this.account);
  },
  methods: {
    login(email, password) {
      console.log(email, password);
    },
    idUpdated() {
      this.account = sessionStorage.getItem("userID");
      console.log("ID Updated:", this.account);
    },
  },
};
</script>

<style>
.accountContainer {
  color: #ededed;
}
</style>