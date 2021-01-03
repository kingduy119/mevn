<template>
    <form method="POST" action="http://ec2-13-115-245-61.ap-northeast-1.compute.amazonaws.com/login" novalidate>
        <input type="hidden" name="_token" value="lRF0AtbuFK5PLjeMWHN3L8XkztZrlObMLHSOHYuV">
        <div class="form-group row">
            <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
            <div class="col-md-6">
                <input id="email" type="email" class="form-control " name="email" value="" required autocomplete="email" autofocus>
            </div>
        </div>

        <div class="form-group row">
            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
            <div class="col-md-6">
                <input 
                    id="password" 
                    type="password" 
                    class="form-control" 
                    placeholder="Password"
                    name="password" 
                    required autocomplete="current-password">
            </div>
        </div>

        <div class="form-group row">
            <div class="col-md-6 offset-md-4">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="remember" id="remember" >
                    <label class="form-check-label" for="remember">
                        Remember me
                    </label>
                </div>
            </div>
        </div>

        <div class="form-group row mb-0">
            <div class="col-md-8 offset-md-4">
                <button type="submit" class="btn btn-primary">
                    Login
                </button>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    data: () => {
        return {
            email: '',
            password: '',
            remember: false,
        }
    },
    methods: {
        onSubmit: (event) => {

        }
    }
}
</script>