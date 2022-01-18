<template>
  <div>
    <!-- History Modal -->
    <div
      class="modal fade"
      id="modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="historyLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
          <v-layout justify-center>
            <v-flex xs12>
              <v-card flat class="mx-auto background">
                <v-card-text class="display-1 text-center">
                  Employment History
                </v-card-text>
              </v-card>
              <v-simple-table>
                <tbody v-for="employment in employments" :key="employment.id">
                  <tr>
                    <td class="font-weight-medium">{{ employment.company }}</td>
                    <td class="font-weight-medium">
                      {{ employment.designation }}
                    </td>
                    <td class="font-weight-medium">
                      {{ employment.duration }}
                    </td>
                    <td class="font-weight-medium">
                      <v-btn
                        text
                        color="success"
                        @click="historyShow = employment.id"
                      >
                        Edit
                        <v-icon right>mdi-pencil</v-icon>
                      </v-btn>
                    </td>
                  </tr>
                  <tr v-if="historyShow == employment.id">
                    <td class="">
                      <v-text-field
                        v-model="employment.company"
                        class="text-danger"
                        label="Enter New Information"
                      >
                      </v-text-field>
                    </td>
                    <td class="">
                      <v-text-field v-model="employment.designation">
                      </v-text-field>
                    </td>
                    <td class="">
                      <v-text-field v-model="employment.duration">
                      </v-text-field>
                    </td>
                    <td class="font-weight-medium">
                      <v-btn text color="error" @click="historyShow = ''">
                        Done
                      </v-btn>
                    </td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-flex>
          </v-layout>
        </div>
      </div>
    </div>
    <!-- Education Modal -->
    <div
      class="modal fade"
      id="educationModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="educationLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
          <v-layout justify-center>
            <v-flex xs12>
              <v-card flat class="mx-auto background">
                <v-card-text class="display-1 text-center">
                  Employment History
                </v-card-text>
              </v-card>
              <v-simple-table height="200">
                <tbody v-for="education in educations" :key="education.id">
                  <tr>
                    <td class="font-weight-medium">{{ education.name }}</td>
                    <td class="font-weight-medium">{{ education.course }}</td>
                    <td class="font-weight-medium">{{ education.duration }}</td>
                    <td class="font-weight-medium">
                      <v-btn
                        text
                        color="success"
                        @click="educationShow = education.id"
                      >
                        Edit
                        <v-icon right>mdi-pencil</v-icon>
                      </v-btn>
                    </td>
                  </tr>
                  <tr v-if="educationShow == education.id">
                    <td class="">
                      <v-text-field
                        v-model="education.name"
                        class="text-danger"
                        label="Enter New Information"
                      >
                      </v-text-field>
                    </td>
                    <td class="">
                      <v-text-field v-model="education.course"> </v-text-field>
                    </td>
                    <td class="">
                      <v-text-field v-model="education.duration">
                      </v-text-field>
                    </td>
                    <td class="font-weight-medium">
                      <v-btn text color="error" @click="educationShow = ''">
                        Done
                      </v-btn>
                    </td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-flex>
          </v-layout>
        </div>
      </div>
    </div>

    <v-container>
      <v-row>
        <!-- Professional Summary -->
        <v-col class="col-12 col-md-6">
          <v-card class="mx-auto " max-width="700" height="350">
            <v-card-text
              class="text-center headline font-weight-bold cardHead white--text py-2"
              >Professional Summary
            </v-card-text>
            <v-row
              v-if="!editShow"
              align="center"
              justify="center"
              class="mx-auto px-4"
            >
              <v-textarea outlined v-model="user.summary"> </v-textarea>
            </v-row>
            <v-row v-else style="height: 180px;" class="mx-auto px-4 pt-2">
              {{ user.summary }}
            </v-row>

            <v-row align="end" justify="center" class="py-2">
              <v-btn
                v-if="editShow"
                text
                color="success"
                @click="editShow = !editShow"
              >
                Edit
                <v-icon right>mdi-pencil</v-icon>
              </v-btn>
              <!-- button to edit badges -->
              <v-btn v-else text color="success" @click="editShow = !editShow">
                Done
              </v-btn>
            </v-row>
          </v-card>
        </v-col>
        <!-- Employment History card -->
        <v-col class="col-12 col-md-6">
          <v-card max-width="700" height="350" class="mx-auto">
            <v-card-text
              class="text-center headline font-weight-bold cardHead white--text py-2 "
              >Employment History
            </v-card-text>
            <v-simple-table height="200" class="">
              <tbody v-for="employment in employments" :key="employment.id">
                <tr>
                  <td class="font-weight-medium">{{ employment.company }}</td>
                  <td class="font-weight-medium">
                    {{ employment.designation }}
                  </td>
                  <td class="font-weight-medium">{{ employment.duration }}</td>
                  <td class="font-weight-medium">
                    <v-btn
                      text
                      color="success"
                      @click="historyShow = employment.id"
                    >
                      Edit
                      <v-icon right>mdi-pencil</v-icon>
                    </v-btn>
                  </td>
                </tr>
                <tr v-if="historyShow == employment.id">
                  <td class="">
                    <v-text-field
                      v-model="employment.company"
                      class="text-danger"
                      label="Enter New Information"
                    >
                    </v-text-field>
                  </td>
                  <td class="">
                    <v-text-field v-model="employment.designation">
                    </v-text-field>
                  </td>
                  <td class="">
                    <v-text-field v-model="employment.duration"> </v-text-field>
                  </td>
                  <td class="font-weight-medium">
                    <v-btn text color="error" @click="historyShow = ''">
                      Done
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
            <v-row justify="center" class="py-4 ">
              <!-- button to view all jobs info -->
              <v-btn
                data-toggle="modal"
                data-target="#modal"
                text
                color="success"
                >View all</v-btn
              >
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <!-- Skills card -->
        <v-col class="col-12 col-md-6">
          <v-card max-width="700" height="350" class="mx-auto">
            <v-card-text
              class="text-center headline font-weight-bold cardHead white--text py-2"
              >Skills:</v-card-text
            >
            <div v-if="!skillShow">
              <v-row justify="center" class="py-4" style="height: 180px;">
                <v-chip-group
                  active-class="light-blue--text accent-4"
                  column
                  v-for="(skill, i) in user.skill"
                  :key="i"
                >
                  <v-chip outlined>{{ skill }}</v-chip>
                </v-chip-group>
              </v-row>

              <v-row justify="center" align="end" class="py-4">
                <v-btn text color="success" @click="skillShow = !skillShow">
                  Edit Skills
                  <v-icon right>mdi-pencil</v-icon>
                </v-btn>
              </v-row>
            </div>

            <!-- Edit skills segment -->

            <v-combobox
              v-model="user.skill"
              :items="skills"
              chips
              clearable
              label="Your favorite hobbies"
              multiple
              solo
              v-if="skillShow"
              style="height: 180px;"
            >
              <template v-slot:selection="{ attrs, item, select, selected }">
                <v-chip
                  v-bind="attrs"
                  :input-value="selected"
                  color="primary"
                  close
                  @click="select"
                  @click:close="remove(item)"
                >
                  <strong>{{ item }}</strong>
                  &nbsp;
                </v-chip>
              </template>
