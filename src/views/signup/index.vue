<template>

  <div style="margin: 100px auto; width: 500px">


    <div class="form-group form-floating-label" :class="{'has-error': $v.user.firstName.$error}">
      <input
          :disabled="loginButton"
          id="firstName"
          v-model="$v.user.firstName.$model"
          type="text" class="form-control input-border-bottom" required>
      <label for="firstName" class="placeholder">firstName</label>
    </div>

    <br>

    <div class="form-group form-floating-label" :class="{'has-error': $v.user.lastName.$error}">
      <input
          :disabled="loginButton"
          id="lastName"
          v-model="$v.user.lastName.$model"
          type="text" class="form-control input-border-bottom" required>
      <label for="lastName" class="placeholder">lastName</label>
    </div>
    <br>

    <div class="form-group form-floating-label" :class="{'has-error': $v.user.email.$error}">
      <input
          :disabled="loginButton"
          id="email"
          v-model="$v.user.email.$model"
          type="text" class="form-control input-border-bottom" required>
      <label for="email" class="placeholder">email</label>
    </div>
    <br>

    <div class="form-group form-floating-label" :class="{'has-error': $v.user.userName.$error}">
      <input
          :disabled="loginButton"
          id="userName"
          v-model="$v.user.userName.$model"
          type="text" class="form-control input-border-bottom" required>
      <label for="userName" class="placeholder">Kullanıcı Adı</label>
    </div>
    <br>

    <div class="form-group form-floating-label" :class="{'has-error': $v.user.password.$error}">
      <input
          :disabled="loginButton"
          id="password"
          v-model="$v.user.password.$model"
          type="password" class="form-control input-border-bottom" required>
      <label for="password" class="placeholder">password</label>
    </div>
    <input type="hidden" id="recaptchaId" value="">

    <b-button
        class="login"
        variant="primary"
        @click="login"
        :disabled="$v.user.$invalid || loginButton"
    >{{ button }}
    </b-button>
  </div>


</template>
<script>

import {required} from "vuelidate/lib/validators";
import {router} from "@/router";


export default {
  data() {
    return {
      user: {
        firstName: null,
        lastName: null,
        email: null,
        userName: null,
        password: null
      },
      button: 'Sign Up',
      loginButton: false,
    }
  },
  methods: {
    login() {
      this.button = 'Yükleniyor...'
      this.loginButton = true

      let signUp = {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: this.user.email,
        userName: this.user.userName,
        password: this.user.password,
      }

      this.$store.dispatch("saveUser", signUp)
          .then(response => {
            if (response) {

            } else {

            }
          })
    },
  },
  validations: {
    user: {
      firstName: {required},
      lastName: {required},
      email: {required},
      userName: {required},
      password: {required}
    }
  }
}
</script>
<style scoped>
.login {
  margin-top: 25px;
  position: relative;
  left: 200px;
}

</style>
