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
            caption="First slide"
            text="Nulla vitae elit libero, a pharetra augue mollis interdum."
            img-src="https://picsum.photos/1024/480/?image=52"


        ></b-carousel-slide>
        <b-carousel-slide
            caption="First slide"
            text="Nulla vitae elit libero, a pharetra augue mollis interdum."
            img-src="https://picsum.photos/1024/480/?image=52"
        ></b-carousel-slide>
        <b-carousel-slide
            caption="First slide"
            text="Nulla vitae elit libero, a pharetra augue mollis interdum."
            img-src="https://picsum.photos/1024/480/?image=52"
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
    <!-- Start QT -->
    <div class="qt-box qt-background">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <p class="lead ">
              " If you're not the one cooking, stay out of the way and compliment the chef. "
            </p>
            <span class="lead">Michael Strahan</span>
          </div>
        </div>
      </div>
    </div>
    <!-- End QT -->

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
            <div class="col-sm-12 col-md-4 col-lg-4">
              <a class="lightbox" href="./images/gallery-img-01.jpg">
                <img class="img-fluid" src="./images/gallery-img-01.jpg" alt="Gallery ./images">
              </a>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4">
              <a class="lightbox" href="./images/gallery-img-02.jpg">
                <img class="img-fluid" src="./images/gallery-img-02.jpg" alt="Gallery ./images">
              </a>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4">
              <a class="lightbox" href="./images/gallery-img-03.jpg">
                <img class="img-fluid" src="./images/gallery-img-03.jpg" alt="Gallery ./images">
              </a>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-4">
              <a class="lightbox" href="./images/gallery-img-04.jpg">
                <img class="img-fluid" src="./images/gallery-img-04.jpg" alt="Gallery ./images">
              </a>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4">
              <a class="lightbox" href="./images/gallery-img-05.jpg">
                <img class="img-fluid" src="./images/gallery-img-05.jpg" alt="Gallery ./images">
              </a>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4">
              <a class="lightbox" href="./images/gallery-img-06.jpg">
                <img class="img-fluid" src="./images/gallery-img-06.jpg" alt="Gallery ./images">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Gallery -->

    <!-- Start Customer Reviews -->
    <div class="customer-reviews-box">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="heading-title text-center">
              <h2>Customer Reviews</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8 mr-auto ml-auto text-center">
            <div id="reviews" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner mt-4">
                <div class="carousel-item text-center active">
                  <div class="img-box p-1 border rounded-circle m-auto">
                    <img class="d-block w-100 rounded-circle" src="./images/quotations-button.png" alt="">
                  </div>
                  <h5 class="mt-4 mb-0"><strong class="text-warning text-uppercase">Paul Mitchel</strong></h5>
                  <h6 class="text-dark m-0">Web Developer</h6>
                  <p class="m-0 pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius
                    quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac
                    bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
                </div>
                <div class="carousel-item text-center">
                  <div class="img-box p-1 border rounded-circle m-auto">
                    <img class="d-block w-100 rounded-circle" src="./images/quotations-button.png" alt="">
                  </div>
                  <h5 class="mt-4 mb-0"><strong class="text-warning text-uppercase">Steve Fonsi</strong></h5>
                  <h6 class="text-dark m-0">Web Designer</h6>
                  <p class="m-0 pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius
                    quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac
                    bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
                </div>
                <div class="carousel-item text-center">
                  <div class="img-box p-1 border rounded-circle m-auto">
                    <img class="d-block w-100 rounded-circle" src="./images/quotations-button.png" alt="">
                  </div>
                  <h5 class="mt-4 mb-0"><strong class="text-warning text-uppercase">Daniel vebar</strong></h5>
                  <h6 class="text-dark m-0">Seo Analyst</h6>
                  <p class="m-0 pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius
                    quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac
                    bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
                </div>
              </div>
              <a class="carousel-control-prev" href="#reviews" role="button" data-slide="prev">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#reviews" role="button" data-slide="next">
                <i class="fa fa-angle-right" aria-hidden="true"></i>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Customer Reviews -->


  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    }
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