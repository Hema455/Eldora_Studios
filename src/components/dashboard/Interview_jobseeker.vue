<template>
  <div>
    <b-card no-body>
      <b-tabs card align="center" content-class="mt-3" justified>
        <b-tab title="All Interview" active>
          <v-expansion-panels
            popout
            focusable
            v-model="panel"
            multiple
            class="d-flex align-baseline"
          >
            <v-expansion-panel
              v-for="interview in interviews"
              :key="interview.id"
            >
              <v-expansion-panel-header>
                <v-row>
                  <v-col>
                    <div class="d-flex align-baseline">
                      <span class="font-weight-bold mr-5">{{
                        interview.jobInfo.position
                      }}</span>
                      <div v-if="interview.status == 'Rejected'">
                        <span class="pr-2 text-danger">{{
                          interview.status
                        }}</span>
                        <v-icon color="red darken-2">mdi-cancel</v-icon>
                      </div>
                      <div v-else>
                        <span class="pr-2 text-success">{{
                          interview.status
                        }}</span>
                        <v-icon color="green darken-2">mdi-cached</v-icon>
                      </div>
                    </div>
                    <v-row>
                      <v-col>
                        <span class="font-weight-bold">{{
                          interview.jobInfo.company
                        }}</span>
                        <v-img
                          :src="interview.jobInfo.company_logo"
                          class="py-4"
                          contain
                          max-width="40"
                        ></v-img>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col
                    ><div>
                      <p class="font-weight-bold">
                        Applied : {{ interview.applied_date | format }}
                      </p>
                      <p>
                        {{
                          callDate(interview.applied_date, (today = new Date()))
                        }}
                      </p>
                    </div>
                    <div
                      v-bind:class="[
                        isFuture(interview.interview_date)
                          ? errorClass
                          : activeClass,
                      ]"
                    >
                      <p class="font-weight-bold">
                        Interview : {{ interview.interview_date | format }}
                      </p>
                      <p>
                        {{ checkFuture(interview.interview_date) }}
                      </p>
                    </div>
                    <br />
                  </v-col>
                </v-row>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-col>
                  <v-row>
                    <v-btn small color="primary" href="/#/jobdescription">
                      Go To Post</v-btn
                    >
                  </v-row>
                </v-col>
                {{ interview.jobInfo.job_description }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </b-tab>
        <b-tab title="Upcoming Interview">
          <v-expansion-panels
            popout
            focusable
            v-model="panel"
            multiple
            class="d-flex"
          >
            <v-expansion-panel
              v-for="interview in interviews"
              :key="interview.id"
              class=""
            >
              <div v-if="!isFuture(interview.interview_date)">
                <v-expansion-panel-header>
                  <v-row>
                    <v-col>
                      <div class="d-flex align-baseline">
                        <span class="font-weight-bold mr-5">{{
                          interview.jobInfo.position
                        }}</span>
                        <div v-if="interview.status == 'Rejected'">
                          <span class="pr-2 text-danger">{{
                            interview.status
                          }}</span>
                          <v-icon color="red darken-2">mdi-cancel</v-icon>
                        </div>
                        <div v-else>
                          <span class="pr-2 text-success">{{
                            interview.status
                          }}</span>
                          <v-icon color="green darken-2">mdi-cached</v-icon>
                        </div>
                      </div>
                      <v-row>
                        <v-col>
                          <span class="font-weight-bold">{{
                            interview.jobInfo.company
                          }}</span>
                          <v-img
                            :src="interview.jobInfo.company_logo"
                            class="py-4"
                            contain
                            max-width="40"
                          ></v-img>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col
                      ><div>
                        <p class="font-weight-bold">
                          Applied : {{ interview.applied_date | format }}
                        </p>
                        <p>
                          {{
                            callDate(
                              interview.applied_date,
                              (today = new Date())
                            )
                          }}
                        </p>
                      </div>
                      <div
                        v-bind:class="[
                          isFuture(interview.interview_date)
                            ? errorClass
                            : activeClass,
                        ]"
                      >
                        <p class="font-weight-bold">
                          Interview : {{ interview.interview_date | format }}
                        </p>
                        <p>
                          {{ checkFuture(interview.interview_date) }}
                        </p>
                      </div>
                      <br />
                    </v-col>
                  </v-row>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-col>
                    <v-row>
                      <v-btn small color="primary" href="/#/jobdescription">
                        Go To Post</v-btn
                      >
                    </v-row>
                  </v-col>
                  {{ interview.jobInfo.job_description }}
                </v-expansion-panel-content>
              </div>
            </v-expansion-panel>
          </v-expansion-panels>
        </b-tab>
        <b-tab title="Past Interview">
          <v-expansion-panels
            popout
            focusable
            v-model="panel"
            multiple
            class="d-flex"
          >
            <v-expansion-panel
              v-for="interview in interviews"
              :key="interview.id"
            >
              <div v-if="isFuture(interview.interview_date)">
                <v-expansion-panel-header>
                  <v-row>
                    <v-col>
                      <div class="d-flex align-baseline">
                        <span class="font-weight-bold mr-5">{{
                          interview.jobInfo.position
                        }}</span>
                        <div v-if="interview.status == 'Rejected'">
                          <span class="pr-2 text-danger">{{
                            interview.status
                          }}</span>
                          <v-icon color="red darken-2">mdi-cancel</v-icon>
                        </div>
                        <div v-else>
                          <span class="pr-2 text-success">{{
                            interview.status
                          }}</span>
                          <v-icon color="green darken-2">mdi-cached</v-icon>
                        </div>
                      </div>
                      <v-row>
                        <v-col>
                          <span class="font-weight-bold">{{
                            interview.jobInfo.company
                          }}</span>
                          <v-img
                            :src="interview.jobInfo.company_logo"
                            class="py-4"
                            contain
                            max-width="40"
                          ></v-img>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col
                      ><div>
                        <p class="font-weight-bold">
                          Applied : {{ interview.applied_date | format }}
                        </p>
                        <p>
                          {{
                            callDate(
                              interview.applied_date,
                              (today = new Date())
                            )
                          }}
                        </p>
                      </div>
                      <div
                        v-bind:class="[
                          isFuture(interview.interview_date)
                            ? errorClass
                            : activeClass,
                        ]"
                      >
                        <p class="font-weight-bold">
                          Interview : {{ interview.interview_date | format }}
                        </p>
                        <p>
                          {{ checkFuture(interview.interview_date) }}
                        </p>
                      </div>
                      <br />
                    </v-col>
                  </v-row>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-col>
                    <v-row>
                      <v-btn small color="primary" href="/#/jobdescription">
                        Go To Post</v-btn
                      >
                    </v-row>
                  </v-col>
                  {{ interview.jobInfo.job_description }}
                </v-expansion-panel-content>
              </div>
            </v-expansion-panel>
          </v-expansion-panels>
        </b-tab>
        <b-tab title="Calendar">
          <!-- <vue-cal
            class="vuecal--blue-theme"
            :time-from="6 * 60"
            :time-to="23 * 60"
            :time="true"
            :disable-views="['years', 'year']"
            :events="interviews"
            style="min-height:650px; max-height: 650px;"
          >
          </vue-cal> -->
          <v-col>
            <v-sheet>
              <v-btn fab text small color="grey darken-2" @click="prev">
                <v-icon small>mdi-chevron-left</v-icon>
              </v-btn>
              <v-btn fab text small color="grey darken-2" @click="next">
                <v-icon small>mdi-chevron-right</v-icon>
              </v-btn>
              <v-toolbar-title>
                Today: {{ today | formatDate }}
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-calendar
                v-model="focus"
                ref="calendar"
                :now="today"
                :value="today"
                :events="interviews"
                :event-color="getEventColor"
                type="month"
              ></v-calendar>
            </v-sheet>
          </v-col>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>
