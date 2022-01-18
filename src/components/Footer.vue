<template>
  <v-footer color="primary">
    <!-- footer menu -->
    <v-card flat tile class="flex" color="primary">
      <v-card-text class="textresp">
        <v-row class="col-10 offset-1">
          <v-list-item v-for="item in menuitems" :key="item.title" class="col-4 text-center pa-0">
            <v-list-item-content>
              <v-list-item-title class="subtitle font-weight-medium background--text resptext"
                v-text="item.title.toUpperCase()" style="line-height:50px" />
              <hr />
              <v-list-item-subtitle v-for="item in item.links" :key="item.title"
                class="background--text font-weight-light resptext" style="line-height:40px">
                <a :href="item.link">{{item.title}}</a>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-row>
      </v-card-text>
      <!-- social media -->
      <v-card flat tile color="primary" class="text-center">
        <v-card-text class="subtitle font-weight-medium background--text">
          <span style="vertical-align:bottom">Stay connected</span>&nbsp;&nbsp;&nbsp;&nbsp;
          <a :href="item.link" v-for="item in socialMedia" :key="item.title">
            <v-icon color="background">{{item.icon}}</v-icon>&nbsp;&nbsp;&nbsp;&nbsp;
          </a>
        </v-card-text>
      </v-card>
      <!-- copyright -->
      <v-card flat tile color="primary" class="text-center background--text">
        <span>
          Eldora Studios&nbsp;&nbsp;
          <v-icon color="background">mdi-copyright</v-icon>
        </span>&nbsp;
        <span>{{ new Date().getFullYear() }}</span>
      </v-card>
    </v-card>
  </v-footer>
</template>

<script>
    export default {
        data: () => ({
            socialMedia: [{
                title: "facebook",
                icon: "mdi-facebook",
                link: "/#/"
            }, {
                title: "twitter",
                icon: "mdi-twitter",
                link: "/#/"
            }, {
                title: "linkedin",
                icon: "mdi-linkedin",
                link: "/#/"
            }],
            menuitems: [{
                title: "Job Seekers",
                links: [{
                    title: "Job Search",
                    link: "/#/"
                }, {
                    title: "Dashboard",
                    link: "/#/dashboard"
                }, {
                    title: "Career Advice",
                    link: "/#/recruiter"
                }, {
                    title: "Resume Tips",
                    link: "/#/resume-tips"
                }]
            }, {
                title: "Job Recruiters",
                links: [{
                    title: "Dashboard",
                    link: "/#/dashboard"
                }, {
                    title: "Post a Job",
                    link: "/#/post-job"
                }, {
                    title: "Customer Service",
                    link: "/#/customer-service"
                }, {
                    title: "Candidate Search",
                    link: "/#/candidate-search"
                }]
            }, {
                title: "Contact Us",
                links: [{
                    title: "Location",
                    link: "/#/locations"
                }, {
                    title: "About Us",
                    link: "/#/aboutus"
                }, {
                    title: "Privacy",
                    link: "/#/privacy"
                }, {
                    title: "Terms and Conditions",
                    link: "/#/terms-conditions"
                }]
            }]
        })
    };
</script>
<style scoped>
    a {
        text-decoration: none;
        color: inherit !important;
    }
    
    @media only screen and (max-width: 600px) {
        .resptext {
            font-size: 2.3vw !important;
        }
    }
</style>
