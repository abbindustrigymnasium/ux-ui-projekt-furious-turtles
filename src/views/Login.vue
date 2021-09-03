<template>
   
<div id="loginn">
   <v-alert type="success" color="green" v-show="alertFeedback" id="loginFeed">{{ loginFeed }}</v-alert>
      <v-content>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>Login form</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form>
                           <v-text-field
                              prepend-icon="person"
                              name="login"
                              label="Name"
                              type="text"
                              v-model="Username"
                           ></v-text-field>
                           <v-text-field
                              id="password"
                              prepend-icon="lock"
                              name="password"
                              label="Password"
                              type="password"
                              v-model="Password"
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn style="background-color: #444; color: white;" @click= "Login()">Login</v-btn>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-content>
  </div>
</template>

<script>
export default {
	name: 'Login',
    components: {
    },

    data() {
       return {
          Username : "",
          Password : "",
          loginFeed: "",
          alertFeedback: false,
          cartButtonFeedback: false,

       }
    },

	props: {
      source: String,
   },

   methods: {
      Login() {
         if(this.Username === "Samuel" && this.Password === "1234") {
            this.$store.state.Username = this.Username
            this.loginFeed = "Logged in as admin"
            this.alertFeedback = true
            this.$store.state.loginButtonFeedback = false
            this.$store.state.PendingOrders = true
            this.$store.state.IsLoggedIn = true
         } else {
            this.$store.state.Username = this.Username
            this.loginFeed = "You are logged in"
            this.alertFeedback = true
            this.$store.state.money =  1000
            this.$store.state.loginButtonFeedback = false
            this.$store.state.cartButtonFeedback = true
            this.$store.state.IsLoggedIn = true
         }
      }
   }
}
</script>



<style>
#loginFeed {
   margin-top: -150px;
   margin-left: 150px;
   width: 270px;
   position: absolute;
   background-color: green;
}
#loginn {
   width: 100vw;
   margin-left: 550px;
   margin-top: 250px;
   margin-bottom: 200px;

}
</style>