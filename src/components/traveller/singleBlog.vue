<template>
  <div>
    <!-- Start All Pages -->
    <div class="all-page-title page-breadcrumb">
      <div class="container text-center">
        <div class="row">
          <div class="col-lg-12">
            <h1>Blog</h1>
          </div>
        </div>
      </div>
    </div>
    <!-- End All Pages -->

    <!-- Start blog details -->
    <div class="blog-box">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="heading-title text-center">
              <h2>Blog</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-8 col-lg-8 col-12">
            <div class="blog-inner-details-page">
              <div class="blog-inner-box">
                <div class="side-blog-img">
                  <img class="img-fluid" :src="travel.picture" alt="">
                </div>
                <div class="inner-blog-detail details-page">
                  <h3>{{ travel.name }}</h3>


                  <ul style="text-align: center" v-if="getUser">
                    <li>
                      <b-button variant="outline-primary" :disabled="likeButton" @click="like()">
                        Beğen
                      </b-button>
                    </li>
                  </ul>


                  <blockquote>
                    <p>{{ travel.description }}</p>
                  </blockquote>

                </div>
              </div>


              <div class="blog-comment-box" v-if="getComment.length">
                <h3>Comments</h3>


                <div class="comment-item" v-for="comment in getComment">
                  <div class="comment-item-left">
                    <img src="./images/avt-img.jpg" alt="">
                  </div>
                  <div class="comment-item-right">
                    <div class="pull-left">
                      <a href="#">{{ comment.user.firstName + " " + comment.user.lastName }}</a>
                    </div>
                    <div class="pull-right">
                      <i class="fa fa-clock-o" aria-hidden="true"></i>Time : <span>{{ comment.commentDate }}</span>
                    </div>
                    <div class="des-l">
                      <p>{{ comment.comment }}</p>
                    </div>

                  </div>
                </div>


              </div>
              <b-alert show variant="secondary" v-else-if="getUser">Hiç Yorum yok Hadi yorum Yap!</b-alert>


              <div class="comment-respond-box" v-if="getUser">
                <h3>Leave your comment </h3>
                <div class="comment-respond-form">
                  <div id="commentrespondform" class="comment-form-respond row">
                    <div class="col-lg-12 col-md-6 col-sm-12">
                      <div class="form-group">
                        <textarea v-model="comment" :disabled="commentButton" class="form-control" id="textarea_com"
                                  placeholder="Your Message"
                                  rows="2"></textarea>
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12" style="text-align: center">
                      <button class="btn btn-submit" :disabled="!comment" @click="addComment">Submit comment</button>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>

          <div class="col-xl-4 col-lg-4 col-md-6 col-sm-8 col-12 blog-sidebar">
            <div class="right-side-blog">


              <h3>Categories</h3>
              <div class="blog-categories">
                <ul>
                  <li v-for="category in allCategory">
                    <span>{{ category.name }}</span>
                  </li>
                </ul>
              </div>


              <h3>Recent Post</h3>
              <div class="post-box-blog">
                <div class="recent-post-box">


                  <div class="recent-box-blog" v-for="allComment in getAllComment">
                    <div class="recent-img">
                      <img class="img-fluid" :src="allComment.travel.picture" width="90"  alt="">
                    </div>
                    <div class="recent-info">
                      <ul>
                        <li><i class="zmdi zmdi-account"></i>Posted By :
                          <span>{{ allComment.user.firstName + " " + allComment.user.lastName }}</span></li>
                        <li style="margin-left: 5px">|</li>
                        <li style="margin-left: 5px"><i class="zmdi zmdi-time"></i>Time :
                          <span>{{ allComment.commentDate }}</span></li>
                      </ul>
                      <h4>{{ allComment.comment }}</h4>
                    </div>
                  </div>


                </div>
              </div>


            </div>
          </div>

        </div>
      </div>
    </div>
    <!-- End details -->
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  data() {
    return {
      likeButton: false,
      commentButton: false,
      id: this.$route.params.id,
      travel: {
        name: null,
        description: null,
        picture: null
      },
      comment: null
    }
  },
  methods: {
    addComment() {
      let comment = {
        comment: {
          travel: this.id,
          user: this.getUser.id,
          comment: this.comment,
          commentDate: new Date().toLocaleString(),
        },
        userInfo: {
          id: this.getUser.id,
          firstName: this.getUser.firstName,
          lastName: this.getUser.lastName,
        }
      }
      this.$store.dispatch('saveComment', comment)
          .then(r => {
            this.commentButton = true
            this.comment = null
          })
    },
    like() {
      let like = {
        travelId: this.id,
        userId: this.getUser.id
      }
      this.$store.dispatch('saveLike', like)
          .then(r => {
            this.likeButton = true
          })
    },
    allReadyLike() {
      let ct = 0
      if (this.getLike.length > 0) {
        this.getLike.forEach(element => {
          if (this.id == element.travelId) {
            ct++
          }
        })
        if (ct > 0) {
          this.likeButton = true
        } else {
          this.likeButton = false
        }
      } else {
        this.likeButton = false
      }
    },
    allReadyComment() {
      let ct = 0
      if (this.getComment.length > 0) {
        this.getComment.forEach(element => {
          if (this.getUser.id == element.user.id) {
            ct++
          }
        })
        if (ct > 0) {
          this.commentButton = true
        } else {
          this.commentButton = false
        }
      } else {
        this.commentButton = false
      }
    }
  },
  computed: {
    ...mapGetters(['allCategory']),
    ...mapGetters(['getUser']),
    ...mapGetters(['getLike']),
    ...mapGetters(['getComment']),
    ...mapGetters(['getAllComment']),
  },
  created() {
    this.$store.dispatch('findTraveller', this.id)
        .then(response => {
          if (response != undefined) {
            this.travel = {
              name: response[0].name,
              description: response[0].description,
              picture: response[0].picture
            }
          } else {
            this.$router.push('/traveller')
          }

        })
    if (this.getUser) {
      this.$store.dispatch('findLike', this.getUser.id)
          .then(response => {
            this.allReadyLike();
          })
    }
    this.$store.dispatch('findComment', this.id)
        .then(response => {
          this.allReadyComment();
        })

    this.$store.dispatch('findAllComment')
        .then(response => {
        })

  }
}
</script>

<style scoped>

</style>