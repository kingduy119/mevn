<template>
  <div id="app"
    style="display: flex; flex-direction: column; justify-content: space-between; min-height: 100vh; max-width: 100%"
  >
    <!-- <img src="./assets/logo.png"> -->
    <the-header :user="globalUser"></the-header>

    <router-view/>

    <the-footer v-if="!globalUser"></the-footer>
    <!-- <confirm-dialog></confirm-dialog> -->
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import ConfirmDialog from './components/dialogs/ConfirmDialog.vue'
import globalMixins from './mixins/globalMixins'
import { bus } from './main'

export default {
  name: 'App',
  components: { TheHeader, TheFooter, ConfirmDialog },
  mixins: [globalMixins],
  data () {
    return {
    }
  },
  created () {
    bus.$on('onLogin', function (user) {
      let valitor = JSON.parse(localStorage.getItem('userRegister'))
      if (valitor.email !== user.email || valitor.password !== user.password) {
        return
      }
      localStorage.setItem('user', JSON.stringify(user))
      window.location = '/'
    })
    bus.$on('onRegister', function (user) {
      localStorage.setItem('userRegister', JSON.stringify(user))
      localStorage.setItem('user', JSON.stringify(user))
      window.location = '/login'
    })
    bus.$on('onLogout', function () {
      localStorage.removeItem('user')
      window.location = '/login'
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
