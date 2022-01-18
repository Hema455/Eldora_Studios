<template>
  <v-container class="d-flex flex-row mb-6">
    <v-layout justify-center>
      <v-flex xs12 md8 lg8>
        <v-card flat class="mx-auto background">
          <v-card-text class="display-1 text-center">Recent Activity</v-card-text>
        </v-card>
        <v-data-table
          :items="activity"
          :headers="headers"
          :items-per-page="5"
          class="elevation-1"
        ></v-data-table>
        <br />
        <v-card flat class="mx-auto background">
          <v-card-text class="display-1 text-center">Interviews</v-card-text>
        </v-card>
        <v-data-table
          :headers="headersInterviews"
          :items="interviews"
          :items-per-page="5"
          class="elevation-1"
        >></v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Description",
          align: "left",
          sortable: false,
          value: "description"
        },
        { text: "Application", value: "application" },
        { text: "Pre-screen", value: "prescreen" },
        { text: "Date", value: "date" }
      ],
      activity: [
        {
          description: "Job application",
          application: "Software Engineer",
          prescreen: "3/5",
          date: "11/11/2019"
        },
        {
          description: "Message",
          application: "Customer Service",
          prescreen: "3/5",
          date: "11/11/2019"
        },
        {
          description: "Job application",
          application: "Service Designer",
          prescreen: "3/5",
          date: "11/11/2019"
        },
        {
          description: "Message",
          application: "Data Scientist",
          prescreen: "3/5",
          date: "11/11/2019"
        }
      ],

      headersInterviews: [
        {
          text: "Name",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Date", value: "date" },
        { text: "Time", value: "time" },
        { text: "Job", value: "job" }
      ],
      interviews: [
        {
          name: "James Bond",
          date: "11/11/2019",
          time: "9.30 AM",
          job: "Web Developer(Coles)"
        },
        {
          name: "Lebron James",
          date: "11/11/2019",
          time: "9.30 AM",
          job: "Coach (Lakers)"
        },
        {
          name: "James Smith",
          date: "11/11/2019",
          time: "9.30 AM",
          job: "Customer Service Manager (Apple)"
        },
        {
          name: "Jane Doe",
          date: "11/11/2019",
          time: "9.30 AM",
          job: "Web Developer (Google)"
        }
      ]
    };
  }
};
</script>