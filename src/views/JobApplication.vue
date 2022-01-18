<template>
  <div>
    <v-container fluid>
      <v-row class="p-5">
        <span class="font-weight-bold title-size">
          Job Application for SEO Expert at Deakin University
        </span>
      </v-row>
      <v-row class="p-4">
        <span class="subtitle-size font-weight-bold"
          >Most Recent Experience</span
        >
      </v-row>
      <v-form>
        <v-row>
          <v-col class="col-13 col-sm-12 col-md-11 col-lg-7">
            <v-card class="mb-10 ml-4 mr-4">
              <v-row class="pl-3">
                <v-col-sm class="pa-5 mt-2">
                  <label class="switch">
                    <input
                      type="checkbox"
                      class="default pa-7"
                      v-model="expirience"
                    />
                    <span class="slider"></span>
                  </label>
                </v-col-sm>
                <v-col class="pl-3 pt-3 col-1">
                  <v-card-title
                    class="headline font-weight-bold"
                    v-if="!expirience"
                  >
                    I am a Fresher
                  </v-card-title>
                  <v-card-title class="headline font-weight-bold" v-else>
                    I am a veteran
                  </v-card-title>
                </v-col>
              </v-row>
              <v-row class="pl-3">
                <v-col-sm>
                  <v-card-title class="pa-6 headline font-weight-bold">
                    Job Title
                  </v-card-title>
                </v-col-sm>
                <v-col class="col-11 col-sm-6 col-md-6 col-lg-6">
                  <v-text-field dense outlined v-model="jobTitle">
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row class="pl-3">
                <v-col-sm>
                  <v-card-title class="pa-6 pr-1 headline font-weight-bold">
                    Company Name
                  </v-card-title>
                </v-col-sm>
                <v-col class="col-11 col-sm-6 col-md-6 col-lg-6">
                  <v-text-field dense outlined v-model="companyName">
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row class="pl-10">
                <v-col-sm class="mt-3" label="Still working">
                  <v-checkbox v-model="working" class=""></v-checkbox>
                </v-col-sm>
                <v-col class="">
                  <v-card-title class="headline font-weight-bold"
                    >Still Working</v-card-title
                  >
                </v-col>
              </v-row>
              <v-row class="pl-3">
                <v-col-sm>
                  <v-card-title class="pa-7 headline font-weight-bold">
                    Start Date
                  </v-card-title>
                </v-col-sm>
                <v-col class="pt-3 col-11 col-sm-6 col-md-6 col-lg-6">
                  <div>
                    <v-menu
                      ref="startMenu"
                      v-model="startMenu"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      :return-value.sync="start"
                      transition="scale-transition"
                      min-width="290px"
                      offset-y
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="startDate"
                          class="mt-3"
                          label="Start Date"
                          dense
                          readonly
                          outlined
                          hide-details
                          v-on="on"
                        ></v-text-field>
                      </template>
<v-date-picker v-model="startDate" no-title scrollable>
    <v-spacer></v-spacer>
    <v-btn text color="primary" @click="startMenu = false">
        Cancel
    </v-btn>
    <v-btn text color="primary" @click="$refs.startMenu.save(start)">
        OK
    </v-btn>
</v-date-picker>
</v-menu>
</div>
</v-col>
</v-row>
<v-row class="pl-3">
    <v-col-sm>
        <v-card-title class="pa-7 headline font-weight-bold">
            End Date
        </v-card-title>
    </v-col-sm>
    <v-col class="pt-3 col-11 col-sm-6 col-md-6 col-lg-6">
        <div>
            <v-menu ref="endMenu" v-model="endMenu" :close-on-content-click="false" :nudge-right="40" :return-value.sync="start" transition="scale-transition" min-width="290px" offset-y>
                <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="endDate"
                          class="mt-3"
                          label="End Date"
                          dense
                          readonly
                          outlined
                          hide-details
                          v-on="on"
                        ></v-text-field>
                      </template>
                <v-date-picker v-model="endDate" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="endMenu = false">
                        Cancel
                    </v-btn>
                    <v-btn text color="primary" @click="$refs.endMenu.save(start)">
                        OK
                    </v-btn>
                </v-date-picker>
            </v-menu>
        </div>
    </v-col>
