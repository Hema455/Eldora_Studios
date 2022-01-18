<template>
  <v-container>
    <v-row>
      <v-col
        v-if="loginState()&&userType()=='jobSeeker'"
        class="text-center display-1"
      >Recommended jobs</v-col>
    </v-row>
    <v-row>
      <v-col
        v-if="loginState()&&userType()=='jobRecruiter'"
        class="text-center display-1"
      >Open jobs</v-col>
    </v-row>
    <v-row>
      <v-col class="col-md-8 offset-md-2">
        <v-row>
          <v-col class="col-lg-6 col-xl-3" v-for="(item,i) in jobs" :key="i">
            <JobCard :job="item" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import JobCard from "./JobCard";
export default {
  components: { JobCard },
  methods: {
    loginState() {
      return this.$store.state.loginState;
    },
    userType() {
      return this.$store.state.userType;
    }
  },
  data: () => ({
    //this is test data, the actual data should from server side
    jobs: [
      {
        title: "Software Engineering",
        company: "Google",
        industry: "Information & communication Technology",
        location: "Melbourne CBD",
        badges: [
          {
            img: require("../assets/badges/Career Progression_1.png"),
            description: "Career Progression"
          },
          {
            img: require("../assets/badges/Casual.png"),
            description: "Casual"
          },
          {
            img: require("../assets/badges/Chinese New Year.png"),
            description: "Chinese New Year"
          },
          {
            img: require("../assets/badges/Christmas_1.png"),
            description: "Christmas"
          }
        ]
      },
      {
        title: "UI/UX Designer",
        company: "Apple",
        industry: "Information & communication Technology",
        location: "Melbourne CBD",
        badges: [
          {
            img: require("../assets/badges/Commuting Options.png"),
            description: "Commuting Options"
          },
          {
            img: require("../assets/badges/Company Stocks_1.png"),
            description: "Company Stocks"
          },
          {
            img: require("../assets/badges/Contract_1.png"),
            description: "Contract"
          },
          {
            img: require("../assets/badges/Daylight Savings.png"),
            description: "Daylight Savings"
          }
        ]
      },
      {
        title: "Course Advisor",
        company: "Deakin Uni",
        industry: "Education & Training",
        location: "Melbourne Burwood",
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
          }
        ]
      },
      {
        title: "Category Manager",
        company: "Coles",
        industry: "Retail & Consumer Products",
        location: "Melbourne Doncaster",
        badges: [
          {
            img: require("../assets/badges/Discounts_1.png"),
            description: "Discounts"
          },
          {
            img: require("../assets/badges/Free Lunch_1.png"),
            description: "Free Lunch"
          },
          {
            img: require("../assets/badges/Relocation Assist_1.png"),
            description: "Relocation Assist"
          }
        ]
      }
    ]
  })
};
</script>