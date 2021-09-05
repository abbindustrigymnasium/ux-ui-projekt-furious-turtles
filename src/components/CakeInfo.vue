<template>
  <div
    :style="[
      cake.id
        ? 'transform: translate(-50%, -50%);'
        : 'transform: translate(-50%, 150%);',
    ]"
    class="infoContainer"
  >
    <div class="top">
      <img class="image" :src="cake.image" alt="CakeImage" />
      <div class="info">
        <h1>{{ cake.title }}</h1>
        <h3>{{ cake.previewDescription }}</h3>
        <h2>€{{ cake.price }}</h2>
        <div @click="addToCart(cake.id)" class="action">
          <span>Add to Cart <span class="accent">></span></span>
        </div>
      </div>
      <i @click="$emit('closeInfo')" class="close fa fa-times fa-2x"></i>
    </div>
    <div class="description">
      <h2>Description</h2>
      <p>{{ cake.detailDescription }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CakeInfo",
  props: {
    cake: Object,
  },
};
</script>

<style scoped>
.infoContainer {
  padding: 1rem;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  height: 80vh;
  max-width: 70rem;
  max-height: 70rem;
  z-index: 1000000000;
  background-color: #111111;
  border: #080808 4px solid;
  border-radius: 0.5rem;
  color: white;
  box-shadow: 10px 10px 50px black;
  transition: 0.2s;
}
.info {
  width: auto;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
.close {
  color: red;
  border: red 2px solid;
  height: max-content;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 0.5rem;
  transition: 0.1s;
}
.close:hover {
  cursor: pointer;
  transform: scale(1.1);
  color: rgb(255, 158, 158);
}
.image {
  width: auto;
}
.top {
  display: flex;
  height: 60%;
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
  text-shadow: 2px 2px 5px #111111;
}
.action {
  margin-left: auto;
  margin-right: auto;
  margin-top: 10%;
  width: max-content;
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
}
</style>