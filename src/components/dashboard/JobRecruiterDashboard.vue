<template>
  <div>
    <!-- Header card-->
    <b-card class="header" style="background-color:#FFF">
      <div class="header-left">
        <p>
          <b-icon icon="envelope-fill"></b-icon> {{ recruiter.email }}
          <b-icon icon="geo-alt"></b-icon> {{ recruiter.profile.location }}
          <b-icon icon="phone"></b-icon>{{ recruiter.profile.phone }}
        </p>
      </div>
      <div class="header-card">
        <b-icon class="h4 mb-2" icon="question-circle"></b-icon>
        <v-badge :content="1" color="green" overlap>
          <b-icon class="h4 mb-2" icon="bell-fill"></b-icon>
        </v-badge>
        <v-badge :content="3" color="red" overlap>
          <b-icon class="h4 mb-2" icon="envelope-fill"></b-icon>
        </v-badge>

        <b-card-text>Recruiter ID: {{ recruiter.id }}</b-card-text>
      </div>
    </b-card>

    <!-- Modal -->
    <div
      class="modal fade"
      id="modal"
      tabindex="-1"
      role="document"
      aria-labelledby="modalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered" role="dialog">
        <div class="modal-content">
          <v-layout justify-center>
            <v-flex xs12>
              <v-card flat class="mx-auto background">
                <v-card-text class="display-1 text-center">{{
                  tableTitle
                }}</v-card-text>
              </v-card>
              <v-data-table
                :headers="headersInterviews"
                :items="interviews"
                :items-per-page="5"
                class="elevation-1"
                >>
              </v-data-table>
            </v-flex>
          </v-layout>
        </div>
      </div>
    </div>

    <div>
      <h4 class="text mt-10">Jobs</h4>
      <b-container class="fluid">
        <b-row align-h="between">
          <b-col align-self="start" md="auto">
            <b-card
              class=" dashboard-card"
              align="center"
              border-variant="grey"
            >
              <b-icon icon="plus-circle-fill" font-scale="3"></b-icon>
              <h6 class="mt-4">
                <span>Post a Job</span>
              </h6>
            </b-card>
          </b-col>
          <b-col
            align-self="center"
            md="auto"
            data-toggle="modal"
            data-target="#modal"
            style=" cursor: pointer;"
            v-on:click="modalTable('Active Jobs')"
          >
            <b-card class="dashboard-card" align="center" border-variant="grey">
              <b-icon  icon="briefcase-fill" font-scale="3"></b-icon>
              <h6 class="mt-4">
                <span>Active Jobs</span>
              </h6>
            </b-card>
          </b-col>
          <b-col
            align-self="end"
            md="auto"
            data-toggle="modal"
            data-target="#modal"
            style=" cursor: pointer;"
            v-on:click="modalTable('Total Job Views')"
          >
            <b-card class="dashboard-card" align="center" border-variant="grey">
              <b-icon icon="graph-up" font-scale="3"></b-icon>
              <h6 class="mt-4">
                <span text-color="black">Total Job Views</span>
              </h6>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
      <h4 class="text mt-10">Candidates Summary</h4>

      <b-container class="fluid">
        <b-row align-h="between">
          <b-col
            align-self="start"
            md="auto"
            data-toggle="modal"
            data-target="#modal"
            style=" cursor: pointer;"
            v-on:click="modalTable('New Candidates')"
          >
            <b-card
              class=" dashboard-card"
              align="center"
              border-variant="grey"
            >
              <b-row>
                <b-col>
                  <h4>{{ recruiter.newCandidates }}</h4>
                </b-col>
                <b-col>
                  <b-icon
                    icon="person-plus-fill"
                    font-scale="2"
                    flip-h
                  ></b-icon>
                  <b-icon icon="people-fill" font-scale="2" flip-h></b-icon>
                </b-col>
              </b-row>
              <h6 class="mt-4">
                <span>New Candidates</span>
              </h6>
            </b-card>
          </b-col>
          <b-col
            align-self="center"
            data-toggle="modal"
            data-target="#modal"
            style=" cursor: pointer;"
            md="auto"
            v-on:click="modalTable('Email Responses Due')"
          >
            <b-card
              class="dashboard-card"
              align="center"
              border-variant="light"
            >
              <b-row>
                <b-col>
                  <h4>{{ recruiter.emailsPending }}</h4>
                </b-col>
                <b-col>
                  <b-icon icon="briefcase-fill" font-scale="2"></b-icon>
                </b-col>
              </b-row>
              <h6 class="mt-4">
                <span>Email Responses Due</span>
              </h6>
            </b-card>
          </b-col>
          <b-col
            align-self="end"
            md="auto"
            data-toggle="modal"
            data-target="#modal"
            style=" cursor: pointer;"
            v-on:click="modalTable('Interviews')"
          >
            <b-card class="dashboard-card" align="center" border-variant="grey">
              <b-row>
                <b-col>
                  <h4>{{ recruiter.interviews }}</h4>
                </b-col>
                <b-col>
                  <b-icon icon="chat-square-fill" font-scale="2"></b-icon>
                </b-col>
              </b-row>
              <h6 class="mt-4">
                <span>Interviews</span>
              </h6>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
      <h4 class="text mt-10">Requisition Status</h4>

      <b-container class="fluid">
        <b-row align-h="between">
          <b-col
            align-self="start"
            md="auto"
            data-toggle="modal"
            data-target="#modal"
            style=" cursor: pointer;"
            v-on:click="modalTable('All Job listings')"
          >
            <b-card class="dashboard-card" align="center" border-variant="grey">
              <b-row>
                <b-col>
                  <h4>{{ recruiter.jobsTotal }}</h4>
                </b-col>
                <b-col>
                  <b-icon icon="tag-fill" font-scale="2"></b-icon>
                </b-col>
              </b-row>
              <h6 class="mt-4">
                <span>All Job listings</span>
              </h6>
            </b-card>
          </b-col>
          <b-col
            align-self="center"
            md="auto"
            data-toggle="modal"
            data-target="#modal"
            style=" cursor: pointer;"
            v-on:click="modalTable('Offer Accepted')"
          >
            <b-card class="dashboard-card" align="center" border-variant="grey">
              <b-row>
                <b-col>
                  <h4>{{ recruiter.offerAccepted }}</h4>
                </b-col>
                <b-col>
                  <b-icon icon="check" font-scale="2"></b-icon>
                </b-col>
              </b-row>
              <h6 class="mt-4">
                <span>Offer Accepted</span>
              </h6>
            </b-card>
          </b-col>
          <b-col
            align-self="end"
            md="auto"
            data-toggle="modal"
            data-target="#modal"
            style=" cursor: pointer;"
            v-on:click="modalTable('Offer Declined')"
          >
            <b-card class="dashboard-card" align="center" border-variant="grey">
              <b-row>
                <b-col>
                  <h4>{{ recruiter.offerDeclined }}</h4>
                </b-col>
                <b-col>
                  <b-icon icon="file-earmark-minus" font-scale="2"></b-icon>
                </b-col>
              </b-row>
              <h6 class="mt-4">
                <span>Offer Declined</span>
              </h6>
            </b-card>
          </b-col>
          <!--</b-row>-->
          <!--<b-row align-h="between">-->
          <b-col
            align-self="start"
            md="auto"
            data-toggle="modal"
            data-target="#modal"
            style=" cursor: pointer;"
            v-on:click="modalTable('Recent Hires')"
          >
            <b-card class="dashboard-card" align="center" border-variant="grey">
              <b-row>
                <b-col>
                  <h4>{{ recruiter.recentHired }}</h4>
                </b-col>
                <b-col>
                  <b-icon icon="arrow-repeat" font-scale="2"></b-icon>
                </b-col>
              </b-row>
              <h6 class="mt-4">
                <span>Recent Hires</span>
              </h6>
            </b-card>
          </b-col>
          <b-col
            align-self="center"
            md="auto"
            data-toggle="modal"
            data-target="#modal"
            style=" cursor: pointer;"
            v-on:click="modalTable('In Review')"
          >
            <b-card class="dashboard-card" align="center" border-variant="grey">
              <b-row>
                <b-col>
                  <h4>{{ recruiter.inReview }}</h4>
                </b-col>
                <b-col>
                  <b-icon
                    icon="layout-text-sidebar-reverse"
                    font-scale="2"
                  ></b-icon>
                </b-col>
              </b-row>
              <h6 class="mt-4">
                <span>In Review</span>
              </h6>
            </b-card>
          </b-col>
          <b-col
            align-self="end"
            md="auto"
            data-toggle="modal"
            data-target="#modal"
            style=" cursor: pointer;"
            v-on:click="modalTable('Job Expired')"
          >
            <b-card class="dashboard-card" align="center" border-variant="grey">
              <b-row>
                <b-col>
                  <h4>{{ recruiter.jobExpired }}</h4>
                </b-col>
                <b-col>
                  <b-icon icon="trash" font-scale="2"></b-icon>
                </b-col>
              </b-row>
              <h6 class="mt-4">
                <span>Job Expired</span>
              </h6>
            </b-card>
          </b-col>
        </b-row>
        <div>
          <!-- <component :is="miniPage" :page.sync="jritem" /> -->
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
    // import Post_Analytics from "../dashboard/Post Analytics";

    export default {
        // components: {
        //     Post_Analytics,
        // },
        data: () => ({
            tableTitle: "",
            // test data
            recruiter: {
                id: 65165,
                firstName: "Test",
                lastName: "Data",
                email: "johndoe@eldorastudios.com",
                profile: {
                    location: "Melbourne",
                    phone: "03 1234 5678",
                },
                notifications: "5",
                emailsPending: "200",
                newCandidates: "78",
                interviews: "70",
                jobsTotal: "15",
                offerAccepted: "53",
                offerDeclined: "13",
                recentHired: "8",
                inReview: "4",
                jobExpired: "23",
            },
            show: true,
            toShow: "",
            miniPage: "JobRecruiterDashboard",
            jritem: 0,
            headersInterviews: [{
                text: "Name",
                align: "left",
                sortable: false,
                value: "name",
            }, {
                text: "Date",
                value: "date",
            }, {
                text: "Time",
                value: "time",
            }, {
                text: "Job",
                value: "job",
            }, ],
            interviews: [{
                name: "James Bond",
                date: "11/11/2019",
                time: "9.30 AM",
                job: "Web Developer(Coles)",
            }, {
                name: "Lebron James",
                date: "11/11/2019",
                time: "9.30 AM",
                job: "Coach (Lakers)",
            }, {
                name: "James Smith",
                date: "11/11/2019",
                time: "9.30 AM",
                job: "Customer Service Manager (Apple)",
            }, {
                name: "Jane Doe",
                date: "11/11/2019",
                time: "9.30 AM",
                job: "Web Developer (Google)",
            }, ],
        }),
        mounted() {
            if (!this.$store.state.loginState) {
                this.$router.push("/login");
            }
        },
        methods: {
            modalTable(cardName) {
                this.tableTitle = cardName;
            },
        },
    };
</script>

<style scoped>
    .fluid {
        display: flex;
        justify-content: space-between;
        align-content: center;
    }
    
    .text {
        text-align: center;
    }
    
    .list {
        display: inline;
    }
    
    .dashboard-card {
        min-width: 23rem;
        min-height: 9rem;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    
    .header {
        display: block;
        padding: 6px 0px;
    }
    
    .header-left {
        display: inline-block;
    }
    
    .header-card {
        display: flex;
        float: right;
        font-size: 16px;
        font-weight: bold;
    }
    
    .header-card>* {
        margin-left: 20px;
    }
</style>
