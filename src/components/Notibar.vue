<template>
  <v-container>
    <v-col class="col-xl-6 offset-xl-3 col-md-8 offset-md-2">
      <v-card elevation="4" height="100px" id="noti-bar" class="rounded-bar">
        <!-- a shortcut to sign and register, this will only be displayed if user did not sign in -->
        <p class="headline text-center" style="line-height:100px" v-if="!loginState()">
          <a class="success--text" href="/#/login">Sign in</a> or
          <a class="success--text" href="/#/register">Register</a>
          to find the best jobs for you
        </p>
        <!-- a notification bar, this will only be displayed if user sign in as a job seeker -->
        <v-row style="height:100px" align="center" v-if="loginState()&&userType()=='jobSeeker'">
          <v-col cols="11">
            <v-row>
              <v-col
                cols="3"             
                class="text-center"
                v-for="item in notificationItems"
                :key="item.title"
              >
                <a :href="item.link">
                  <v-icon large>{{item.icon}}</v-icon>
                  <span
                    :class="item.title=='accecpted application'? 'success--text subtitle-1':'info--text subtitle-1'"
                  >&nbsp;{{item.quantity}}</span>
                  <span class="subtitle-1">&nbsp;{{item.unit}}</span>
                  <br />
                  <span class="subtitle-2 font-weight-light">{{item.text}}</span>
                </a>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="1">
            <a href="/#/dashboard">
              <v-icon class="success--text" large>mdi-arrow-right</v-icon>
            </a>
          </v-col>
          <v-col>
            <p class="headline text-center" style="line-height:50px">
              Go to
              <a class="success--text" href="/#/dashboard">Dashboard</a> to
              manage your profile and applications
            </p>
          </v-col>
        </v-row>
        <!-- recrutier stats dashboard card when logged in-->
        <v-row v-if="loginState()&&userType()=='jobRecruiter'" justify="space-around">
          <v-col
            cols="4"
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
    </v-col>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    notificationItems: [
      {
        title: "avaliable jobs",
        icon: "mdi-briefcase",
        unit: "Jobs",
        text: "avaliable in your area",
        link: "/#/dashboard",
        quantity: 100
      },
      {
        title: "processing application",
        icon: "mdi-account-clock",
        unit: "Application",
        text: "In progress",
        link: "/#/dashboard",
        quantity: 3
      },
      {
        title: "accecpted application",
        icon: "mdi-emoticon-outline",
        unit: "Application",
        text: "accepted",
        link: "/#/dashboard",
        quantity: 2
      },
      {
        title: "rejected application",
        icon: "mdi-emoticon-frown-outline",
        unit: "Application",
        text: "rejected",
        link: "/#/dashboard",
        quantity: 1
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
    ]
  }),
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

#noti-bar {
  position: relative;
  top: -75px;
}
a {
  text-decoration: none;
  color: inherit !important;
}
</style>