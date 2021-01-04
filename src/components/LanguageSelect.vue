<template>
<li class="dropdown nav-item" @click="show=!show" @focusout="show=false">
    <a
        id="dropdownMenuLink"
        href="#" data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        class="nav-link dropdown-toggle"
    >
      Language
    </a>
    <div aria-labelledby="dropdownMenuButton" :class="['dropdown-menu', show ? 'show' : '']">
        <a class="dropdown-item">English</a>
        <a class="dropdown-item">日本語</a>
        <a class="dropdown-item">Tiếng Việt</a>
    </div>
</li>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  }
}
</script>
