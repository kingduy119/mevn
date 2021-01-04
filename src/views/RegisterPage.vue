<template>
<main class="pt-4 page-content-container">
<div class="login-container">

<div class="container">
    <div class="card main-card">
        <div class="card-header">Register</div>

        <div class="card-body">
            <!-- LOGIN -->
            <register-form></register-form>
        </div>
    </div>
</div>

</div>
</main>
</template>

<script>
import RegisterForm from '../components/RegisterForm.vue'
import globalMixins from '../mixins/globalMixins'

export default {
  components: {
    RegisterForm
  },
  mixins: [globalMixins],
  created () {
    if (this.user) {
      return this.$router.push({name: 'Index'})
    }
  }
}
</script>
