<template>
  <div>
    <Header></Header>

    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>


    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../include/header'
import Footer from '../include/footer'

export default {
  components: {
    Header,
    Footer,
  },
  methods: {
    initApps() {
      this.$store.dispatch('initApp')
    }
  },
  created() {
    this.initApps()
  }
}
</script>

<style scoped>

</style>