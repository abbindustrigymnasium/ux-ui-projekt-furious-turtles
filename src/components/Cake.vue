<template>
  <div
    class="cakeContainer"
    :style="{
      'background-image':
        'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent, transparent), url(' +
        cake.image +
        ')',
    }"
  >
    <div class="cakeInfo">
      <h1>{{ cake.title }}</h1>
      <h3>{{ cake.previewDescription }}</h3>
      <div class="actions">
        <div @click="openInfo(cake.id)" class="action">
          <span>Learn More <span class="accent">></span></span>
        </div>
        <div @click="addToCart(cake.id)" class="action">
          <span>Add to Cart <span class="accent">></span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cake",
  props: {
    cake: Object,
  },
  methods: {
    addToCart(id) {
      console.log("Add ID to Cart: ", id);
      this.$emit("addToCart", id);
    },
    openInfo(id) {
      console.log("Open Info", id);
      this.$emit("openInfo", id);
    },
  },
};
</script>

<style scoped>
.cakeContainer {
  width: 100%;
  height: 37rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.404);
  transition: 0.4s;
  z-index: 1;
  border-radius: 0.7rem;
  border: #111111 0.2rem solid;
}
.cakeContainer:hover {
  transform: scale(1.04);
  z-index: 10;
}
.cakeInfo {
  padding-top: 20px;
  text-align: center;
  color: white;
  text-shadow: 0px 0px 5px #111111;
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
  font-size: 120%;
  border: white 2px solid;
  border-radius: 5px;
  padding: 2px;
  padding-left: 4px;
  padding-right: 4px;
  height: max-content;
  transition: 0.2s;
}
.action:hover {
  transform: scale(1.05);
  cursor: pointer;
  color: #44d62d;
  text-shadow: black 0px 0px 2px;
}
</style>