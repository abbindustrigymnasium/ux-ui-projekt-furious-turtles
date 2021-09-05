<template>
  <form class="login" onsubmit="return false" @submit="login(email, password)">
    <h1>Login</h1>
    <label>Email</label><br />
    <input
      type="email"
      v-model="email"
      name="email"
      placeholder="Email"
    /><br /><br />
    <label>Password</label><br />
    <input
      type="password"
      v-model="password"
      name="password"
      placeholder="Password"
    /><br /><br />
    <input class="button" type="submit" value="Login" />
  </form>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login(email, password) {
      const res = await fetch(
        "http://localhost:5000/Customers/?email=" + email
      );
      const data = await res.json();
      console.log(data);
      36;
      if (data.length == 1) {
        if (data[0].password === password) {
          console.log("Logged into ID:", data[0].id);
          this.setCookie("userID", data[0].id);
          this.$emit("idUpdated");
        } else {
          alert("Incorrect Password/Email");
        }
      } else {
        alert("Incorrect Password/Email");
      }
    },
    getCookie(c_name) {
      return sessionStorage.getItem(c_name);
    },
    setCookie(c_name, value) {
      return sessionStorage.setItem(c_name, value);
    },
  },
};
</script>

<style>
.login {
  width: 30%;
  min-width: 30rem;
  background-color: #111111;
  text-align: center;
  border-radius: 0.5rem;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 50px;
  padding: 10px;
  padding-top: 20px;
  padding-bottom: 30px;
}
.button {
  font-size: 130%;
}
</style>