<template>
      <!-- ======= Appointment Section ======= -->
    <section id="appointment" class="appointment section-bg">
      <div class="container">
<br><br><br><br>
        <div class="section-title">
          <h2>Login</h2>
          
        </div>

        <form @submit.prevent="login" class="php-email-form">
          <div class="row justify-content-center">
            <div class="col-md-4 form-group">
              <input v-model="email" type="email" name="email" class="form-control" id="email" placeholder="Your Email" data-rule="minlen:4" data-msg="Please enter an email">
              <div class="validate"></div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-4 form-group mt-3">
              <input v-model="password" type="password" name="password" class="form-control datepicker" id="password" placeholder="Your password" data-rule="minlen:4" data-msg="Please enter your password">
              <div class="validate"></div>
            </div>
          </div>
          <div class="text-center mt-3"><button type="submit">Login</button></div>
        </form>
      </div>
    </section><!-- End Appointment Section -->
</template>

<script>
export default {
    name : 'Login',
        data() {
        return {
            email : '',
            password : ''
        }
    },
    methods : {
        login() {
            this.$store.dispatch('login', {
                email : this.email, password : this.password
                })
        }
    }
}
</script>

<style>

</style>