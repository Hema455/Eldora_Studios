<template>
  <div>
    <!-- Notification Header and Title of The Page -->
    <b-card class="header">
      <!-- <h4 class="float-left">Candidate List</h4> -->
      <ul class="float-left breadcrumb font-weight-bold">
        <li class="" v-on:click="detailActive = false">
          <a>Candidate List</a>
        </li>
        <li v-if="detailActive" class="text-primary">Candidate Detail</li>
      </ul>

      <div class="header-card">
        <b-icon class="h4 mb-2" icon="question-circle"></b-icon>
        <v-badge :content="1" color="green" overlap>
          <b-icon class="h4 mb-2" icon="bell-fill"></b-icon>
        </v-badge>
        <v-badge :content="3" color="red" overlap>
          <b-icon class="h4 mb-2" icon="envelope-fill"></b-icon>
        </v-badge>
        <b-card-text>Recruiter ID:12345</b-card-text>
      </div>
    </b-card>

    <div v-if="detailActive">
      <CandidateDetails :candidate="CandidateDetail"> </CandidateDetails>
    </div>
    <div v-else>
      <b-card class="search">
        <v-row id="Head">
          <input
            type="text"
            class="form-control col-10 col-md-8"
            placeholder="Search your jobs"
            aria-label="Input group example"
            aria-describedby="btnGroupAddon"
          />
          <br />
          <v-btn color="primary" class="search-btn text-none white--text"
            >Search</v-btn
          >
        </v-row>
      </b-card>

      <!-- Candidate List Main Page -->
      <v-container class="body">
        <div>
          <b-container fluid style="background-color:white;">
            <v-row v-for="Candidates in Candidates" :key="Candidates.id">
              <v-col>
                <v-card class="mx-auto card" max-width="500" max-height="550">
                  <!-- Left Row Cards -->
                  <v-list-item three-line>
                    <b-avatar
                      class="profile"
                      size="100px"
                      :src="Candidates.profilepic"
                    ></b-avatar>

                    <v-list-item-content class="ma-3">
                      <v-list-item-title class="headline mb-1">{{
                        Candidates.name
                      }}</v-list-item-title>
                      <v-list-item-subtitle>{{
                        Candidates.location
                      }}</v-list-item-subtitle>
                      <div class="mb-4">{{ Candidates.designation }}</div>
                    </v-list-item-content>
                  </v-list-item>

                  <v-card-actions>
                    <v-btn
                      v-on:click="view_detail(Candidates)"
                      color="primary"
                      class="text-none white--text"
                      >View Profile</v-btn
                    >
                    <v-btn color="primary" class="text-none white--text"
                      >Shortlist</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col>
                <v-card class="mx-auto card" max-width="500" max-height="550">
                  <!-- Right Row Cards -->
                  <v-list-item three-line>
                    <b-avatar
                      :src="Candidates.profilepic"
                      class="profile"
                      size="90px"
                    ></b-avatar>

                    <v-list-item-content class="ma-3">
                      <v-list-item-title class="headline mb-1">{{
                        Candidates.name
                      }}</v-list-item-title>
                      <v-list-item-subtitle>{{
                        Candidates.location
                      }}</v-list-item-subtitle>
                      <div class="mb-4">{{ Candidates.designation }}</div>
                    </v-list-item-content>
                  </v-list-item>

                  <v-card-actions>
                    <v-btn
                      v-on:click="view_detail(Candidates)"
                      color="primary"
                      class="text-none white--text"
                      >View Profile</v-btn
                    >
                    <v-btn color="primary" class="text-none white--text"
                      >Shortlist</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </b-container>
          <div class="text-center">
            <v-pagination v-model="page" length="6"></v-pagination>
          </div>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
    import CandidateDetails from "./CandidateDetails";

    export default {
        scrollBehavior() {
            return {
                x: 0,
                y: 0,
            };
        },
        components: {
            CandidateDetails,
        },
        created() {},
        data: () => ({
            page: 10,
            detailActive: false,
            CandidateDetail: "",
            //test data
            Candidates: [{
                id: 1,
                name: "Mark Andrews",
                location: " United states",
                designation: "Software Engineer",
                profilepic: "https://picsum.photos/200/300/?blur",
            }, {
                id: 2,
                name: "Christina Johnson",
                location: " United states",
                designation: "Data scientist",
                profilepic: "https://picsum.photos/seed/picsum/200/300",
            }, {
                id: 3,
                name: "Sunday Donald",
                location: " United states",
                designation: "Software Engineer",
                profilepic: "https://loremflickr.com/640/360",
            }, {
                id: 4,
                name: "William Smiths",
                location: " United states",
                designation: "Software Engineer",
                profilepic: "https://source.unsplash.com/user/erondu",
            }, {
                id: 5,
                name: "James Hernandez",
                location: " United states",
                designation: "Software Engineer",
                profilepic: "https://www.placecage.com/640/360",
            }, {
                id: 6,
                name: "Samuel Wilson",
                location: " United states",
                designation: "Software Engineer",
                profilepic: "https://www.stevensegallery.com/640/360",
            }, ],
        }),
        methods: {
            view_detail(candidate) {
                this.CandidateDetail = candidate;
                window.scrollTo(0, 0);

                this.detailActive = !this.detailActive;
            },
        },
    };
</script>
<style scoped>
    .header {
        border: none;
    }
    
    .search {
        border-bottom: none;
    }
    
    .search>* {
        border-bottom: none;
    }
    
    .search-btn {
        margin-left: 10px;
    }
    
    .body {
        background-color: white;
        background-color: white;
        max-width: 100%;
    }
    
    ul.breadcrumb {
        padding: 0px 0px;
        list-style: none;
        background-color: white;
    }
    
    ul.breadcrumb li {
        display: inline;
        font-size: 25px;
    }
    
    ul.breadcrumb li+li:before {
        padding: 10px;
        color: black;
        content: "/\00a0";
    }
    
    ul.breadcrumb li a:hover {
        color: #01447e;
        text-decoration: underline;
        cursor: pointer;
    }
</style>