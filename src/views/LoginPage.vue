<template>
<main class="pt-4 page-content-container">
<div class="login-container">
           
<div class="container">
    <div class="card main-card">
        <div class="card-header">Login</div>

        <div class="card-body">
            <!-- LOGIN -->
            <login-form></login-form>
        </div>
    </div>
</div>

</div>
</main>
</template>

<script>
import LoginForm from '../components/LoginForm.vue';

export default {
    components: {
        LoginForm
    },
}
</script>