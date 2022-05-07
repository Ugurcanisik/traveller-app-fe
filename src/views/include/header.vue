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
                to="/blog"
                tag="li"
                class="nav-item">
              <a class="nav-link">
                <p>Blog</p>
              </a>
            </router-link>

            <router-link
                active-class="active"
                to="/single-blog"
                tag="li"
                class="nav-item">
              <a class="nav-link">
                <p>Single Blog</p>
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

            <router-link
                active-class="active"
                to="/login"
                tag="li"
                class="nav-item">
              <a class="nav-link">
                <p>Login</p>
              </a>
            </router-link>


          </ul>
        </div>
      </div>
    </nav>
  </header>
  <!-- End header -->
</template>

<script>
export default {}
</script>

<style scoped>

</style>