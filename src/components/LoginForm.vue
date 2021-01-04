<template>
    <form> <!-- method="POST" action="http://ec2-13-115-245-61.ap-northeast-1.compute.amazonaws.com/login" novalidate -->
        <!-- <input type="hidden" name="_token" value="lRF0AtbuFK5PLjeMWHN3L8XkztZrlObMLHSOHYuV"> -->
        <!-- 1 -->
        <div class="form-group row">
            <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
            <div class="col-md-6">
                <input
                    v-model="email"
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    value=""
                    autocomplete="email"
                    autofocus
                    required
                >
            </div>
        </div>
        <!-- 2 -->
        <div class="form-group row">
            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
            <div class="col-md-6">
                <input
                    v-model="password"
                    id="password"
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    name="password"
                    autocomplete="current-password"
                    required
                >
            </div>
        </div>
        <!-- 3 -->
        <div class="form-group row">
            <div class="col-md-6 offset-md-4">
                <div class="form-check">
                    <input v-model="remember" class="form-check-input" type="checkbox" name="remember" id="remember">
                    <label class="form-check-label" for="remember">
                        Remember me
                    </label>
                </div>
            </div>
        </div>
        <!--  -->
        <div class="form-group row mb-0">
            <div class="col-md-8 offset-md-4">
                <button @click="sendLogin" type="submit" class="btn btn-primary">
                    Login
                </button>
            </div>
        </div>
        <!-- 4 -->
    </form>
</template>

<script>
import { bus } from '../main'

export default {
  data: () => {
    return {
      email: '',
      password: '',
      remember: false
    }
  },
  methods: {
    sendLogin () {
      let {email, password} = this
      bus.$emit('onLogin', {email, password})
    }
  }
}
</script>
