<template>
  <div>
    <v-container style="background-color:#ebebeb">
      <v-row>
        <!-- Preferred Badges Card -->
        <v-col>
          <v-card height="450px" width="auto" class="mx-auto px-4">
            <v-card-text
              class="text-center headline font-weight-bold black--text py-6"
              >Preferred Badges
            </v-card-text>
            <v-row align="center" justify="center" style="height:200px">
              <v-tooltip top v-for="(badge, i) in user.badges" :key="i">
                <template v-slot:activator="{ on }">
                  <div class="mx-4">
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
<v-row justify="center" style="width:100%">
    <!-- button to edit badges -->
    <!--sada-->
    <v-autocomplete v-model="user.badges" :items="badgesList" chips label="Select your Preferred Badges (maximum: 4)" item-text="name" item-value="id" multiple @input="disabledSelect(user.badges, badgesList)">
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
                      <v-list-item-title
                        v-html="data.item.name"
                      ></v-list-item-title>
                    </v-list-item-content>
                  </template>
        </template>
    </v-autocomplete>
</v-row>
<v-row class="text-center">
    <!---assas-->

    <v-btn style="width:100%" text color="success" @click="$emit('update:page', 4)">
        Update Badges
        <v-icon right>mdi-pencil</v-icon>
    </v-btn>
</v-row>
<br />
</v-card>
</v-col>
<!-- My jobs card -->
<v-col>
    <v-card max-width="100%" height="450px" class="mx-auto px-12">
        <v-card-text class="text-center headline font-weight-bold black--text py-6">My Jobs
        </v-card-text>
        <v-simple-table height="200">
            <br />
            <tbody>
                <tr>
                    <td>
                        <div class="h3 font-weight-medium">Available Jobs</div>
                    </td>
                    <td>
                        <div class="h3 font-weight-bold">
                            {{ user.savedJobs.length }}
                        </div>
                    </td>

                    <td>
                        <div class="h3 font-weight-medium">Applied Jobs</div>
                    </td>
                    <td>
                        <div class="h3 font-weight-bold">
                            {{ user.appliedJobs.length }}
                        </div>
                    </td>
                </tr>
                <br />
                <tr>
                    <td>
                        <div class="h3 font-weight-medium">Accepted Jobs</div>
                    </td>
                    <td>
                        <div class="h3 font-weight-bold">{{ accepted }}</div>
                    </td>

                    <td>
                        <div class="h3 font-weight-medium">Rejected Jobs</div>
                    </td>
                    <td>
                        <div class="h3 font-weight-bold">{{ rejected }}</div>
                    </td>
                </tr>
            </tbody>
        </v-simple-table>
        <v-row justify="center" class="py-4">
            <!-- button to view all jobs info -->
            <v-btn text color="success" style="width:100%" @click="$emit('update:page', 2)">View all
            </v-btn>
        </v-row>
    </v-card>
</v-col>
</v-row>
<v-row>
    <!-- Job preferences card -->
    <v-col>
        <v-card max-width="100%" height="auto" class="mx-auto px-12">
            <v-card-text class="text-center headline font-weight-bold black--text py-6">
                Job Preferences
            </v-card-text>
            <v-simple-table height="auto">
                <tr>
                    <td>
                        <div class="h5">Job Title</div>
                    </td>
                    <td>
                        <v-autocomplete multiple label="eg: Web Developer" v-model="user.preferences.title" :items="joblist" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="h5">Industry</div>
                    </td>
                    <td>
                        <v-autocomplete multiple label="eg: Information Technology" v-model="user.preferences.industry" :items="industryList" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="h5">Job Type</div>
                    </td>
                    <td>
                        <v-btn-toggle active-class="act-btn" multiple v-model="user.preferences.type">
                            <v-btn width="108" text value="Full-time">Full-time</v-btn>
                            <v-btn width="108" text value="Part-time">Part-time</v-btn>
                            <v-btn width="108" text value="Casual">Casual</v-btn>
                            <v-btn width="108" text value="Contract">Contract</v-btn>
                        </v-btn-toggle>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="h5">Location</div>
                    </td>
                    <td>
                        <v-autocomplete label="eg: Melbourne" class="mr-5" v-model="user.preferences.location" :items="locationList">
                        </v-autocomplete>
                    </td>
                </tr>
            </v-simple-table>

            <v-row justify="center" class="py-4">
                <!-- button to edit preferences -->
                <v-btn text color="success" style="width:100%" @click="$emit('update:page', 1)">
                    Update Preferences
                    <v-icon right>mdi-pencil</v-icon>
                </v-btn>
            </v-row>
        </v-card>
    </v-col>
    <!-- Recommended jobs card -->
    <v-col>
        <v-card max-width="100%" height="100%" class="mx-auto px-4">
            <v-card-text class="text-center headline font-weight-bold black--text pb-2">Recommended Jobs
            </v-card-text>
            <v-row>
                <v-col>
                    <!-- pass the job info to the JobCard component which will generate a job card -->
                    <JobCard :job="jobs[0]" />
                </v-col>
                <v-col>
                    <JobCard :job="jobs[1]" />
                </v-col>
            </v-row>
        </v-card>
    </v-col>
