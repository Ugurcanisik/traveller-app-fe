<template>
  <div>
    <!-- Start All Pages -->
    <div class="all-page-title page-breadcrumb">
      <div class="container text-center">
        <div class="row">
          <div class="col-lg-12">
            <h1>Special Menu</h1>
          </div>
        </div>
      </div>
    </div>
    <!-- End All Pages -->

    <!-- Start Menu -->
    <div class="menu-box">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="heading-title text-center">
              <h2>Special Menu</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </div>
          </div>
        </div>

        <div class="row inner-menu-box">


          <div class="col-3">
            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">

              <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab"
                 aria-controls="v-pills-home" aria-selected="true">All</a>


              <a
                  v-for="category in allCategory"
                  :key="category.name"
                  :id="'v-pills-'+category.name+'-tab'"
                  :href="'#v-pills-'+category.name"
                  :aria-controls="'v-pills-'+category.name"
                  @click="listTravel(category.id)"

                  data-toggle="pill"
                  class="nav-link"
                  aria-selected="false"
                  role="tab"
              >{{ category.name }}
              </a>


            </div>
          </div>

          <div class="col-9">
            <div class="tab-content" id="v-pills-tabContent">

              <!-- all category list start -->
              <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel"
                   aria-labelledby="v-pills-home-tab"
              >

                <div class="row">

                  <router-link
                      v-for="travel in allTravel"
                      class="col-lg-4 col-md-6 special-grid home"
                      tag="div"
                      :to="'traveller/'+travel.id"
                  >

                    <div class="gallery-single fix">
                      <img src="./images/img-01.jpg" class="img-fluid" alt="Image">
                      <div class="why-text">
                        <h4>{{ travel.name }}</h4>
                        <p>{{ travel.description }}</p>
                        <h5> $7.79</h5>
                      </div>
                    </div>


                  </router-link>


                </div>

              </div>
              <!-- all category list end -->


              <div
                  v-for="category in allCategory"
                  :key="category.name"
                  role="tabpanel"
                  class="tab-pane fade"
                  :id="'v-pills-'+category.name"
                  :aria-labelledby="'v-pills-'+category.name+'-tab'"
              >

                <div class="row">


                  <router-link
                      v-for="travel in traveller"
                      :class="'col-lg-4 col-md-6 special-grid '+ category.name"
                      tag="div"
                      :to="'traveller/'+travel.id"
                  >

                    <div class="gallery-single fix">
                      <img src="./images/img-01.jpg" class="img-fluid" alt="Image">
                      <div class="why-text">
                        <h4>{{ travel.name }}</h4>
                        <p>{{ travel.description }}</p>
                        <h5> $7.79</h5>
                      </div>
                    </div>

                  </router-link>


                </div>

              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Menu -->

  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  data() {
    return {
      traveller: []
    }
  },
  methods: {
    listTravel(payload) {
      this.traveller = []
      this.allTravel.filter(element => {
            if (element.category.id == payload) {
              this.traveller.push(element)
            }
          }
      )
    },
    travelDetails(payload) {
      this.$router.replace('/traveller/' + payload)
    }
  },
  computed: {
    ...mapGetters(['allCategory']),
    ...mapGetters(['allTravel'])
  }
}
</script>

<style scoped>

</style>