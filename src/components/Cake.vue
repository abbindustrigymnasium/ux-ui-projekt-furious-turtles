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
      {{ cake.title }}
    </v-card-title>

    <v-card-subtitle>
      price: {{ cake.price}} USD
    </v-card-subtitle>

    <v-card-actions>

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
<!-- <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>Cafe Badilico</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        $ • Italian, Cafe
      </div>

      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card> -->
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