</v-row>
<v-row justify="center" class="pl-3">
    <v-col v-if="startDate && endDate">
        <div class="justify-content-center">
            <span class="title">
                      Total of {{ callDate(startDate, endDate) }} of work
                      expirience
                    </span>
        </div>
    </v-col>
</v-row>
</v-card>
</v-col>
<v-row justify="center jd-padding">
    <div class="pt-10">
        <v-card-title class="display-1 font-weight-black">Job Description</v-card-title>
        <div class="ml-4">
            <span class="title p-5">
                  Are you an SEO looking for your next break ?</span
                ><br />
                <a style="text-decoration: underline;" href="/#/jobdescription"
                  >View full ad post</a
                ><br />
                <span>Posted on 15 Sep 2019</span>
        </div>
    </div>
</v-row>
</v-row>
<v-row>
    <v-col>
        <span class="pl-4 display-1 font-weight-bold">Required Documents for Job Application</span
            >
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card class="ml-4 mr-4">
              <v-row>
                <v-col class="pl-10 col-6 two-titles">
                  <v-card-title
                    class="headline font-weight-bold"
                  ></v-card-title>
                </v-col>
                <v-col class="">
                  <v-card-title class="headline font-weight-bold two-titles"
                    >Cover Letter</v-card-title
                  >
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="1"> </v-col>
                <v-col cols="6" class="rdgr">
                  <v-radio-group v-model="resume" class="radio-style">
                    <v-radio
                      value="Upload a resume"
                      label="Upload a resume"
                    ></v-radio>
                    <v-radio
                      value="Edit a resume"
                      label="Edit a resume"
                    ></v-radio>
                    <v-radio
                      value="Don't include a resume"
                      label="Don't include a resume"
                    ></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col class="rdgr">
                  <v-radio-group v-model="coverLetter" class="radio-style">
                    <v-radio
                      value="Upload a coverletter"
                      label="Upload a cover letter"
                    ></v-radio>
                    <v-radio
                      value="Edit a resume"
                      label="write a cover letter"
                    ></v-radio>
                    <v-radio
                      value="Don't include a coverletter"
                      label="Don't include a cover letter"
                    ></v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="ml-4">
            <span class="display-1 font-weight-bold"
              >Questions from Job Recruiter</span
            >
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card class="ml-4 mr-4">
              <div class="pl-5">
                <v-row>
                  <v-col class="col-11 col-sm-4 col-md-4">
                    <span class="std">Your right to work in Australia</span>
    </v-col>
    <v-col>
        <v-select :items="rightTypes" v-model="rights" outlined></v-select>
    </v-col>
    <v-col cols="1"> </v-col>
</v-row>
<v-row>
    <v-col class="col-11 col-sm-4 col-md-4">
        <span class="std">
                      Years of work expirience in related post
                    </span>
    </v-col>
    <v-col>
        <v-select :items="yearsOfExp" v-model="years" outlined></v-select>
    </v-col>
    <v-col cols="1"> </v-col>
</v-row>
<v-row>
    <v-col class="col-11 col-sm-4 col-md-4">
        <span class="std">Expected Annual Base salary</span>
    </v-col>
    <v-col>
        <v-select :items="salaries" v-model="salary" outlined></v-select>
    </v-col>
    <v-col cols="1"> </v-col>
</v-row>
<v-row>
    <v-col class="col-11 col-sm-4 col-md-4">
        <span class="std">Any notes to Recruiter</span>
    </v-col>
    <v-col class="col-11 col-sm-7">
        <v-textarea v-model="notes" outlined></v-textarea>
    </v-col>
