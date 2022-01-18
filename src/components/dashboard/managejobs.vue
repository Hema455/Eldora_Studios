<template>
  <v-container>
    <div class="row justify-content-end">
      <div class="header-card">
        <b-card-title>Recruiter ID:1234</b-card-title>
        <b-icon class="h4 mb-2" icon="question-circle"></b-icon>
        <v-badge :content="1" color="green" overlap>
          <b-icon class="h4 mb-2" icon="bell-fill"></b-icon>
        </v-badge>
        <v-badge :content="3" color="red" overlap>
          <b-icon class="h4 mb-2" icon="envelope-fill"></b-icon>
        </v-badge>
      </div>
    </div>
    <v-form>
      <v-layout class="row">
        <div class="col-7 col-md-2">
          <button class="btn btn-primary btn-lg">post new jobs</button>
        </div>
        <div class="col-10 col-md-8">
          <input
            type="text"
            class="form-control"
            placeholder="Search your jobs"
            aria-label="Input group example"
            aria-describedby="btnGroupAddon"
          />
        </div>
      </v-layout>
    </v-form>

    <v-form class="mb-10">
      <v-card>
        <v-card-title class="bg-primary mb-8">
          <div class="row justify-content-between ml-2">
            <div class="col-8 col-md-3 bg-white rounded" style="text-align: center;">
              <span class="align-middle font-weight-bold" id="managejobs_title"
                >Active Jobs</span
              >
            </div>
            <div class="col-auto col-md-4">
              <input
                type="text"
                class="form-control"
                placeholder="Search your jobs"
                aria-label="Input group example"
                aria-describedby="btnGroupAddon"
              />
            </div>
          </div>
        </v-card-title>

        <div class="row align-items-center ml-5 jobsCard">
          <div
            class="col-10 col-md-6 col-xl-4 pr-md-6"
            v-for="(job, index) in activejobs"
            :key="index"
          >
            <v-card>
              <div class="card-body row">
                <div class="col-12 row">
                  <h4 class="card-title col-10">{{ job.title }}</h4>
                  <i class="fa fa-bell fa-2x col-1" v-if="job.notify"></i>
                </div>
                <div class="col">
                  <p class="card-text">{{ job.detail }}</p>
                </div>
              </div>
            </v-card>
          </div>
        </div>
        <div class="row justify-content-end ">
          <button
            class="btn btn-primary col-7 col-sm-3 col-md-2 mb-3 mr-10 mr-sm-0"
          >
            Manage
          </button>
          <button
            class="btn btn-primary col-7 col-sm-3 col-md-2 offset-sm-1 offset-md-2 mb-3 mr-5 mr-md-6"
          >
            More
          </button>
          <div class="col-2"></div>
        </div>
      </v-card>
    </v-form>
    <v-form class="pt-10">
      <v-card>
        <v-card-title class="bg-primary mb-8">
          <div class="row justify-content-between ml-2">
            <div class="col-8 col-md-3 bg-white rounded" style="text-align: center;">
              <span class="align-middle font-weight-bold" id="managejobs_title">
                Expired Jobs
              </span>
            </div>
            <div class="col-auto col-md-4">
              <input
                type="text"
                class="form-control"
                placeholder="Search your jobs"
                aria-label="Input group example"
                aria-describedby="btnGroupAddon"
              />
            </div>
          </div>
        </v-card-title>
       <div class="row align-items-center ml-5 jobsCard">
          <div
            class="col-10 col-md-6 col-xl-4 pr-md-6"
            v-for="(job, index) in expiredjobs"
            :key="index"
          >
            <v-card>
              <div class="card-body row">
                <div class="col-12 row">
                  <h4 class="card-title col-10">{{ job.title }}</h4>
                  <i class="fa fa-bell fa-2x col-1" v-if="job.notify"></i>
                </div>
                <div class="col">
                  <p class="card-text">{{ job.detail }}</p>
                </div>
              </div>
            </v-card>
          </div>
        </div>
        <div class="row justify-content-end ">
          <button
            type="submit"
            class="btn btn-primary col-7 col-sm-3 col-md-2 mb-3 mr-10 mr-sm-0"
          >
            Manage
          </button>
          <button
            type="submit"
            class="btn btn-primary col-7 col-sm-3 col-md-2 offset-sm-1 offset-md-2 mb-3 mr-5 mr-md-6"
          >
            More
          </button>
          <div class="col-2"></div>
        </div>
      </v-card>
    </v-form>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    isActive: false,
    activejobs: [
      {
        title: "place holders",
        notify: true,
        detail:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        title: "place holders 2",
        notify: false,

        detail:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        title: "place holders 3",
        notify: true,

        detail:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        title: "place holder 4",
        notify: false,

        detail:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
    expiredjobs: [
      {
        title: "place holders",
        notify: true,
        detail:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        title: "place holders 2",
        notify: false,

        detail:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        title: "place holders 3",
        notify: true,

        detail:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        title: "place holder 4",
        notify: false,

        detail:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
  }),
  methods: {
    notification() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
<style scoped>
.header-card {
  display: flex;
  font-weight: bold;
  margin-right: 4rem;
}
.header-card > * {
  margin-left: 18px;
}

@media (max-width: 768px) {
  #managejobs_title {
    font-size: 1rem;
  }
  .jobsCard {
    max-height: 700px;
    overflow: auto;
  }
}
</style>
