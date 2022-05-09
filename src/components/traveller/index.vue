<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters(['getUser']),
  },
  created() {

  }
}
</script>

<style scoped>

</style>