<template>
  <v-container>
    <v-row align="center">
      <v-col class="col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
        <v-card>
          <v-card-text class="text-center headline black--text font-weight-bold">Advanced Search</v-card-text>
          <v-form>
            <v-row class="mx-12">
              <v-text-field
                v-model="keywords"
                label="Keywords"
                :error-messages="keywordsErrors"
                @blur="$v.keywords.$touch()"
                required
              />
            </v-row>
            <v-row class="mx-12">
              <v-autocomplete label="Industry" v-model="industry" :items="industryList" />
            </v-row>
            <v-row class="mx-12">
              <v-text-field v-model="company" label="Company Name" />
            </v-row>
            <v-row class="mx-12">
              <div class="d-inline-flex justify-space-between" style="width:100%">
                <v-text-field v-model="date" readonly label="Post Date" class="mr-4" />
                <v-btn-toggle active-class="act-btn" v-model="date">
                  <v-btn width="108" text value="Today">Today</v-btn>
                  <v-btn width="108" text value="3 Days">3 Days</v-btn>
                  <v-btn width="108" text value="7 Days">7 Days</v-btn>
                  <v-btn width="108" text value="30 Days">30 Days</v-btn>
                </v-btn-toggle>
              </div>
            </v-row>

            <v-row class="mx-12">
              <div class="d-inline-flex justify-space-between" style="width:100%">
                <!-- <v-select :options="['Canada','United States']"  multiple="true" v-model="selected" />-->
                <v-text-field readonly label="Work Type" class="mr-4" /> 
                <v-btn-toggle v-model="worktype" multiple active-class="act-btn">
                  <v-btn width="108" text value="Full-tile">Full-time</v-btn>
                  <v-btn width="108" text value="Part-time">Part-time</v-btn>
                  <v-btn width="108" text value="Casual">Casual</v-btn>
                  <v-btn width="108" text value="Contract">Contract</v-btn>
                </v-btn-toggle>
              </div>
            </v-row>
            <v-row class="mx-12">
              <v-text-field
                label="Salary Range"
                placeholder="From"
                v-model="minSalary"
                :error-messages="minSalaryErrors"
                @blur="$v.minSalary.$touch()"
              />
              <div class="mx-4" style="line-height:70px">~</div>
              <v-text-field
                placeholder="To"
                v-model="maxSalary"
                :error-messages="maxSalaryErrors"
                @blur="$v.maxSalary.$touch()"
              />
            </v-row>
            <v-row class="mx-12">
              <v-autocomplete
                label="Location"
                class="mr-4"
                v-model="location"
                :items="locationList"
              ></v-autocomplete>
              <v-autocomplete
                label="Distance"
                class="ml-4"
                v-model="distance"
                :items="distanceList"
              ></v-autocomplete>
            </v-row>
            <!-- badge selection -->
            <v-row class="mx-12">
              <v-autocomplete
                v-model="badges"
                :items="badgesList"
                chips
                label="Select Badges (up to 4)"
                item-text="name"
                item-value="id"
                multiple
                @input="disabledSelect(badges,badgesList)"
              >
                <template v-slot:selection="data">
                  <v-chip
                    v-bind="data.attrs"
                    :input-value="data.selected"
                    close
                    @click="data.select"
                    @click:close="remove(data.item)"
                  >
                    <v-avatar left>
                      <v-img :src="data.item.avatar"></v-img>
                    </v-avatar>
                    {{ data.item.name }}
                  </v-chip>
                </template>
                <template v-slot:item="data">
                  <template>
                    <v-list-item-avatar>
                      <img :src="data.item.avatar" />
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title v-html="data.item.name"></v-list-item-title>
                    </v-list-item-content>
                  </template>
                </template>
              </v-autocomplete>
            </v-row>
            <v-row class="mx-12 pa-6">
              <v-btn block color="primary" @click.prevent="submit" type="submit">Search</v-btn>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, numeric } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  validations: {
    keywords: { required },
    minSalary: { numeric },
    maxSalary: { numeric }
  },

  data: () => ({
    keywords: "",
    industry: "",
    company: "",
    date: "",
    type: "",
    minSalary: "",
    maxSalary: "",
    location: "",
    distance: "",
    badges: [],
    worktype: [],
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
    ],
    distanceList: ["Within 5km", "Within 10km", "Within 20km"],
    badgesList: [
      {
        id: 0,
        name: "Afternoon Shift",
        avatar: require("../assets/badges/Afternoon Shift.png"),
        disabled: false
      },
      {
        id: 1,
        name: "Chinese New Year",
        avatar: require("../assets/badges/Chinese New Year.png"),
        disabled: false
      },
      {
        id: 2,
        name: "Christmas",
        avatar: require("../assets/badges/Christmas_1.png"),
        disabled: false
      },
      {
        id: 3,
        name: "Company Car",
        avatar: require("../assets/badges/Company Car.png"),
        disabled: false
      },
      {
        id: 4,
        name: "Daylight Savings",
        avatar: require("../assets/badges/Daylight Savings.png"),
        disabled: false
      },
      {
        id: 5,
        name: "Easter",
        avatar: require("../assets/badges/Easter.png"),
        disabled: false
      },
      {
        id: 6,
        name: "Morning Shift",
        avatar: require("../assets/badges/Morning Shift.png"),
        disabled: false
      },
      {
        id: 7,
        name: "Near Transport",
        avatar: require("../assets/badges/Near Transport.png"),
        disabled: false
      },
      {
        id: 8,
        name: "New Years Day",
        avatar: require("../assets/badges/New Years Day.png"),
        disabled: false
      },
      {
        id: 9,
        name: "Night Shift",
        avatar: require("../assets/badges/Night Shift.png"),
        disabled: false
      },
      {
        id: 10,
        name: "Phased Retirement",
        avatar: require("../assets/badges/Phased Retirement.png"),
        disabled: false
      },
      {
        id: 11,
        name: "RDO PDO",
        avatar: require("../assets/badges/RDO PDO.png"),
        disabled: false
      },
      {
        id: 12,
        name: "Saving Plan",
        avatar: require("../assets/badges/Saving Plan.png"),
        disabled: false
      },
      {
        id: 13,
        name: "Work Flexibility",
        avatar: require("../assets/badges/Work Flexibility.png"),
        disabled: false
      }
    ]
  }),
  computed: {
    keywordsErrors() {
      const errors = [];
      if (!this.$v.keywords.$dirty) return errors;
      !this.$v.keywords.required && errors.push("Keywords is required.");
      return errors;
    },
    minSalaryErrors() {
      const errors = [];
      if (!this.$v.minSalary.$dirty) return errors;
      !this.$v.minSalary.numeric && errors.push("Must be valid number");
      return errors;
    },
    maxSalaryErrors() {
      const errors = [];
      if (!this.$v.maxSalary.$dirty) return errors;
      !this.$v.maxSalary.numeric && errors.push("Must be valid number");
      return errors;
    }
  },
  methods: {
    remove(item) {
      // remove the item then check the number of selected items
      const index = this.badges.indexOf(item.id);
      if (index >= 0) this.badges.splice(index, 1);
      this.disabledSelect(this.badges, this.badgesList);
    },
    disabledSelect(selected, list) {
      //check if selected items are <4, if already selected 4 items, disable other items in list
      if (selected.length >= 4) {
        for (var j = 0; j < list.length; j++) {
          list[j].disabled = true;
          for (var i = 0; i < selected.length; i++) {
            if (selected[i] == list[j].id) {
              list[j].disabled = false;
            }
          }
        }
      } else {
        // activate all items
        for (var k = 0; k < list.length; k++) {
          list[k].disabled = false;
        }
      }
    },
    submit() {
      // validate the inputs
      this.$v.$touch();
      if (!this.$v.$invalid) {
        // redirect to the search result page and pass the query by route params

        this.$router.push({
          path: "/jobs",
          query: {
            keywords: this.keywords,           
          }
        });
      }
    }
  }
};
</script>

<style scoped>
.act-btn {
  color: #4caf50 !important;
}
</style>