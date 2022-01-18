<template>
  <div>
    <!-- import the Banner component and pass the Banner type which will change the layout of the Banner -->
    <Banner :type="loginState()?'search':'loginForm'" /><br />
    <Notibar v-if="loginState()" />
    <br />
    <!-- recruiter stats dashboard card when not logged in-->
    <v-container v-if="!loginState()" class="d-flex flex-row mb-6">
      <v-layout row wrap justify-center>
        <v-flex xs12 md6 lg6>
          <v-card elevation="4" height="100px" class="rounded-bar">
            <v-row v-if="!loginState()" justify="space-around">
              <v-col cols="3" class="text-center" v-for="item in statBarItems" :key="item.title">
                <v-icon large>{{item.icon}}</v-icon>&nbsp;
                <span class="green--text headline">{{item.quantity}}</span>
                <v-card-text>
                  <span>{{item.unit}}</span>
                </v-card-text>
                <span></span>
              </v-col>
            </v-row>
            <!-- recrutier stats dashboard card when logged in-->
            <v-row v-if="loginState()&&userType() === 'jobRecruiter'" justify="space-around">
              <v-col
                cols="3"
                class="text-center"
                v-for="item in statBarItemsRecruiter"
                :key="item.title"
              >
                <v-icon large>{{item.icon}}</v-icon>&nbsp;
                <span class="blue--text headline">{{item.quantity}}</span>
                <div class="d-flex align-center justify-center" style="height:48px">
                  <div>{{item.unit}}</div>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- recruiter main content -->
    <v-container class="my-5">
      <!-- implement jobs tile text-->
      <v-layout row wrap justify-center>
        <v-flex xs12 sm6 md4 lg3>
          <v-card class="card mx-auto" max-width="344" raised>
            <v-card-title class="display-1 text--primary">IT Manager</v-card-title>
            <v-card-text>
              <div>Coles Group</div>
              <p>Melbourne CBD</p>
            </v-card-text>
            <!-- display badges on the implement jobs tile text-->
            <v-row justify="space-around">
              <v-col cols="3" v-for="badge in badges" :key="badge.title">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-img :src="badge.img" aspect-ratio="1" max-height="60px" contain v-on="on" />
                  </template>
                  <span>{{badge.description}}</span>
                </v-tooltip>
              </v-col>
            </v-row>
            <v-card-text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</v-card-text>
            <v-card-actions>
              <v-btn text color="deep-purple accent-4">Learn More</v-btn>
            </v-card-actions>
          </v-card>
          <br />
          <v-progress-linear value="100" color="success" height="6"></v-progress-linear>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3>
          <v-card class="card mx-auto background" max-width="344" elevation="0">
            <v-card-text class="headline">Implement badges to job posts</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <br />
      <!-- trusted by companies like yours tile text-->
      <v-layout row wrap justify-center>
        <v-flex xs12 sm6 md4 lg3>
          <v-card class="card mx-auto background" max-width="344" elevation="0">
            <v-card-text class="headline">Trusted by companies like yours</v-card-text>
          </v-card>
        </v-flex><br /><br /><br /><br /><br /><br /><br />
        <!-- trusted by companies like yours tile -->
        <v-flex xs12 sm6 md4 lg3>
          <v-card class="card mx-auto" max-width="344" raised>
            <v-row justify="space-around">
              <v-col v-for="company in companies" :key="company.title" :cols="company.flex">
                <div class="text-center">
                  <v-avatar>
                    <v-img :src="company.src" aspect-ratio="1">
                      <v-card-title class="align-end fill-height"></v-card-title>
                    </v-img>
                  </v-avatar>
                </div>
              </v-col>
            </v-row>
            <v-card-actions>
              <v-btn text color="deep-purple accent-4">Learn More</v-btn>
            </v-card-actions>
          </v-card>
          <br />
          <v-progress-linear value="100" color="success" height="6"></v-progress-linear>
        </v-flex>
      </v-layout>
      <br />
      <!-- with eldora tile -->
      <v-layout row wrap justify-center>
        <v-flex xs12 sm6 md4 lg3>
          <v-card class="card mx-auto" max-width="344" raised>
            <v-row justify="space-around">
              <v-col>
                <div class="text-center">
                  <v-icon x-large>mdi-email-plus-outline</v-icon>
                  <br />
                  <span class="green--text">Post jobs</span>
                </div>
              </v-col>
              <v-col>
                <div class="text-center">
                  <v-icon x-large>mdi-account-group</v-icon>
                  <br />
                  <span class="green--text">Shortlist appllicants</span>
                </div>
              </v-col>
            </v-row>
            <v-row justify="space-around">
              <v-col>
                <div class="text-center">
                  <v-icon x-large>mdi-star</v-icon>
                  <br />
                  <span class="green--text">Hire the best</span>
                </div>
              </v-col>
              <v-col>
                <div class="text-center">
                  <v-icon x-large>mdi-speedometer</v-icon>
                  <br />
                  <span class="green--text">Grow your network faster</span>
                </div>
              </v-col>
            </v-row>
            <v-card-actions>
              <v-btn text color="deep-purple accent-4">Learn More</v-btn>
            </v-card-actions>
          </v-card>
          <br />
          <v-progress-linear value="100" color="success" height="6"></v-progress-linear>
        </v-flex>
        <!-- with eldora tile text -->
        <v-flex xs12 sm6 md4 lg3>
          <v-card class="card mx-auto background" max-width="344" elevation="0">
            <v-card-text class="headline">With Eldora</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <br />
      <!-- our services tile text -->
      <v-layout row wrap justify-center>
        <v-flex xs12 sm6 md4 lg3>
          <v-card class="card mx-auto background" max-width="344" elevation="0">
            <v-card-text class="headline">Our services</v-card-text>
          </v-card>
        </v-flex>
        <!-- our services tile -->
        <v-flex xs12 sm6 md4 lg3>
          <v-card class="card mx-auto" max-width="344" raised>
            <v-list nav>
              <v-list-item-group v-model="items">
                <v-list-item v-for="(item, i) in items" :key="i">
                  <v-list-item-icon>
                    <v-icon v-text="item.icon" color="success"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text" class="title"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
            <v-card-actions>
              <v-btn text color="deep-purple accent-4">Learn More</v-btn>
            </v-card-actions>
          </v-card>
          <br />
          <v-progress-linear value="100" color="success" height="6"></v-progress-linear>
        </v-flex>
      </v-layout>
    </v-container>
    <News />
  </div>
