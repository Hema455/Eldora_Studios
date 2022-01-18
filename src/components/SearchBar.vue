<template>
  <!-- search bar with vuelidate. -->
  <div>
  
  <b-container class = "fluid"  >
    
    <b-row  >
      <b-col class="py-0  pl-12 col-4">
        <v-text-field
          v-model="keywords"
          :error-messages="keywordsErrors"
          label="Keywords"
          required
          @blur="$v.keywords.$touch()"
        />
      </b-col>
      <b-col class="pa-0 col-3">
        <v-autocomplete label="Industry" v-model="industry" :items="industryList"></v-autocomplete>
      </b-col>
      <b-col class="pa-0 col-3">
        <v-autocomplete label="Location" v-model="location" :items="locationList"></v-autocomplete>
      </b-col>
      <!-- search button-->
      <b-col class="px-0 py-4 col-1 text-center">
        <v-btn icon type="submit" @click.prevent="submit">
          <b-icon icon="search" font-scale="2" ></b-icon>
        </v-btn>
      </b-col>
      <b-col class="px-0 py-4 col-1">
        <!-- link to the advanced search -->
        <v-btn icon router to="/search">
        
       
           <b-icon icon=" three-dots-vertical" font-scale="2" ></b-icon>
        </v-btn>
      </b-col>
    </b-row>
  </b-container>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";


export default {
  mixins: [validationMixin],
  validations: {
    keywords: { required }
  },
  data: () => ({
    keywords: "",
    industry: "",
    location: "",
    industryList: [
      "Accounting",
      "Administration & Office Support",
      "Advertising",
      "Banking",
      "Call Centre & Customer Service",
      "CEO & General Management",
      "Community Services & Development",
      "Construction",
      "Consulting & Strategy",
      "Design & Architect"
    ],
    locationList: [
      "Adelaide",
      "Brisbane",
      "Canberra",
      "Cairns",
      "Darwin",
      "Geelong",
      "Gold Coast",
      "Hobart",
      "Melbourne",
      "Perth",
      "Sydney",
      "Wollongong"
    ]
  }),
  computed: {
    keywordsErrors() {
      const errors = [];
      if (!this.$v.keywords.$dirty) return errors;
      !this.$v.keywords.required && errors.push("Keywords is required.");
      return errors;
    }
  },
  mounted() {
    //set the defualt value if it exsits
    this.keywords = this.$route.query.keywords;
    this.industry = this.$route.query.industry;
    this.location = this.$route.query.location;
  },
  methods: {
    submit() {
      // validate the inputs
      this.$v.$touch();
      if (!this.$v.$invalid) {
        // redirect to the search result page and pass the query by route params

        this.$router.push({
          path: "/jobs",
          query: {
            keywords:this.keywords,
            industry: this.industry,
            location: this.location
          }
        });
      }
    }
  }
};
</script>