</v-row>
</v-container>
</div>
</template>

<script>
    import JobCard from "../JobCard";

    export default {
        components: {
            JobCard,
        },
        data: () => ({
            show: false,
            // test data
            name: "",
            location: "",
            type: "",
            industry: "",
            badges:"",
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
                "Design & Architect",
                "Information Technology",
            ],
            joblist: [
                "Web Developer",
                "Programmer",
                "Electrical Engineer",
                "Interior Designer",
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
                "Wollongong",
            ],
            user: {
                firstName: "John",
                lastName: "Smith",
                email: "john.smith@gmail.com",
                profile: {
                    location: "Melbourne",
                    phone: "045328234",
                },
                badges: [4, 9, 10, 12],
                savedJobs: [{
                    id: 12,
                }, {
                    id: 286,
                }, {
                    id: 20,
                }, {
                    id: 581,
                }, {
                    id: 123,
                }, {
                    id: 216,
                }, {
                    id: 9,
                }, {
                    id: 457,
                }, ],
                appliedJobs: [{
                    id: 12,
                    status: 0,
                }, {
                    id: 286,
                    status: 1,
                }, {
                    id: 20,
                    status: 2,
                }, {
                    id: 581,
                    status: 1,
                }, ],

                preferences: {
                    title: ["Web Developer"],
                    industry: ["Information Technology"],
                    location: "Melbourne",
                    type: ["Full-time"],
                    minSalary: "50000",
                    maxSalary: "80000",
                },
            },
            //test data
            jobs: [{
                title: "Software Engineering",
                company: "Google",
                industry: "Information & communication Technology",
                location: "Melbourne CBD",
                badges: [{
                    img: require("../../assets/badges/Career Progression_1.png"),
                    description: "Career Progression",
                }, {
                    img: require("../../assets/badges/Casual.png"),
                    description: "Casual",
                }, {
                    img: require("../../assets/badges/Chinese New Year.png"),
                    description: "Chinese New Year",
                }, ],
            }, {
                title: "UI/UX Designer",
                company: "Apple",
                industry: "Information & communication Technology",
                location: "Melbourne CBD",
                badges: [{
                    img: require("../../assets/badges/Commuting Options.png"),
                    description: "Commuting Options",
                }, {
                    img: require("../../assets/badges/Company Stocks_1.png"),
                    description: "Company Stocks",
                }, {
                    img: require("../../assets/badges/Contract_1.png"),
                    description: "Contract",
                }, {
                    img: require("../../assets/badges/Daylight Savings.png"),
                    description: "Daylight Savings",
                }, ],
            }, ],
        }),
        created() {
            this.disabledSelect(this.user.badges, this.badgesList);
        },

        computed: {
            // calculate the number of different job info from data
            accepted() {
                let count = 0;
                this.user.appliedJobs.forEach((item) => {
                    if (item.status == 1) count++;
                });
                return count;
            },
            rejected() {
                let count = 0;
                this.user.appliedJobs.forEach((item) => {
                    if (item.status == 2) count++;
                });
                return count;
            },
        },
        mounted() {
            if (!this.$store.state.loginState) {
                this.$router.push("/login");
            }

            if (localStorage.name) {
                this.name = localStorage.name;
            }
        },
        methods: {
            remove(item) {
                // remove the item then check the number of selected items
                const index = this.user.badges.indexOf(item.id);
                if (index >= 0) this.user.badges.splice(index, 1);
                this.disabledSelect(this.user.badges, this.badgesList);
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
        },
    };
</script>

<style scoped>
    #header {
        box-shadow: 0px 5px 5px -5px rgba(0, 0, 0, 0.2);
    }

    a {
        text-decoration: none;
        color: inherit !important;
    }

    .cover {
        position: relative;
        top: -200px;
        z-index: 1;
        opacity: 0.8;
        height: 200px;
    }

    .act-btn {
        color: #4caf50 !important;
    }
</style>
