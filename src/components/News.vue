<template>
  <v-container>
    <v-row>
      <v-col class="text-uppercase text-center display-1">Lastest News</v-col>
    </v-row>
    <v-row>
      <v-col class="col-md-8 offset-md-2">
        <v-row>
          <v-col v-for="(item,i) in jobSeekerNews" :key="i"  class="col-lg-12 col-xl-6">
            <v-card>
              <v-row align="center">
                <v-col align="center" cols="5" class="pa-12">
                  <v-img class="py-auto" :src="item.img" max-height="150" contain />
                </v-col>
                <v-col cols="6">
                  <v-row>
                    <v-col align="center" class="title success--text">{{item.title}}</v-col>
                  </v-row>
                  <v-row>{{item.description}}</v-row>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    // the data should from server side
    jobSeekerNews: [
      {
        title: "A good resume: What to add and what to leave out",
        img: require("../assets/img.png"),
        description:
          "The thought of writing a resume fills many people with dread. However, all you need is a plan that covers both lay out and content that is most relevant to potential  ..."
      },
      {
        title: "CV template: Standard professional format",
        img: require("../assets/img.png"),
        description:
          "This CV template gives you an idea of how to lay out your resume in a professional modern format, giving specific details about your skills and experience ..."
      }
    ],
    jobRecruiterNews: []
  })
};
</script>
