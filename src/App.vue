<template>
  <div id="app"
    style="display: flex; flex-direction: column; justify-content: space-between; min-height: 100vh; max-width: 100%"
  >
    <!-- <img src="./assets/logo.png"> -->
    <!-- <the-header></the-header> -->
    <router-view/>
    <!-- <the-footer></the-footer> -->
    <button @click="hello">Hello</button>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
export default {
  // name: 'App',
  props: {

  },
  components: { TheHeader, TheFooter },
  methods: {
    hello: function() {
      alert("Heelo world");
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
