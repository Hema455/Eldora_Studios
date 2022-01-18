<template>
  <v-card flat>
    <!-- this banner has different views for job seeker and employer based on the passed props "type" -->
    <v-img height="650px" src="../assets/Home-background.jpg">
      <!-- if the "type" is job seeker, display the search bar and a notification bar -->
      <v-container v-if="type==='search'">
        <!-- the title -->
        <v-col class="col-xl-6 offset-xl-3 col-md-8 offset-md-2">
          <!-- the search bar -->
          <h1 class="white--text text-center display-1" id="banner-title">Advanced Search</h1>
          <v-card elevation="3" id="banner-search-bar">
            <SearchBar />
          </v-card>
        </v-col>
      </v-container>
          <!-- recruiter banner -->
      <v-container v-if="type==='loginForm'">
        <!-- the title -->
        <h1 class="white--text text-center display-1" id="banner-title">We can help you find the right candidates.</h1>
        <v-col class="col-xl-6 offset-xl-3 col-md-8 offset-md-2">
          <!-- recruiter sign-in register card on banner-->
          <v-card elevation="4" id="recruiter-sign-register">
           <RecruiterSignIn />        
          </v-card>
        </v-col>
      </v-container>
      <v-container v-if="loginState()&&userType()=='jobRecruiter'">
        <!-- the title -->
         <h1 class="white--text text-center display-1">Search for candidates</h1>
        <v-col class="col-xl-6 offset-xl-3 col-md-8 offset-md-2">
          <!-- recruiter sign-in register card on banner-->
          <v-card elevation="4" id="banner-search-bar">
           <SearchBar />        
          </v-card>
        </v-col>
      </v-container>
    </v-img>
  </v-card>
</template>

<script>
import SearchBar from "./SearchBar";
import RecruiterSignIn from "./RecruiterSignIn"
export default {
  components:{SearchBar, RecruiterSignIn},
    methods: {
    loginState() {
      return this.$store.state.loginState;
    },
    userType() {
      return this.$store.state.userType;
    }
  },
  data: () => ({}),
  props: ["type"]
};
</script>


<style scoped>

#banner-title {
  position: relative;
 
}
#banner-search-bar {
  position: relative;
  top: 100px;
  border-radius: 10px !important;
}
#recruiter-sign-register {
  position: relative;
  border-radius: 20px !important;
}
</style>
