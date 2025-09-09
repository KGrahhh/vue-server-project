<template>
  <div id="app">
    <h1>Watch Collection</h1>
    <div class="watch-grid">
      <div class="watch-card" v-for="watch in watches" :key="watch.id">
        <img :src="watch.image" :alt="watch.model" />
        <h2>{{ watch.brand }}</h2>
        <p>{{ watch.model }}</p>
        <span>₱{{ watch.price.toLocaleString() }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      watches: [
  {
    id: 1,
    brand: "Rolex",
    model: "Submariner",
    price: 950000,
    image: "/sub.jpg",   
  },
  {
    id: 2,
    brand: "Omega",
    model: "Seamaster",
    price: 350000,
    image: "/seamaster.jpg",
  },
  {
    id: 3,
    brand: "Tag Heuer",
    model: "Carrera",
    price: 250000,
    image: "/carrera.jpg",
  },
],
    };
  },
};
</script>
