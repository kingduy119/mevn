<template>
    <header>
        <div class="page-navbar navbar navbar-expand-md fixed-top">
            <a href="/" class="brand navbar-brand">
                <img class="brand-icon" src="http://ec2-13-115-245-61.ap-northeast-1.compute.amazonaws.com/images/masking_icon.png" alt="app_icon" width="30" height="30"
                    loading="lazy">
                <img class="brand-name-logo" src="http://ec2-13-115-245-61.ap-northeast-1.compute.amazonaws.com/images/masking_title.png" alt="app_icon" width="300" height="30"
                    loading="lazy">
            </a>
            <button class="navbar-light navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu"
                    aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="menu collapse navbar-collapse" id="navbarMenu">
                <!--  -->
                <ul v-if="user" class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/#/">
                            <div>Projects</div>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#/templates">
                            <div>Templates</div>
                        </a>
                    </li>
                </ul>

                <!--  -->
                <ul class="navbar-nav ml-auto">
                    <li  v-if="!user" class="nav-item">
                        <a class="nav-link" href="/#/login">
                            <div class="px-1">Login</div>
                        </a>
                    </li>
                    <li  v-if="!user" class="nav-item">
                        <a class="nav-link" href="/#/register">
                            <div class="px-1">Register</div>
                        </a>
                    </li>
                    <!--  -->
                    <li v-if="user" class="auth-info dropdown nav-item">
                        <a class="nav-link d-flex flex-row justify-content-xl-between">
                            <span class="user-name-text">{{ user.username }}</span>
                            <md-avatar class="md-small">
                                <img src='../assets/logo.png' alt="Avatar" >
                            </md-avatar>
                            <!-- <svg class="svg-inline--fa fa-user-circle fa-w-16 fa-2x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg="">
                                <path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path>
                            </svg> -->
                        </a>
                        <div v-if="user" class="dropdown--anchor">
                            <div class="dropdown--anchor--content">
                                <button>Profile</button>
                                <button @click="logoutUser">Logout</button>
                            </div>
                        </div>
                    </li>
                    <!-- <form id="logout-form" action="http://ec2-13-115-245-61.ap-northeast-1.compute.amazonaws.com/logout" method="post" style="display: none;">
                        <input type="hidden" name="_token" value="yj91MMhgSqgXMsY2XnpX6ThKqtjMz7z9oHOsxueo">
                    </form>
                    <form id="profile-form" action="http://ec2-13-115-245-61.ap-northeast-1.compute.amazonaws.com/profile" method="post" style="display: none;">
                        <input type="hidden" name="_token" value="yj91MMhgSqgXMsY2XnpX6ThKqtjMz7z9oHOsxueo">
                    </form> -->
                    <!--  -->
                    <language-select></language-select>
                </ul>
            </div>
            <!-- <loading-bar/> -->
        </div>
    </header>
</template>

<script>
import LanguageSelect from './LanguageSelect.vue'
import { bus } from '../main'

export default {
  components: {
    LanguageSelect
  },
  props: {
    user: {type: Object, default: null}
  },
  data () {
    return {
      views: ['Projects', 'Templates']
    }
  },
  methods: {
    logoutUser () {
      bus.$emit('onLogout')
    }
  }
}
</script>