</v-combobox>
<v-row v-if="skillShow" justify="center" class="py-4">
    <v-btn text color="success" @click="skillShow = !skillShow">
        Done
    </v-btn>
</v-row>
</v-card>
</v-col>
<!-- Educations card -->
<v-col>
    <v-card max-width="700" height="350" class="mx-auto">
        <v-card-text class="text-center headline font-weight-bold cardHead white--text py-2">Education</v-card-text>
        <v-simple-table height="200">
            <tbody v-for="education in educations" :key="education.id">
                <tr>
                    <td class="font-weight-medium">{{ education.name }}</td>
                    <td class="font-weight-medium">{{ education.course }}</td>
                    <td class="font-weight-medium">{{ education.duration }}</td>
                    <td class="font-weight-medium">
                        <v-btn text color="success" @click="educationShow = education.id">
                            Edit
                            <v-icon right>mdi-pencil</v-icon>
                        </v-btn>
                    </td>
                </tr>
                <tr v-if="educationShow == education.id">
                    <td class="">
                        <v-text-field v-model="education.name" class="text-danger" label="Enter New Information">
                        </v-text-field>
                    </td>
                    <td class="">
                        <v-text-field v-model="education.course"> </v-text-field>
                    </td>
                    <td class="">
                        <v-text-field v-model="education.duration"> </v-text-field>
                    </td>
                    <td class="font-weight-medium" color="">
                        <v-btn text color="error" @click="educationShow = ''">
                            Done
                        </v-btn>
                    </td>
                </tr>
            </tbody>
        </v-simple-table>
        <v-row justify="center" class="py-4">
            <!-- button to view all jobs info -->
            <v-btn text color="success" data-toggle="modal" data-target="#educationModal">View all</v-btn>
        </v-row>
    </v-card>
</v-col>
</v-row>
</v-container>
</div>
</template>

<script>
    export default {
        data: () => ({
            // test data
            editShow: true,
            show: false,
            historyShow: "",
            skillShow: false,
            employments: [{
                id: 1,
                company: "Deakin",
                designation: " Developer",
                duration: " Feb/2014-Feb/2018",
                description: "test",
            }, {
                id: 2,
                company: "Mcdonals",
                designation: " Developer",
                duration: " Feb/2014-Feb/2018",
                description: "test",
            }, {
                id: 3,
                company: "Mcdonals",
                designation: " Developer",
                duration: " Feb/2014-Feb/2018",
                description: "test",
            }, {
                id: 4,
                company: "Mcdonals",
                designation: " Developer",
                duration: " Feb/2014-Feb/2018",
                description: "test",
            }, {
                id: 5,
                company: "Mcdonals",
                designation: " Developer",
                duration: " Feb/2014-Feb/2018",
                description: "test",
            }, {
                id: 6,
                company: "Mcdonals",
                designation: " Developer",
                duration: " Feb/2014-Feb/2018",
                description: "test",
            }, ],
            educationShow: "",
            educations: [{
                id: 1,
                name: "Deakin University",
                course: " Diploma in IT",
                duration: "Apr 2014 - Apr 2018",
            }, {
                id: 2,
                name: "Ashwood High School",
                course: "High School",
                duration: "Apr 2014 - Apr 2018",
            }, ],
            selection1: "",
            selection2: "",
            user: {
                firstName: "John",
                lastName: "Smith",
                email: "john.smith@gmail.com",
                profile: {
                    location: "Melbourne",
                    phone: "045328234",
                },
                summary: "I’m a freelance multi-disciplinary graphic designer who’s delivered creative and engaging solutions across brand identity, print, packaging, and digital media.",
                skill: ["Node", "html", "PHP", "JavaScript"],
            },
            skills: ["Node", "React", "JavaScript", "Java", "C", "C#", "C++", "html"],
        }),
        methods: {
            remove(item) {
                this.user.skill.splice(this.user.skill.indexOf(item), 1);
                this.user.skill = [...this.user.skill];
            },
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
    
    .cardHead {
        background-color: rgb(15,117,188);
    }
</style>
