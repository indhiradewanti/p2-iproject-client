<template>
      <!-- ======= Appointment Section ======= -->
    <section id="appointment" class="appointment section-bg">
      <div class="container mt-5">
        <br><br><br><br><br><br>
        <div class="section-title">
          <h2>Register</h2>
        </div>

        <form @submit.prevent="register" class="php-email-form">
          <div class="row justify-content-center">
            <div class="col-md-4 form-group">
              <input v-model="firstName" type="text" name="firstName" class="form-control" id="firstName" placeholder="Your First Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars">
              <div class="validate"></div>
            </div>
            <div class="col-md-4 form-group">
              <input v-model="lastName" type="text" name="lastName" class="form-control" id="lastName" placeholder="Your Last Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars">
              <div class="validate"></div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-6 form-group mt-3">
              <input v-model="email" type="email" name="email" class="form-control datepicker" id="email" placeholder="Your Email" data-rule="minlen:4" data-msg="Please enter an email type">
              <div class="validate"></div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-6 form-group mt-3">
              <input v-model="password" type="password" name="password" class="form-control datepicker" id="password" placeholder="Your Password" data-rule="minlen:4" data-msg="Please enter at least 4 chars">
              <div class="validate"></div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-6 form-group mt-3">
              <input v-model="phoneNumber" type="text" name="phoneNumber" class="form-control datepicker" id="phoneNumber" placeholder="Your Phone Number" data-rule="minlen:4" data-msg="Please enter your Phone Number">
              <div class="validate"></div>
            </div>
          </div>

          <div class="text-center mt-3"><button type="submit">Register</button></div>
        </form>
      </div>
    </section><!-- End Appointment Section -->
</template>

<script>
export default {
  name : 'Register',
  data() {
    return {
      firstName : '',
      lastName : '',
      email : '',
      password : '',
      phoneNumber : '',
    }
  },
  methods : {
    register() {
        this.$store.dispatch('register', {
          firstName : this.firstName,
          lastName : this.lastName,
          email : this.email,
          password : this.password,
          phoneNumber : this.phoneNumber
      })
    }
  }
}
</script>

<style>

</style>