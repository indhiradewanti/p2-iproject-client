<template>
  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">

      <h1 class="logo me-auto"><router-link to="/" href=#>Yo Doc Health</router-link></h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><router-link to="/" class="nav-link scrollto active mt-4" href="#hero">Home</router-link></li>
          <li><router-link to="/doctor" class="nav-link scrollto mt-4" href="#doctors">Doctors</router-link></li>
          <!-- <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a> -->
            <!-- <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li> -->
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

      <router-link v-if="isLogin === false" to="/login" href=# class="appointment-btn scrollto"><span class="d-none d-md-inline">Login</span></router-link>
      <router-link v-if="isLogin === false" to="/register" href=# class="appointment-btn scrollto"><span class="d-none d-md-inline">Register</span></router-link>
      <a v-if="isLogin === true" @click.prevent="isLogout" href=# class="appointment-btn scrollto"><span class="d-none d-md-inline">Logout</span></a>

    </div>
  </header><!-- End Header -->
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
  name : 'Navbar',
    methods : {
      ...mapActions(['logout']),
      isLogout() {
        this.logout()
      }
  },
  computed : {
      ...mapState(['isLogin', 'username'])
  },
  created() {
    const access_token = localStorage.access_token
    if (!access_token) {
      this.$store.commit('SET_ISLOGIN', false)
    } else {
      this.$store.commit('SET_ISLOGIN', true)
    }
  }
}
</script>

<style>

</style>