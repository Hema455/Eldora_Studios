<template>
  <div>
    <Banner type="search" />
    <v-container>
      <v-row class="col-xl-6 offset-xl-3 col-md-8 offset-md-2 pb-0">
        <v-col class="pb-0">
          Showing {{jobs.length}}
          <b>"{{this.$route.query.keywords}}"</b>
          Jobs
        </v-col>
      </v-row>
      <!-- use vuetify data iterator components to display search results, 
      this component can sort and paginate the results-->
      <v-data-iterator
        :items="jobs"
        :items-per-page.sync="pagination.itemsPerPage"
        :page.sync="pagination.page"
        sort-by="date"
        sortDesc
        hide-default-footer
      >
        <template v-slot:default="props">
          <v-row class="col-xl-6 offset-xl-3 col-md-8 offset-md-2">
            <v-col cols="12" v-for="(item,i) in props.items" :key="i">
              <v-card class="mx-auto" href="/#/jobdescription">
                <v-row>
                  <v-col class="col-9 pb-0">
                    <v-card-title><a href="/#/jobdescription">{{item.title}}</a></v-card-title>
                    <v-card-title class="subtitle-1 py-0">{{item.company}}</v-card-title>
                    <v-card-title class="subtitle-1 py-0">{{item.location}}</v-card-title>
                  </v-col>
                  <v-col class="col-3 my-4 py-0">
                    <v-img :src="item.logo" max-height="100px" contain />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col v-for="(badge,i) in item.badges" :key="i" cols="1" class="py-0">
                    <v-card-text class="pa-0 mx-4">
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                          <v-img :src="badge.img" max-height="60px" contain v-on="on" />
                        </template>
                        <span>{{badge.description}}</span>
                      </v-tooltip>
                    </v-card-text>
                  </v-col>
                </v-row>
                <v-card-text>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </v-card-text>
                <v-row justify="space-between">
                  <v-col cols="3">
                    <v-card-title class="subtitle-2">Posted {{getTimeDiff(item.date)}}</v-card-title>
                  </v-col>
                  <v-col cols="3" class="pt-0">
                    <v-card-text class="title pb-0 text-right">
                      <v-chip
                        class="ma-2"
                        :color="item.fav?'success':'info'"
                        text-color="white"
                        @click="!loginState()?dialog=true:item.fav=!item.fav"
                      >
                        Save Job
                        <v-icon right>{{item.fav?"mdi-star":"mdi-star-outline"}}</v-icon>
                      </v-chip>
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
          <!-- a pop up dialog to login -->
          <v-dialog v-model="dialog" max-width="500">
            <v-card>
              <v-card-title class="headline">Not Signed in?</v-card-title>

              <v-card-text class="title">
                <a class="success--text" href="/#/login">Sign in</a> or
                <a class="success--text" href="/#/register">Register</a> to save your jobs
              </v-card-text>

              <v-card-actions>
                <div class="flex-grow-1"></div>

                <v-btn color="success" text @click="dialog = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
      </v-data-iterator>
      <!-- the pagination footer will only be shown if the page is more than 1  -->
      <v-pagination
        v-if="numberOfPages>1"
        v-model="pagination.page"
        :length="numberOfPages"
        @input="$vuetify.goTo(0)"
      />
    </v-container>
  </div>
</template>

<script>
import Banner from "../components/Banner";

export default {
  components: { Banner },
  data: () => ({
    pagination: {
      page: 1,
      itemsPerPage: 5,
      visible: 7
    },
    dialog: false,
    //test data
    testData: {
      id: "1",
      title: "Job Title",
      company: "Company Name",
      location: "Location",
      logo: require("../assets/apple.png"),
      badges: [
        {
          img: require("../assets/badges/Near Transport.png"),
          description: "Near Transport"
        },
        {
          img: require("../assets/badges/Morning Shift.png"),
          description: "Morning Shift"
        },
        {
          img: require("../assets/badges/Phased Retirement.png"),
          description: "CPhased Retirement"
        },
        {
          img: require("../assets/badges/Travel Assist_1.png"),
          description: "Travel Assist"
        }
      ],
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      date: "2019-09-15T05:55:01.629Z",
      fav: false
    }
  }),
  mounted() {
    /* send the search request to backend, the query data can be obtain from 
    the route query: $route.query.keywords,$route.query.industry,$route.query.location
    */
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.jobs.length / this.pagination.itemsPerPage);
    },
    //generate the test data for jobs list
    jobs() {
      var arr = new Array(33);
      var i = arr.length;
      while (i--) {
        arr[i] = JSON.parse(JSON.stringify(this.testData));
      }
      return arr;
    }
  },
  methods: {
    // calculate how long ago the job was posted
    getTimeDiff(date) {
      const time = Math.floor(
        (new Date().getTime() - new Date(date).getTime()) / 1000 / 60
      );
      if (time >= 2880) return Math.floor(time / 24 / 60) + " Days ago";
      else if (time < 2880 && time >= 120)
        return Math.floor(time / 60) + " Hours ago";
      else if (time < 120 && time > 60)
        return "1 Hour " + (time - 60) + " Min ago";
      else if (time == 60) return "1 Hour ago";
      else return time + " Min ago";
    },
    loginState() {
      return this.$store.state.loginState;
    }
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: inherit !important;
}
</style>