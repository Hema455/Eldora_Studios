<template>
  <div>
    <v-container fluid>
      <v-form>
        <v-row justify="center">
          <v-card class=" mx-4 col-12 col-lg-10">
            <v-row>
              <v-col class="col-12">
                <v-row class="ml-3">
                  <v-col class="pl-3 col-12">
                    <v-card-title class="headline font-weight-bold">
                      Post your Job
                    </v-card-title>
                  </v-col>
                  <v-col>
                    <span class="mr-1 title">
                      All personal Information submitted by you as part of an
                      application will be used by us in accordance with our
                    </span>
                  </v-col>
                </v-row>
              </v-col>

              <!-- the first half forms -->
              <v-col class="col-12 col-md-8">
                <v-row class="ml-3">
                  <v-col class="col-12">
                    <v-card-title class="px-5 headline font-weight-bold">
                      Job Title
                    </v-card-title>
                    <v-text-field class="px-5" outlined v-model="jobTitle">
                    </v-text-field>
                  </v-col>
                  <v-col class="col-12">
                    <v-card-title class="px-5 pr-1 headline font-weight-bold">
                      Company Name
                    </v-card-title>
                    <v-text-field class="px-5" outlined v-model="companyName">
                    </v-text-field>
                  </v-col>
                  <v-col>
                    <v-card-title class="px-5 pr-1 headline font-weight-bold">
                      Job Desciption
                    </v-card-title>
                    <v-textarea class="px-5" outlined v-model="jobDescription">
                    </v-textarea>
                  </v-col>
                </v-row>
              </v-col>

              <!-- 2 side cards -->
              <v-col class="col-12 col-md-9 col-lg-4">
                <v-row class="justify-center">
                  <v-col class="col-10 col-md-6 col-lg-12">
                    <v-card class="sm-card" outlined>
                      <v-row justify="center">
                        <v-card-title class="col-7 text-decoration-underline">
                          View Job postings
                        </v-card-title>
                        <v-card-title class="col-7">
                          Recent Job Postings
                        </v-card-title>
                        <v-card-title class="col-7">
                          Total Posts Views
                        </v-card-title>
                        <v-card-title class="col-7">
                          Total Applicants
                        </v-card-title>
                        <v-card-title class="col-6"> More </v-card-title>
                      </v-row>
                    </v-card>
                  </v-col>

                  <v-col class="col-10 col-md-6 col-lg-12">
                    <v-card class="sm-card pb-2" outlined>
                      <v-row>
                        <v-card-title class="headline font-weight-bold">
                          Job Alerts
                        </v-card-title>
                        <v-card-text class="headline font-weight-bold">
                          Recieve job alerts directly to your inbox whenever a
                          jobseeker views your job listing or applies for it
                        </v-card-text>
                        <v-btn class="mx-auto secondary"> Get Started</v-btn>
                      </v-row>
                    </v-card>
                  </v-col>
                </v-row>
              </v-col>

              <!-- other half of forms -->
              <v-col class="mx-8">
                <v-col class="col-12">
                  <v-card-title class=" headline font-weight-bold">
                    KeyWords
                  </v-card-title>
                  <v-text-field class="mr-3" outlined v-model="keyWord">
                  </v-text-field>
                </v-col>
                <v-row class="px-2">
                  <v-col class="col-12 col-md-6">
                    <v-card-title class="px-5 headline font-weight-bold">
                      Country
                    </v-card-title>
                    <v-select
                      :items="countryList"
                      v-model="country"
                      outlined
                    ></v-select>
                  </v-col>
                  <v-col class="col-12 col-md-6">
                    <v-card-title class="px-3 headline font-weight-bold">
                      City, State, or Postcode
                    </v-card-title>
                    <v-text-field class="px-5" outlined v-model="cityCode">
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row class="px-2">
                  <v-col class="col-12 col-md-6">
                    <v-card-title class="px-5 headline font-weight-bold">
                      Job Industry
                    </v-card-title>
                    <v-select
                      :items="industryList"
                      outlined
                    ></v-select>
                  </v-col>
                  <v-col class="col-12 col-md-6">
                    <v-card-title class="px-5 headline font-weight-bold">
                      Salary
                    </v-card-title>
                    <v-text-field class="px-5" outlined v-model="salary">
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row class="px-2">
                  <v-col class="col-12 col-md-6">
                    <v-card-title class="px-5 headline font-weight-bold">
                      Job Type
                    </v-card-title>
                    <v-select
                      :items="jobTypeList"
                      v-model="jobType"
                      outlined
                    ></v-select>
                  </v-col>
                  <v-col class="col-12 col-md-6">
                    <v-card-title class="px-5 headline font-weight-bold">
                      Job Position
                    </v-card-title>
                    <v-select
                      class="px-5"
                      :items="jobPositionList"
                      v-model="jobPosition"
                      outlined
                    ></v-select>
                  </v-col>
                </v-row>
                <v-col>
                  <v-card-title
                    class="text-center headline font-weight-bold black--text"
                  >
                    Select Badges
                  </v-card-title>
                  <v-card height="auto" width="100%" class="mx-auto px-4">
                    <div v-if="badges.length > 0">
                      <v-row
                        align="center"
                        justify="center"
                        style="height:90px"
                      >
                        <v-tooltip top v-for="(badge, i) in badges" :key="i">
                          <template v-slot:activator="{ on }">
                            <div class="ma-4">
                              <v-img
                                :src="badgesList[badge].avatar"
                                max-height="80"
                                contain
                                v-on="on"
                              />
                            </div>
                          </template>