</v-row>
</div>
</v-card>
</v-col>
</v-row>
<v-row class="ml-10">
    <v-col class="col-1 col-sm-2"></v-col>
    <v-col class="col-1">
        <v-checkbox v-model="privacy"> </v-checkbox>
    </v-col>
    <v-col class="col-8 pt-6">
        <span class="mr-1 title">
              All personal Information submitted by you as part of an
              application will be used by us in accordance with our
            </span>
        <a class="std title pt-4"> Privacy statement</a>
    </v-col>
    <v-col> </v-col>
</v-row>

<v-row justify="center">
    <v-col class="col-7 col-sm-1">
        <v-btn :disabled="!privacy" color="primary" @click.prevent="submit" type="submit">Submit Application
        </v-btn>
    </v-col>
</v-row>
</v-form>
</v-container>
</div>
</template>
<script>
    export default {
        data: () => ({
            expirience: false,
            jobTitle: "",
            companyName: "",
            working: false,
            startDate: "",
            endDate: "",
            resume: "",
            coverLetter: "",
            rightTypes: ["work", "vote", "permernent"],
            yearsOfExp: ["1", "2", "3", "4"],
            salaries: ["$36,000", "$55,000", "$67,000"],
            rights: "",
            years: "",
            salary: "",
            privacy: false,
        }),
        methods: {
            callDate(startDate, endDate) {
                var moment = require("moment");
                moment().format();
                var date1 = new Date(startDate);
                var date2 = new Date(endDate);
                var b = moment(date1);
                var a = moment(date2);
                var interval = ["year", "month", "week", "day"];
                var intervals = ["years", "months", "weeks", "days"];
                var out = [];

                for (var i = 0; i < intervals.length; i++) {
                    var diff = a.diff(b, intervals[i]);
                    b.add(diff, intervals[i]);

                    if (diff !== 0) {
                        if (diff > 1) out.push(diff + " " + intervals[i]);
                        else out.push(diff + " " + interval[i]);
                    }
                }
                return out.join(", ");
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
    
    .v-card__title {
        min-width: 13rem;
    }
    /* The switch - the box around the slider */
    
    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
        float: right;
    }
    /* Hide default HTML checkbox */
    
    .switch input {
        display: none;
    }
    /* The slider */
    
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }
    
    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }
    
    input.default:checked+.slider {
        background-color: rgb(52, 109, 214);
    }
    
    input:checked+.slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }
    /* Rounded sliders */
    
    .slider.round {
        border-radius: 34px;
    }
    
    .slider.round:before {
        border-radius: 50%;
    }
    
    .v-input--selection-controls .v-input__slot>.v-label,
    .v-input--selection-controls .v-radio>.v-label {
        padding-top: 10px;
        font-size: larger;
        font-weight: bolder;
    }
    
    .rdgr {
        margin-top: -45px;
    }
    
    .std {
        font-size: 1.25rem;
        font-weight: 500;
        letter-spacing: 0.05em;
        line-height: 4rem;
        color: black;
    }
    
    @media (max-width: 1159px) {
        .jd-padding {
            padding-bottom: 10%;
        }
    }
    
    @media (max-width: 445px) {
        .radio-style .v-radio {
            padding-bottom: 2rem;
            font-size: 0.9em;
        }
    }
    
    @media (max-width: 495px) {
        .two-titles {
            min-width: 8rem;
            font-size: 19px;
        }
    }
    
    @media (max-width: 959px) {
        .title-size {
            font-size: 2rem;
        }
    }
    
    @media (min-width: 960px) {
        .title-size {
            font-size: 3rem;
        }
    }
    
    @media (max-width: 959px) {
        .subtitle-size {
            font-size: 1.5rem;
        }
    }
    
    @media (min-width: 960px) {
        .subtitle-size {
            font-size: 2rem;
        }
    }
</style>
