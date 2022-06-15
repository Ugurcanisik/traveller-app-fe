<template>
  <div>
    <div>
      <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <b-carousel-slide
            v-for="trav in allTravel"
            :img-src="trav.picture"
        ></b-carousel-slide>



      </b-carousel>

    </div>

    <!--

    <div id="slides" class="cover-slides">
      <ul class="slides-container">
        <li class="text-left">
          <img src="./images/slider-01.jpg" alt="">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h1 class="m-b-20"><strong>Welcome To <br> Live Dinner Restaurant</strong></h1>
                <p class="m-b-40">See how your users experience your website in realtime or view  <br>
                  trends to see any changes in performance over time.</p>
                <p><a class="btn btn-lg btn-circle btn-outline-new-white" href="#">Reservation</a></p>
              </div>
            </div>
          </div>
        </li>
        <li class="text-left">
          <img src="./images/slider-02.jpg" alt="">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h1 class="m-b-20"><strong>Welcome To <br> Live Dinner Restaurant</strong></h1>
                <p class="m-b-40">See how your users experience your website in realtime or view  <br>
                  trends to see any changes in performance over time.</p>
                <p><a class="btn btn-lg btn-circle btn-outline-new-white" href="#">Reservation</a></p>
              </div>
            </div>
          </div>
        </li>
        <li class="text-left">
          <img src="./images/slider-03.jpg" alt="">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h1 class="m-b-20"><strong>Welcome To <br> Yamifood Restaurant</strong></h1>
                <p class="m-b-40">See how your users experience your website in realtime or view  <br>
                  trends to see any changes in performance over time.</p>
                <p><a class="btn btn-lg btn-circle btn-outline-new-white" href="#">Reservation</a></p>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="slides-navigation">
        <a href="#" class="next"><i class="fa fa-angle-right" aria-hidden="true"></i></a>
        <a href="#" class="prev"><i class="fa fa-angle-left" aria-hidden="true"></i></a>
      </div>
    </div>

    -->


    <!-- Start Gallery -->
    <div class="gallery-box">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="heading-title text-center">
              <h2>Gallery</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </div>
          </div>
        </div>
        <div class="tz-gallery">
          <div class="row">
            <div class="col-sm-12 col-md-4 col-lg-4"  v-for="travel in allTravel">

              <router-link
                  :to="'traveller/'+travel.id"
                  tag="a"
                  class="lightbox"
              >
                <img class="img-fluid" :src="travel.picture" alt="Gallery ./images">
              </router-link>

            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Gallery -->



  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  computed:{
    ...mapGetters(['allTravel'])
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>

<style scoped>

</style>