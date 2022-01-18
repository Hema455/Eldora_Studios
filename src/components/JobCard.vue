<template>
  <v-card height="250">
    <div class="d-flex headline font-weight-bold justify-center success--text pt-2">{{job.title}}</div>
    <v-row>
      <v-col class="col-4 offset-1 pa-0">
        <div class="d-flex align-center justify-center" style="height:56px">
          <div class="subtitle-1 text-center font-weight-bold">{{job.company}}</div>
        </div>
      </v-col>
      <v-col class="col-6 pa-0">
        <div class="d-flex align-center justify-center" style="height:56px">
          <div class="subtitle-2 text-center font-italic">
            <v-icon>mdi-map-marker</v-icon>
            {{job.location}}
          </div>
        </div>
      </v-col>
    </v-row>

    <div class="d-flex align-center justify-center" style="height:60px">
      <div class="text-center subtitle-2 pa-2">{{job.industry}}</div>
    </div>

    <div class="d-flex justify-center">
      <v-tooltip top v-for="(badge,i) in job.badges" :key="i">
        <template v-slot:activator="{ on }">
          <v-img
            :src="badge.img"
            max-width="50"
            max-height="50"
            contain
            class="mx-1 mt-2"
            v-on="on"
          />
        </template>
        <span>{{badge.description}}</span>
      </v-tooltip>
    </div>
  </v-card>
</template>
<script>
  export default {
    data: () => ({}),
    //receive the props which is the job info
    props: ["job"],
    /*
    The job info data structure is
    {
        title: ,
        company: "",
        industry: "",
        location: "",
        badges: [
          {
            img: require("src link"),
            description: ""
          },
          .... up to 4
        ]
      },
    }
    */
  };
</script>
