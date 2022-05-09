<template>
  <!-- Start header -->
  <header class="top-navbar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="index.html">
          <img src="images/logo.png" alt=""/>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars-rs-food"
                aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbars-rs-food">
          <ul class="navbar-nav ml-auto">


            <router-link
                active-class="active"
                to="/dashboard"
                tag="li"
                class="nav-item">
              <a class="nav-link">
                <p>Home</p>
              </a>
            </router-link>

            <router-link
                active-class="active"
                to="/traveller"
                tag="li"
                class="nav-item">
              <a class="nav-link">
                <p>Traveller</p>
              </a>
            </router-link>


            <router-link
                active-class="active"
                to="/about"
                tag="li"
                class="nav-item">
              <a class="nav-link">
                <p>About</p>
              </a>
            </router-link>


            <router-link
                active-class="active"
                to="/community"
                tag="li"
                class="nav-item">
              <a class="nav-link">
                <p>Community</p>
              </a>
            </router-link>

            <router-link
                active-class="active"
                to="/contact"
                tag="li"
                class="nav-item">
              <a class="nav-link">
                <p>Contact</p>
              </a>
            </router-link>


            <li
                class="nav-item dropdown"
                v-if="!getUser"
            >
              <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Login/Sign Up</a>
              <div class="dropdown-menu" aria-labelledby="dropdown-a">

                <router-link
                    style="width: 140px;height: 50px; text-align: center"
                    to="/login"
                    tag="a"
                    class="dropdown-item"
                >
                  <p>Login</p>
                </router-link>

                <router-link
                    style="width: 140px;height: 50px; text-align: center"
                    to="/signup"
                    tag="a"
                    class="dropdown-item"
                >
                  <p>Sign Up</p>
                </router-link>

              </div>
            </li>

            <li
                v-else
                class="nav-item dropdown"
            >
              <a class="nav-link dropdown-toggle" href="#"
                 data-toggle="dropdown">{{ getUser.firstName + " " + getUser.lastName }}</a>
              <div class="dropdown-menu" aria-labelledby="dropdown-a">
                <!--    style="width: 140px;height: 50px; text-align: center"
                <a class="dropdown-item" href="reservation.html">Reservation</a>
                -->
                <a class="dropdown-item" href="stuff.html">Account Settings</a>
                <a class="dropdown-item" @click="logout">Logout</a>
              </div>
            </li>


          </ul>
        </div>
      </div>
    </nav>
  </header>
  <!-- End header -->
</template>

<script>
import {mapGetters} from "vuex";

export default {
  data() {
    return {
      checkUser: false
    }
  },
  computed: {
    ...mapGetters(['getUser']),
    ...mapGetters(['isAuthenticated'])
  },
  watch: {},
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style scoped>

</style>