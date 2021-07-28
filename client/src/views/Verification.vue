<template> 
    <div class="col-md-6 text-center mx-auto mt-5">
        <br><br><br><br><br>
        <div class="404-content">
            <h1 class="display-1 pt-1 pb-2">Hello</h1>
            <p class="px-3 pb-2 text-dark">you need to verify the account email address. <br> We automatically send a verification email to the email address you used to sign up for your account!</p>
            <router-link to="/" href=# class="btn btn-info">GO HOME</router-link>
        </div>
    </div>
</template>

<script>
import Home from '@/views/Home.vue'
export default {
    name : 'Verification',
    component : {
        Home
    }
}
</script>

<style>

</style>