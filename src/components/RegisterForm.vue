<template>
    <form @submit="sendRegister"> <!-- method="POST" action="http://ec2-13-115-245-61.ap-northeast-1.compute.amazonaws.com/register" novalidate -->
        <input type="hidden" name="_token" value="Clp5OVWbz4Xil9QjV2bbptZrK96ql0ie0QuF6jOB">
        <div class="form-group row">
            <label for="name" class="col-md-4 col-form-label text-md-right">Username</label>

            <div class="col-md-6">
                <input v-model="username" id="name" type="text" class="form-control " name="name" value="" required autocomplete="name" autofocus>
            </div>
        </div>

        <div class="form-group row">
            <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

            <div class="col-md-6">
                <input v-model="email" id="email" type="email" class="form-control " name="email" value="" required autocomplete="email">
            </div>
        </div>

        <div class="form-group row">
            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

            <div class="col-md-6">
                <input v-model="password" id="password" type="password" class="form-control " name="password" required autocomplete="new-password">
            </div>
        </div>

        <div class="form-group row">
            <label for="password-confirm" class="col-md-4 col-form-label text-md-right">Confirm Password</label>

            <div class="col-md-6">
                <input v-model="confirm" id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
            </div>
        </div>

        <div class="form-group row mb-0">
            <div class="col-md-6 offset-md-4">
                <button type="submit" class="btn btn-primary">
                    Register
                </button>
            </div>
        </div>
    </form>
</template>

<script>
import { bus } from '../main'

export default {
  data () {
    return {
      username: '',
      email: '',
      password: '',
      confirm: ''
    }
  },
  methods: {
    sendRegister () {
      let {username, email, password} = this
      bus.$emit('onRegister', {username, email, password})
    }
  }
}
</script>