<script>
    // In your Vue.js component.
    // import VueCal from "vue-cal";
    // import "vue-cal/dist/vuecal.css";
    export default {
        components: {
            // VueCal,
        },
        data: () => ({
            activeClass: "text-success",
            errorClass: "text-danger",

            focus: "",
            type: "month",
            selectedEvent: {},
            events: [],

            selectedElement: null,
            selectedOpen: false,
            colors: [
                "blue",
                "indigo",
                "deep-purple",
                "cyan",
                "green",
                "orange",
                "grey darken-1",
            ],
            today: new Date(),

            interviews: [{
                id: 0,
                jobInfo: {
                    company: "Deakin",
                    position: "Network Engineer",
                    job_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ...",
                    company_location: "Somewhere",
                    company_logo: require("../../assets/deakin.png"),
                },
                status: "Rejected",
                applied_date: "2020-08-12",
                interview_date: "2020-08-25 15:20:23",
                start: "2020-08-25 15:20:23",
                end: "2020-08-25 15:50:23",
                name: "Deakin",
            }, {
                id: 1,
                jobInfo: {
                    company: "Google",
                    position: "Network Engineer",
                    job_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    company_location: "accross the street",
                    company_logo: require("../../assets/google.png"),
                },
                status: "In Review",
                applied_date: "2020-08-15",
                interview_date: "2020-9-30 16:20:23",
                start: "2020-08-12 16:20:23",
                end: "2020-08-12 16:50:23",
                name: "Google",
            }, {
                id: 2,
                jobInfo: {
                    company: "Apple",
                    position: "Network Engineer",
                    job_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    company_location: "that place",
                    company_logo: require("../../assets/apple.png"),
                },
                status: "Rejected",
                applied_date: "2020-03-25",
                interview_date: "2020-03-17 14:00",
                start: "2020-08-20 14:00",
                end: "2020-08-20 14:30",
                name: "Apple",
            }, {
                id: 3,
                jobInfo: {
                    company: "Coles",
                    position: "Network Engineer",
                    job_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    company_location: "this place",
                    company_logo: require("../../assets/coles.png"),
                },
                status: "In Review",
                applied_date: "2020-07-25",
                interview_date: "2020-10-22 14:00",

                start: "2020-08-22 14:00",
                end: "2020-08-22 17:30",
                name: "Coles",
            }, {
                id: 4,
                jobInfo: {
                    company: "Facebook",
                    position: "Network Engineer",
                    job_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    company_location: "that place",
                    company_logo: require("../../assets/Facebook.png"),
                },
                status: "Rejected",
                applied_date: "2020-03-25",
                interview_date: "2020-03-17 16:00",
                start: "2020-08-22 16:00",
                end: "2020-08-22 20:30",
                name: "Facebook",
            }, ],
        }),
        mounted() {
            // console.log("ref: " + this.$refs.calendar.prev);

            this.$refs.calendar.scrollToTime("08:00");
            this.$refs.calendar.checkChange();
        },
        created() {},
        methods: {
            isFuture(date) {
                var today = new Date();
                var d = new Date(date);
                if (d < today) {
                    // console.log("Selected date is in the past");

                    return true;
                } else {
                    // console.log("Selected date is NOT in the past");

                    return false;
                }
            },
            checkFuture(date) {
                if (this.isFuture(date)) {
                    return this.callDate(date, new Date());
                } else return this.callDate(new Date(), date);
            },

            // calendar methods
            getEventColor() {
                return this.colors[this.rnd(0, this.colors.length - 1)];
            },
            setToday() {
                this.focus = "";
            },
            prev() {
                this.$refs.calendar.prev();
            },
            next() {
                this.$refs.calendar.next();
            },
            rnd(a, b) {
                return Math.floor((b - a + 1) * Math.random()) + a;
            },
            updateRange({
                start,
                end
            }) {
                const events = [];

                const min = new Date(`${start.date}T00:00:00`);
                const max = new Date(`${end.date}T23:59:59`);
                const days = (max.getTime() - min.getTime()) / 86400000;
                const eventCount = this.rnd(days, days + 20);

                for (let i = 0; i < eventCount; i++) {
                    const allDay = this.rnd(0, 3) === 0;
                    const firstTimestamp = this.rnd(min.getTime(), max.getTime());
                    const first = new Date(firstTimestamp - (firstTimestamp % 900000));
                    const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000;
                    const second = new Date(first.getTime() + secondTimestamp);

                    events.push({
                        name: this.names[this.rnd(0, this.names.length - 1)],
                        start: first,
                        end: second,
                        color: this.colors[this.rnd(0, this.colors.length - 1)],
                        timed: !allDay,
                    });
                }

                this.events = events;
            },

            callDate(startDate, endDate) {
                var moment = require("moment");
                moment().format();
                // var today = new Date();
                var date1 = new Date(startDate);
                var date2 = new Date(endDate);
                var b = moment(date1);
                var a = moment(date2);
                var interval = ["year", "month", "week", "day"];
                var intervals = ["years", "months", "weeks", "days"];
                var out = [];

                for (var i = 0; i < intervals.length; i++) {
                    var diff = a.diff(b, intervals[i]);
                    b.add(diff, intervals[i]);

                    if (diff !== 0) {
                        if (diff > 1) out.push(diff + " " + intervals[i]);
                        else out.push(diff + " " + interval[i]);
                    }
                }
                return out.join(", ");
            },
        },
    };
</script>
<style scoped>
    .vuecal__event {
        color: #f8f9fa !important;
        background-color: #007bff !important;
    }
</style>