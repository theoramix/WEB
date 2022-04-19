<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>Bob's Burgers Encyclopedia</p>
    <CharactersGallery/>
  </div>
</template>

<script>
import CharactersGallery from './components/CharactersGallery.vue'

export default {
  name: 'App',
  components: {
    CharactersGallery,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<!-- -->