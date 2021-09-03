<template>
  <div id="wrapper">
    <v-card
    v-for="people in staff" :key="people.id"
    class="mx-auto"
    max-width="344"
  >
    <v-img
      :src="people.avatar"
      height="200px"
    ></v-img>

    <v-card-title>
      {{ people.name }}
    </v-card-title>

    <v-card-subtitle>
      {{ people.role}}
    </v-card-subtitle>

    <v-card-actions>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="ShowDetail(people.id)"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div :id="people.id" style="display:none">
        <v-divider></v-divider>

        <v-card-text>
         phone: {{ people.phone }}
        </v-card-text>
        <v-card-text>
         email: {{ people.email }}
        </v-card-text>
        <v-card-text>
         Date of Birth: {{ people.dateOfBirth }}
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
      staff: [],
      IdObject: [false,false,false,false,false]
    }
  },
  mounted () {
    axios.get("http://localhost:3000/staff")
      .then((result) => {
        this.staff = result.data
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
    }
  }
}
</script>
 
<style>
#wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    width: 100vw;

} 
/*

 #staf {
    width: 200px;
    height: 200px;
    padding: 0  px;
    border: white solid;
}

#p {
    color: white;
    font-weight: 900;
    margin: 25px;
}

#names {
    margin: 20px;
} */
</style>