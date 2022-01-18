<template>
  <v-card outline height="80vh">
    <div>
      <v-row justify="center">
        <v-col align="center" md="8" cols="12">
          <div class="d-flex justify-content-center" style="cursor: pointer;">
            <v-col
              :class="[filter ? activeClass : '', base]"
              sm="4"
              @click="filter = true"
            >
              <h6>Job Seeker</h6>
            </v-col>
            <v-col
              :class="[filter ? '' : activeClass, base]"
              sm="4"
              @click="filter = false"
            >
              <h6>Job Recruiter</h6>
            </v-col>
          </div>
        </v-col>
        <v-col md="4" cols="8">
          <v-text-field
            outlined
            label="Search"
            append-icon="mdi-magnify"
          ></v-text-field>
        </v-col>
      </v-row>
    </div>
    <v-row class="mx-5">
      <v-col>
        <v-card>
          <!-- seeker table  -->
          <v-simple-table
            v-if="filter"
            fixed-header
            style="max-height: 55vh; overflow-y: auto;"
          >
            <thead>
              <tr>
                <th class="text-left">
                  <h6 class="font-weight-black">SR. No.</h6>
                </th>
                <th class="text-left">
                  <h6 class="font-weight-black">Name</h6>
                </th>
                <th class="text-left">
                  <h6 class="font-weight-black">Image</h6>
                </th>
                <th class="text-left">
                  <h6 class="font-weight-black">job Profile</h6>
                </th>
                <th class="text-left">
                  <h6 class="font-weight-black">Expirience</h6>
                </th>
                <th class="text-left">
                  <h6 class="font-weight-black">Qualification</h6>
                </th>
                <th class="text-left">
                  <h6 class="font-weight-black">Location</h6>
                </th>
                <th class="text-left">
                  <h6 class="font-weight-black"></h6>
                </th>
              </tr>
            </thead>
            <tbody v-for="(seeker, index) in seekers" :key="seeker.id" class="">
              <tr :class="[seeker.status == 'normal' ? '' : blockClass]">
                <td class="font-weight-medium">{{ seeker.id }}</td>
                <td class="font-weight-medium">
                  {{ seeker.name }}
                </td>
                <td class="font-weight-medium">
                  <v-avatar rounded size="80">
                    <img :src="seeker.profilepic" />
                  </v-avatar>
                </td>
                <td class="font-weight-medium">
                  {{ seeker.job_profile }}
                </td>
                <td class="font-weight-medium">
                  {{ seeker.expirience }}
                </td>
                <td class="font-weight-medium">
                  {{ seeker.qualification }}
                </td>
                <td class="font-weight-medium">
                  {{ seeker.location }}
                </td>
                <td class="font-weight-medium">
                  <v-btn
                    v-if="seeker.status == 'normal'"
                    raised
                    color="blue lighten-1 text-white"
                    @click="block(index)"
                  >
                    Block
                  </v-btn>
                  <v-btn
                    v-else
                    raised
                    color="blue lighten-1 text-white"
                    @click="unBlock(index)"
                  >
                    UnBlock
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
          <!-- recruiter table -->
          <v-simple-table
            v-if="!filter"
            fixed-header
            style="max-height: 55vh; overflow-y: auto;"
          >
            <thead class="">
              <tr>
                <th class="text-left">
                  <h6 class="font-weight-black">SR. No.</h6>
                </th>
                <th class="text-left">
                  <h6 class="font-weight-black">Name</h6>
                </th>
                <th class="text-left">
                  <h6 class="font-weight-black">Logo</h6>
                </th>
                <th class="text-left">
                  <h6 class="font-weight-black">Description</h6>
                </th>
                <th class="text-left">
                  <h6 class="font-weight-black">Location</h6>
                </th>
                <th class="text-left"><h6></h6></th>
              </tr>
            </thead>
            <tbody v-for="(recruiter, index) in recruiters" :key="recruiter.id">
              <tr :class="[recruiter.status == 'normal' ? '' : blockClass]">
                <td class="font-weight-medium">{{ recruiter.id }}</td>
                <td class="font-weight-medium">
                  {{ recruiter.company }}
                </td>
                <td>
                  <v-list-item-avatar rounded size="80">
                    <img :src="recruiter.logo" />
                  </v-list-item-avatar>
                </td>
                <td class="font-weight-medium">
                  {{ recruiter.description }}
                </td>
                <td class="font-weight-medium">
                  {{ recruiter.location }}
                </td>
                <td class="font-weight-medium">
                  <v-btn
                    v-if="recruiter.status == 'normal'"
                    raised
                    color="blue lighten-1 text-white"
                    @click="block(index)"
                  >
                    Block
                  </v-btn>
                  <v-btn
                    v-else
                    raised
                    color="blue lighten-1 text-white"
                    @click="unBlock(index)"
                  >
                    UnBlock
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
    export default {
        name: "Manage Users",
        data: () => ({
            filter: true,
            activeClass: "activeClass",
            base: "card",
            activeText: "text-dark",
            block_id: "",
            blockClass: "grey lighten-1",
            recruiters: [{
                id: 1,
                company: "Deakin",
                logo: require("../../assets/apple.png"),
                location: " Feb/2014-Feb/2018",
                description: "test",
                status: "normal",
            }, {
                id: 2,
                company: "Mcdonals",
                logo: require("../../assets/Facebook.png"),
                location: " Feb/2014-Feb/2018",
                description: "test",
                status: "normal",
            }, {
                id: 3,
                company: "Mcdonals",
                logo: require("../../assets/coles.png"),
                location: " Feb/2014-Feb/2018",
                description: "test",
                status: "normal",
            }, {
                id: 4,
                company: "Mcdonals",
                logo: require("../../assets/deakin.png"),
                location: " Feb/2014-Feb/2018",
                description: "test",
                status: "blocked",
            }, {
                id: 5,
                company: "Mcdonals",
                logo: require("../../assets/google.png"),
                location: " Feb/2014-Feb/2018",
                description: "test",
                status: "normal",
            }, {
                id: 6,
                company: "Mcdonals",
                logo: require("../../assets/Tesla.png"),
                location: " Feb/2014-Feb/2018",
                description: "test",
                status: "blocked",
            }, ],
            seekers: [{
                id: 1,
                name: "Mark Andrews",
                location: " United states",
                expirience: "2 yrs",
                qualification: "MBA",
                job_profile: "Software Engineer",
                profilepic: "https://picsum.photos/200/300/?blur",
                status: "normal",
            }, {
                id: 2,
                name: "Christina Johnson",
                location: " United states",
                expirience: "2 yrs",
                qualification: "MBA",
                job_profile: "Data scientist",
                profilepic: "https://picsum.photos/seed/picsum/200/300",
                status: "normal",
            }, {
                id: 3,
                name: "Sunday Donald",
                location: " United states",
                expirience: "2 yrs",
                qualification: "MBA",
                job_profile: "Software Engineer",
                profilepic: "https://loremflickr.com/640/360",
                status: "normal",
            }, {
                id: 4,
                name: "William Smiths",
                location: " United states",
                expirience: "2 yrs",
                qualification: "MBA",
                job_profile: "Software Engineer",
                profilepic: "https://source.unsplash.com/user/erondu",
                status: "normal",
            }, {
                id: 5,
                name: "James Hernandez",
                location: " United states",
                expirience: "2 yrs",
                qualification: "MBA",
                job_profile: "Software Engineer",
                profilepic: "https://www.placecage.com/640/360",
                status: "normal",
            }, {
                id: 6,
                name: "Samuel Wilson",
                location: " United states",
                expirience: "2 yrs",
                qualification: "MBA",
                job_profile: "Software Engineer",
                profilepic: "https://www.stevensegallery.com/640/360",
                status: "normal",
            }, {
                id: 11,
                name: "Mark Andrews",
                location: " United states",
                expirience: "2 yrs",
                qualification: "MBA",
                job_profile: "Software Engineer",
                profilepic: "https://picsum.photos/200/300/?blur",
                status: "blocked",
            }, {
                id: 12,
                name: "Christina Johnson",
                location: " United states",
                expirience: "2 yrs",
                qualification: "MBA",
                job_profile: "Data scientist",
                profilepic: "https://picsum.photos/seed/picsum/200/300",
                status: "normal",
            }, {
                id: 13,
                name: "Sunday Donald",
                location: " United states",
                expirience: "2 yrs",
                qualification: "MBA",
                job_profile: "Software Engineer",
                profilepic: "https://loremflickr.com/640/360",
                status: "normal",
            }, {
                id: 14,
                name: "William Smiths",
                location: " United states",
                expirience: "2 yrs",
                qualification: "MBA",
                job_profile: "Software Engineer",
                profilepic: "https://source.unsplash.com/user/erondu",
                status: "blocked",
            }, {
                id: 15,
                name: "James Hernandez",
                location: " United states",
                expirience: "2 yrs",
                qualification: "MBA",
                job_profile: "Software Engineer",
                profilepic: "https://www.placecage.com/640/360",
                status: "blocked",
            }, {
                id: 16,
                name: "Samuel Wilson",
                location: " United states",
                expirience: "2 yrs",
                qualification: "MBA",
                job_profile: "Software Engineer",
                profilepic: "https://www.stevensegallery.com/640/360",
                status: "blocked",
            }, ],
        }),
        methods: {
            block(id) {
                if (this.filter == false) this.recruiters[id].status = "blocked";
                else this.seekers[id].status = "blocked";
            },
            unBlock(id) {
                if (this.filter == false) this.recruiters[id].status = "normal";
                else this.seekers[id].status = "normal";
            },
        },
    };
</script>

<style scoped>
    .activeClass {
        background-color: #4073ff;
        color: azure;
    }
    /* scroll style  */
    /* ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    } */
    /* Track */
    /* ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        -webkit-border-radius: 6px;
        border-radius: 6px;
    } */
    /* Handle */
    /* ::-webkit-scrollbar-thumb {
        -webkit-border-radius: 6px;
        border-radius: 6px;
        background: #3e81ed;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    } */
</style>