<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>
<script>
  import Navbar from "./components/Navbar";
  export default {
    components: { Navbar }
  }
</script>
<style scoped>
  #app{
    margin: auto;
    max-width: 800px;
    text-align: center;
  }
</style>
