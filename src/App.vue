<template>
  <div id="app"
    style="display: flex; flex-direction: column; justify-content: space-between; min-height: 100vh; max-width: 100%"
  >
    <!-- <img src="./assets/logo.png"> -->
    <the-header></the-header>

    <router-view/>

    <the-footer></the-footer>

    <!-- <confirm-dialog></confirm-dialog> -->
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import ConfirmDialog from './components/dialogs/ConfirmDialog.vue'
import { bus } from './main'

export default {
  name: 'App',
  components: { TheHeader, TheFooter, ConfirmDialog },
  data () {
    return {
      user: null
    }
  },
  computed: {
    getUser () { return this.user }
  },
  created () {
    bus.$on('onLogin', function (user) {
      let valitor = JSON.parse(localStorage.getItem('userRegister'))
      if (valitor.email !== user.email || valitor.password !== user.password) {
        return
      }
      JSON.parse(localStorage.setItem('user', JSON.stringify(user)))
    })
    bus.$on('onRegister', function (user) {
      localStorage.setItem('userRegister', JSON.stringify(user))
      this.$router.push({name: 'Index'})
    })
    bus.$on('onLogout', function () {
      localStorage.removeItem('user')
    })
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