</template>

<script>
import Banner from "../components/Banner";
import News from "../components/News";
import Notibar from "../components/Notibar";

export default {
  data: () => ({
    companies: [
      {
        title: "Google",
        src: require("../assets/google.png"),
        flex: 6
      },
      {
        title: "Apple",
        src: require("../assets/apple.png"),
        flex: 6
      },
      {
        title: "Deakin Uni",
        src: require("../assets/deakin.png"),
        flex: 6
      },
      {
        title: "Coles",
        src: require("../assets/coles.png"),
        flex: 6
      },
      {
        title: "Facebook",
        src: require("../assets/Facebook.png"),
        flex: 6
      },
      {
        title: "Tesla",
        src: require("../assets/Tesla.png"),
        flex: 6
      }
    ],
    badges: [
      {
        title: "Near Transport",
        img: require("../assets/badges/Near Transport.png"),
        description: "Near Transport"
      },
      {
        title: "Wellness Programs",
        img: require("../assets/badges/Wellness Programs.png"),
        description: "Wellness Programs"
      },
      {
        title: "Travel Assist",
        img: require("../assets/badges/Travel Assist_1.png"),
        description: "Travel Assist"
      },
      {
        title: "Company Car",
        img: require("../assets/badges/Company Car.png"),
        description: "Company Car"
      }
    ],

    statBarItems: [
      {
        title: "resumes uploaded",
        icon: "mdi-file-document-box-multiple-outline",
        unit: "Resumes",
        text: "resumes",
        link: "/#/",
        quantity: 1000
      },
      {
        title: "jobs posted",
        icon: "mdi-briefcase",
        unit: "Jobs Posted",
        text: "Jobs Posted",
        link: "/#/",
        quantity: 1000
      },
      {
        title: "recruiters",
        icon: "mdi-account-group",
        unit: "Recruiters",
        text: "recruiters",
        link: "/#/",
        quantity: 1000
      }
    ],
    statBarItemsRecruiter: [
      {
        title: "jobs open",
        icon: "mdi-file-document-box-multiple-outline",
        unit: "Jobs Open",
        text: "open",
        link: "/#/",
        quantity: 10
      },
      {
        title: "application recieved",
        icon: "mdi-briefcase",
        unit: "Application Received",
        text: "received",
        link: "/#/",
        quantity: 1000
      },
      {
        title: "unread applications",
        icon: "mdi-email",
        unit: "Unread Applications",
        text: "unread",
        link: "/#/",
        quantity: 1000
      }
    ],
    items: [
      { text: "Top jobs service", icon: "mdi-circle" },
      { text: "Advertising service", icon: "mdi-circle" },
      { text: "Hiring Strategies", icon: "mdi-circle" },
      { text: "Resume templates", icon: "mdi-circle" }
    ]
  }),

  components: { Banner, News, Notibar },
  methods: {
    loginState() {
      return this.$store.state.loginState;
    },
    userType() {
      return this.$store.state.userType;
    }
  }

  
};
</script>

<style scoped>
.rounded-bar {
  border-radius: 20px !important;
}
.card {
  padding: 0px 15px 0px 15px;
}

#stat-bar {
  position: relative;
  top: -75px;
}
</style>
