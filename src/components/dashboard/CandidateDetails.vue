<template>
  <div>
    <!-- <b-card>
      <h4 class="float-left">Candidate Details</h4>
      <div class="header-card">
        <b-icon class="h4 mb-2" icon="question-circle"></b-icon>
        <v-badge :content="1" color="green" overlap>
          <b-icon class="h4 mb-2" icon="bell-fill"></b-icon>
        </v-badge>
        <v-badge :content="3" color="red" overlap>
          <b-icon class="h4 mb-2" icon="envelope-fill"></b-icon>
        </v-badge>
        <b-card-text>Recruiter ID:1234</b-card-text>
      </div>
    </b-card> -->

    <v-container class="grey lighten-5" style="background-color:ebebeb;">
      <v-row no-gutters>
        <v-col cols="12" md="8" sm="12" xs="12">
          <v-card class="pa-2 ma-3" outlined tile>
            <v-list-item three-line>
              <v-list-item-avatar tile size="80" color="grey">
                <img :src="candidate.profilepic" alt="Candidate" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline mb-1">{{
                  candidate.name
                }}</v-list-item-title>
                <v-list-item-subtitle>{{
                  candidate.designation
                }}</v-list-item-subtitle>
                <div class="mb-4">{{ candidate.location }}</div>
              </v-list-item-content>
            </v-list-item>

            <p>
              <v-icon>mdi-map-marker</v-icon> Ap #867-859 Sit Road, Azusa New
              York 39531
            </p>
            <hr />
            <span> <v-icon>mdi-phone</v-icon> +1 254 86 954 </span>
            <span class="float-right mr-10">
              <v-icon>mdi-contact-mail</v-icon> andrews.mark@gmail.com
            </span>
          </v-card>
          <div class="ma-2">
            <h4>Description</h4>
            <span class="subtitile-1"
              >I am dedicated software engineer with 5+ years of industry
              expertise. I have a knack for implementing my creative ideas into
              reality. To reshape my career, I am looking forward for new
              opportunities.</span
            >
          </div>
          <hr />
          <div class="ma-2">
            <h4>Education</h4>
            <span class="text-primary">B.Tech in Computer Science</span>
            <p class="text-justify font-weight-regular">
              <span class="font-weight-black"
                >National University (2008 - 2012)</span
              >
              <br />
              Obtained the understanding of theoretical concepts through the
              study of topics related.
            </p>

            <span class="text-primary">Diploma in Computer Science</span>
            <p class="text-justify font-weight-regular">
              <span class="font-weight-black"
                >Harvard University (2005 - 2008)</span
              ><br />
              Commenced the learning with basics and experiments in the same
              module.
            </p>
          </div>
          <hr />
          <div class="ma-2">
            <h4>Experience</h4>
            <span class="text-primary">Software Engineer</span>
            <p class="text-justify font-weight-regular">
              <span class="font-weight-black">Sapient Corporation</span><br />
              May 2014 - Present <br />
              Obtained the understanding of theoretical concepts through the
              study of topics related.
            </p>

            <span class="text-primary">UI/UX Designer</span>
            <p class="text-justify font-weight-regular">
              <span class="font-weight-black">Coders Technologies </span><br />
              August 2012 - April 2014 <br />
              Obtained the understanding of theoretical concepts through the
              study of topics related.
            </p>
          </div>
        </v-col>
        <v-col cols="12" md="4" sm="12" xs="12">
          <v-card class="pa-2 ma-3" outlined tile>
            <v-card-actions>
              <v-btn block color="primary" class="white--text">
                Download
                <v-icon primary>mdi-cloud-download </v-icon>
              </v-btn>
            </v-card-actions>
            <v-list-item>
              <v-list-item-content>
                <b-card-text>Expected Salary: $ 200000 PA </b-card-text>
                <b-card-text>Qualification: B.Tech</b-card-text>
                <b-card-text>D.O.B. : 22 Aug 1985</b-card-text>
              </v-list-item-content>
            </v-list-item>

            <v-form ref="form">
              <p class="display-1 text--dark ma-2">
                Quick Contact
              </p>
              <v-text-field label="Enter your name" required></v-text-field>
              <v-text-field label="Enter contact no." required></v-text-field>

              <v-text-field
                label="Enter e-mail address"
                required
              ></v-text-field>

              <v-textarea
                prepend-inner-icon="mdi-comment"
                class="mx-2"
                label="Enter your message"
                rows="4"
                row-height="30"
              ></v-textarea>
              <div class="text-center">
                <v-btn color="error" class="ma-4">
                  Send Message
                </v-btn>
              </div>
            </v-form>
          </v-card>

          <!-- <v-toolbar-title class="text--dark mt-2">Skills</v-toolbar-title> -->
          <div>
            <p class="display-1 text--dark ml-2">
              Skills
            </p>
            <v-btn class="ma-1" rounded color="primary" dark>Adobe XD</v-btn>
            <v-btn class="ma-1" rounded color="primary" dark>Web Design</v-btn>
            <v-btn class="ma-1" rounded color="primary" dark
              >Web Development</v-btn
            >
            <v-btn class="ma-1" rounded color="primary" dark>Jquery</v-btn>
            <v-btn class="ma-1" rounded color="primary" dark>PHP</v-btn>
            <v-btn class="ma-1" rounded color="primary" dark>Java</v-btn>
            <v-btn class="ma-1" rounded color="primary" dark>C#</v-btn>
            <v-btn class="ma-1" rounded color="primary" dark
              >Machine Learning</v-btn
            >
            <v-btn class="ma-1" rounded color="primary" dark>JavaScript</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
    export default {
        scrollBehavior() {
            return {
                x: 0,
                y: 0,
            };
        },
        data: () => ({}),
        //receive the props which is the job info
        props: ["candidate"],
    };
</script>