<span>{{ badgesList[badge].name }}</span>
</v-tooltip>
</v-row>
</div>
<v-row justify="center" style="width:100%">
    <!-- button to edit badges -->
    <!--sada-->
    <v-autocomplete v-model="badges" :items="badgesList" chips label="Select your Preferred Badges (maximum: 4)" item-text="name" item-value="id" multiple @input="disabledSelect(badges, badgesList)">
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
                              <v-list-item-title v-html="data.item.name">
                              </v-list-item-title>
                            </v-list-item-content>
                          </template>
        </template>
    </v-autocomplete>
</v-row>
<br />
</v-card>
</v-col>
</v-col>
</v-row>
<div class="ml-5">
    <v-row class="ml-10">
        <v-col class="col-1">
            <v-checkbox v-model="privacy"> </v-checkbox>
        </v-col>
        <v-col class="col-8 pt-6">
            <span class="mr-1 title">
                    I agree with all Terms of Service and private policy
                  </span>
            <a class="std title pt-4"> Privacy statement</a>
        </v-col>
        <v-col> </v-col>
    </v-row>

    <v-row justify="center">
        <v-col class="col-6 col-md-3">
            <v-btn color="primary" @click.prevent="submit" type="submit">Reveiw Job
            </v-btn>
        </v-col>
        <v-col class="col-6 col-md-3">
            <v-btn color="primary" @click.prevent="submit" type="submit">Save as Template
            </v-btn>
        </v-col>
        <v-col class="col-6 col-md-3">
            <v-btn :disabled="!privacy" color="primary" @click.prevent="submit" type="submit">Post Job
            </v-btn>
        </v-col>
    </v-row>
</div>
</v-card>
</v-row>
</v-form>
</v-container>
</div>
</template>
<script>
    export default {
        data: () => ({
            jobTitle: "",
            companyName: "",
            jobDescription: "",
            keyWord: "",
            countryList: ["Australia", "NewZealand"],
            country: "",
            cityCode: "",
            industryList: ["IT", "Finance", "Law", "commerce"],
            salary: "",
            jobTypeList: ["Fulltime", "Part time", "Casual"],
            jobType: "",
            jobPositionList: ["Worker", "Manager"],
            jobPosition: "",
            privacy: false,
            badges: "",
            badgesList: [{
                id: 0,
                name: "Afternoon Shift",
                avatar: require("../../assets/badges/Near Public Transport.png"),
                disabled: false,
            }, {
                id: 1,
                name: "Full Time",
                avatar: require("../../assets/badges/Full Time.png"),
                disabled: false,
            }, {
                id: 2,
                name: "Christmas",
                avatar: require("../../assets/badges/Christmas_1.png"),
                disabled: false,
            }, {
                id: 3,
                name: "Wellness Programs",
                avatar: require("../../assets/badges/Wellness Programs.png"),
                disabled: false,
            }, {
                id: 4,
                name: "Casual",
                avatar: require("../../assets/badges/Casual.png"),
                disabled: false,
            }, {
                id: 5,
                name: "Easter",
                avatar: require("../../assets/badges/Easter.png"),
                disabled: false,
            }, {
                id: 6,
                name: "Morning Shift",
                avatar: require("../../assets/badges/Morning Shift.png"),
                disabled: false,
            }, {
                id: 7,
                name: "Near Transport",
                avatar: require("../../assets/badges/Near Transport.png"),
                disabled: false,
            }, {
                id: 8,
                name: "New Years Day",
                avatar: require("../../assets/badges/New Years Day.png"),
                disabled: false,
            }, {
                id: 9,
                name: "Night Shift",
                avatar: require("../../assets/badges/Night Shift.png"),
                disabled: false,
            }, {
                id: 10,
                name: "Phased Retirement",
                avatar: require("../../assets/badges/Phased Retirement.png"),
                disabled: false,
            }, {
                id: 11,
                name: "RDO PDO",
                avatar: require("../../assets/badges/RDO PDO.png"),
                disabled: false,
            }, {
                id: 12,
                name: "Saving Plan",
                avatar: require("../../assets/badges/Saving Plan.png"),
                disabled: false,
            }, {
                id: 13,
                name: "Work Flexibility",
                avatar: require("../../assets/badges/Work Flexibility.png"),
                disabled: false,
            }, ],
            user: {
                firstName: "John",
                lastName: "Smith",
                email: "john.smith@gmail.com",
                profile: {
                    location: "Melbourne",
                    phone: "045328234",
                },
                badges: [{
                    img: require("../../assets/badges/Near Public Transport.png"),
                    description: "Near Transport",
                }, {
                    img: require("../../assets/badges/Morning Shift w Banner.png"),
                    description: "Morning Shift",
                }, ],
            },
        }),
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
                            expirience: this.expirience,
                            jobTitle: this.jobTitle,
                            companyName: this.companyName,
                            working: this.working,
                            startDate: this.startDate,
                            endDate: this.endDate,
                            resume: this.resume,
                            coverLetter: this.coverLetter,
                            rightTypes: this.rightTypes,
                            yearsOfExp: this.yearsOfExp,
                            salaries: this.salaries,
                            rights: this.rights,
                            years: this.years,
                            salary: this.salaries,
                        },
                    });
                }
            },
        },
    };
</script>
<style>
    /* .v-btn.v-size--small {
        font-size: 0.55rem;
    } */
    
    .sm-card {
        border: 2px solid !important;
        border-color: #808080 !important;
        background-color: #dcdcdc !important;
    }
    
    .form {
        font-family: 10px;
        margin: 0 auto;
        max-width: 450px;
        width: 100%;
        height: 475px;
    }
    
    .form_title {
        text-align: center;
        font-size: 28px;
    }
</style>
