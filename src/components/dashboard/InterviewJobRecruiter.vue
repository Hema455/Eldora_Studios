<template>
    <div>
        <!--Main Header-->
        <b-card>
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
        </b-card>
            <!--***End***-->
            <!--Main Interview content-->
            <v-tabs v-model="tab"
                    fixed-tabs
                    background-color="primary"
                    dark
            >
                <v-tab>
                    <p>Scheduled Interviews</p>
                </v-tab>
                <v-tab>
                    <p>Past Interviews</p>
                </v-tab>
                <v-tab>
                    <p>Calendar</p>
                </v-tab>
            </v-tabs>
            <!--***Tab contents***-->
            <v-tabs-items v-model="tab" class="tab_content">

                <v-tab-item>
                    <v-dialog v-model="dialog" persistent max-width="600px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-card v-bind="attrs"
                                    v-on="on"
                                    v-for="interview in scheduledInterviews"
                                    :key="interview.id"
                                    shaped light ripple hover class="mx-auto tab_card" >
                                    <v-list-item >
                                    <v-list-item-content>
                                        <div class="item_content">
                                            <div>
                                                <br/>
                                                <p><strong>Date:{{interview.date}}</strong></p>
                                                <p><strong>Time: {{interview.time}}</strong></p>
                                            </div>
                                            <div>
                                                <br>
                                                <p><strong>Interviewee:</strong> {{interview.name}}</p>
                                                <p><strong>Position:</strong> {{interview.position}}</p>
                                            </div>
                                            <div>
                                                <br>
                                                <p><strong>Company:</strong> {{interview.employer}}</p>
                                                <p><strong>Interviewer:</strong> {{interview.interviewer}}</p>
                                            </div>
                                            <div>
                                                <v-list-item-avatar size="70" >
                                                    <img
                                                            :src="interview.company_logo"
                                                            alt="John"
                                                    >
                                                </v-list-item-avatar>

                                            </div>

                                        </div>

                                    </v-list-item-content>
                                </v-list-item>

                                <v-card-actions>
                                    <v-btn class="ma-2" tile  color="success">
                                        <v-icon left>mdi-clipboard-outline</v-icon> Start
                                    </v-btn>
                                    <v-btn class="ma-2" tile  color="error">
                                        <v-icon left>mdi-delete</v-icon> DELETE
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="headline">Candidate Profile</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field label="Legal first name*" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field label="Legal middle name"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field
                                                    label="Legal last name*"
                                                    required
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field label="Email*" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6">
                                            <v-select
                                                    :items="['0-17', '18-29', '30-54', '54+']"
                                                    label="Age*"
                                                    required
                                            ></v-select>
                                        </v-col>
                                        <v-col cols="12" sm="6">
                                            <v-autocomplete
                                                    :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                                                    label="Interests"
                                                    multiple
                                            ></v-autocomplete>
                                        </v-col>
                                        <hr/>
                                        <v-col cols="12">
                                            <h5>Candidate Score</h5>
                                        </v-col>

                                        <v-col cols="12">
                                            <p>On-Time: <v-rating v-model="on_time_rating"></v-rating></p>
                                            <p>Confidence: <v-rating v-model="Confidence_rating"></v-rating></p>
                                            <p>Strengths: <v-rating v-model="Strengths_rating"></v-rating></p>
                                            <p>Weaknesses: <v-rating v-model="Weaknesses_rating"></v-rating></p>
                                            <p>Self-Awareness: <v-rating v-model="Awareness_rating"></v-rating></p>
                                            <p>Use of Jargon: <v-rating v-model="jargon_rating"></v-rating></p>
                                            <p>Resume Accuracy: <v-rating v-model="Accuracy_rating"></v-rating></p>
                                            <p>Job Description comprehension: <v-rating v-model="comprehension_rating"></v-rating></p>
                                            <hr/>
                                        </v-col>
                                    </v-row>
                                    <v-col cols="12">
                                        <v-textarea
                                                name="input-7-1"
                                                filled
                                                label="Further Comments"
                                                auto-grow
                                        ></v-textarea>
                                    </v-col>
                                </v-container>
                                <small>*indicates required field</small>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                                <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-tab-item>
                <v-tab-item>
                    <v-dialog v-model="dialog" persistent max-width="600px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-card v-bind="attrs"
                                    v-on="on" v-for="interview in pastInterviews"
                            :key="interview.id"
                            hover class="mx-auto tab_card" >
                        <v-list-item >
                            <v-list-item-content>
                                <div class="item_content">

                                    <div>
                                        <br/>
                                        <p><strong>Date:{{interview.date}}</strong></p>
                                        <p><strong>Time: {{interview.time}}</strong></p>
                                    </div>
                                    <div>
                                        <br>
                                        <p><strong>Interviewee:</strong> {{interview.name}}</p>
                                        <p><strong>Position:</strong> {{interview.position}}</p>
                                    </div>
                                    <div>
                                        <br>
                                        <p><strong>Company:</strong> {{interview.employer}}</p>
                                        <p><strong>Interviewer:</strong> {{interview.interviewer}}</p>
                                    </div>
                                    <div>
                                        <v-list-item-avatar size="70" >
                                            <img
                                                    :src="interview.company_logo"
                                                    alt="John"
                                            >
                                        </v-list-item-avatar>

                                    </div>

                                </div>

                            </v-list-item-content>
                        </v-list-item>

                        <v-card-actions>
                            <v-btn class="ma-2" tile  color="success">
                                <v-icon left>mdi-clipboard-outline</v-icon> VIEW
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="headline">Candidate Profile</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field label="Legal first name*" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field label="Legal middle name"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field
                                                    label="Legal last name*"
                                                    required
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field label="Email*" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6">
                                            <v-select
                                                    :items="['0-17', '18-29', '30-54', '54+']"
                                                    label="Age*"
                                                    required
                                            ></v-select>
                                        </v-col>
                                        <v-col cols="12" sm="6">
                                            <v-autocomplete
                                                    :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                                                    label="Interests"
                                                    multiple
                                            ></v-autocomplete>
                                        </v-col>
                                        <hr/>
                                        <v-col cols="12">
                                            <h5>Candidate Score</h5>
                                        </v-col>

                                        <v-col cols="12">
                                            <p>On-Time: <v-rating v-model="on_time_rating"></v-rating></p>
                                            <p>Confidence: <v-rating v-model="Confidence_rating"></v-rating></p>
                                            <p>Strengths: <v-rating v-model="Strengths_rating"></v-rating></p>
                                            <p>Weaknesses: <v-rating v-model="Weaknesses_rating"></v-rating></p>
                                            <p>Self-Awareness: <v-rating v-model="Awareness_rating"></v-rating></p>
                                            <p>Use of Jargon: <v-rating v-model="jargon_rating"></v-rating></p>
                                            <p>Resume Accuracy: <v-rating v-model="Accuracy_rating"></v-rating></p>
                                            <p>Job Description comprehension: <v-rating v-model="comprehension_rating"></v-rating></p>
                                            <hr/>
                                        </v-col>
                                    </v-row>
                                    <v-col cols="12">
                                        <v-textarea
                                                name="input-7-1"
                                                filled
                                                label="Further Comments"
                                                auto-grow
                                        ></v-textarea>
                                    </v-col>
                                </v-container>
                                <small>*indicates required field</small>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                                <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>

                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-tab-item>
                <v-tab-item>
                    <v-row>
                        <v-col>
                            <v-sheet>
                                <v-calendar
                                        ref="calendar"
                                        :now="today"
                                        :value="today"
                                        :events="interviews"
                                        :event-color="getEventColor"
                                        type="month"
                                ></v-calendar>
                                <!--<v-menu-->
                                        <!--v-model="selectedOpen"-->
                                        <!--:close-on-content-click="false"-->
                                        <!--:activator="selectedElement"-->
                                        <!--offset-x-->
                                <!--&gt;-->
                                    <!--<v-card-->
                                            <!--color="grey lighten-4"-->
                                            <!--min-width="350px"-->
                                            <!--flat-->
                                    <!--&gt;-->
                                        <!--<v-toolbar-->
                                                <!--:color="selectedEvent.color"-->
                                                <!--dark-->
                                        <!--&gt;-->
                                            <!--<v-btn icon>-->
                                                <!--<v-icon>mdi-pencil</v-icon>-->
                                            <!--</v-btn>-->
                                            <!--<v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>-->
                                            <!--<v-spacer></v-spacer>-->
                                            <!--<v-btn icon>-->
                                                <!--<v-icon>mdi-heart</v-icon>-->
                                            <!--</v-btn>-->
                                            <!--<v-btn icon>-->
                                                <!--<v-icon>mdi-dots-vertical</v-icon>-->
                                            <!--</v-btn>-->
                                        <!--</v-toolbar>-->
                                        <!--<v-card-text>-->
                                            <!--<span v-html="selectedEvent.details"></span>-->
                                        <!--</v-card-text>-->
                                        <!--<v-card-actions>-->
                                            <!--<v-btn-->
                                                    <!--text-->
                                                    <!--color="secondary"-->
                                                    <!--@click="selectedOpen = false"-->
                                            <!--&gt;-->
                                                <!--Cancel-->
                                            <!--</v-btn>-->
                                        <!--</v-card-actions>-->
                                    <!--</v-card>-->
                                <!--</v-menu>-->
                            </v-sheet>
                        </v-col>
                    </v-row>
                    <!--<v-card flat>-->
                        <!--<v-card-text>{ item 3}</v-card-text>-->
                    <!--</v-card>-->
                </v-tab-item>
            </v-tabs-items>
    </div>

</template>

    <script>
    export default {
        name: "InterviewJobRecruiter",
        data () {
            return {
                dialog: false,
                tab: null,
                on_time_rating:'',
                Confidence_rating:'',
                Strengths_rating:'',
                Weaknesses_rating:'',
                Awareness_rating:'',
                jargon_rating:'',
                Accuracy_rating:'',
                comprehension_rating:'',
                selectedEvent: {},
                selectedElement: null,
                selectedOpen: false,
                colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
                today: '2020-08-05',
                interviews: [
                    {
                        id: 1,
                        name:'John Smith',
                        position:'UI/UX Designer',
                        employer: "Deakin",
                        company_logo: require('../../assets/deakin.png'),
                        application_date:'24/08/2020',
                        time:'11:00 am',
                        interviewer:'Jean Gray',
                        scheduled:true,
                        on_time:'',
                        confidence:'',
                        strengths:'',
                        weaknesses:'',
                        self_awareness:'',
                        jargon:'',
                        resume_accuracy:'',
                        jd_comprehension:'',
                        comments:'',
                        start: '2020-08-07 12:00',
                        end: '2020-08-07 17:00'
                    },
                    {
                        id: 2,
                        name:'Mark Frost',
                        position:'Software Engineer',
                        employer: "Apple",
                        company_logo: require('../../assets/apple.png'),
                        date:'24/08/2020',
                        time:'11:00 am',
                        interviewer:'Jean Gray',
                        scheduled:false,
                        on_time:'',
                        confidence:'',
                        strengths:'',
                        weaknesses:'',
                        self_awareness:'',
                        jargon:'',
                        resume_accuracy:'',
                        jd_comprehension:'',
                        comments:'',
                        start: '2020-08-04 17:00',
                        end: '2020-08-04 20:00'

                    },
                    {
                        id: 3,
                        name:'Mage Bryson',
                        position:'Chief Finance Officer',
                        employer: "Coles",
                        company_logo: require('../../assets/coles.png'),
                        date:'24/08/2020',
                        time:'11:00 am',
                        interviewer:'Jean Gray',
                        scheduled:true,
                        on_time:'',
                        confidence:'',
                        strengths:'',
                        weaknesses:'',
                        self_awareness:'',
                        jargon:'',
                        resume_accuracy:'',
                        jd_comprehension:'',
                        comments:'',
                        start: '2020-08-03 09:00',
                        end: '2020-08-03 10:00'

                    },
                    {
                        id: 4,
                        name:'Andrew Mcmillan',
                        position:'Lead Publisher',
                        employer: "Google",
                        company_logo: require('../../assets/google.png'),
                        date:'24/08/2020',
                        time:'11:00 am',
                        interviewer:'Jean Gray',
                        scheduled:false,
                        on_time:'',
                        confidence:'',
                        strengths:'',
                        weaknesses:'',
                        self_awareness:'',
                        jargon:'',
                        resume_accuracy:'',
                        jd_comprehension:'',
                        comments:'',
                        start: '2020-08-04 09:00',
                        end: '2020-08-04 10:00'

                    },
                    {
                        id: 5,
                        name:'Fridah James',
                        position:'Chief Designer',
                        employer: "Deakin",
                        company_logo: require('../../assets/Tesla.png'),
                        date:'24/08/2020',
                        time:'11:00 am',
                        interviewer:'Jean Gray',
                        scheduled:true,
                        on_time:'',
                        confidence:'',
                        strengths:'',
                        weaknesses:'',
                        self_awareness:'',
                        jargon:'',
                        resume_accuracy:'',
                        jd_comprehension:'',
                        comments:'',
                        start: '2020-08-05 09:00',
                        end: '2020-08-05 10:00'

                    },
                    {
                        id: 6,
                        name:'John Smith',
                        position:'Sales Exacutive',
                        employer: "Deakin",
                        company_logo: require('../../assets/visa.png'),
                        date:'24/08/2020',
                        time:'11:00 am',
                        interviewer:'Jean Gray',
                        scheduled:false,
                        on_time:'',
                        confidence:'',
                        strengths:'',
                        weaknesses:'',
                        self_awareness:'',
                        jargon:'',
                        resume_accuracy:'',
                        jd_comprehension:'',
                        comments:'',
                        start: '2020-08-06 09:00',
                        end: '2020-08-06 10:00'
                    }
                ]

            }
        },
        computed: {
            scheduledInterviews() {
                return this.interviews.filter(function (interview) {
                    return interview.scheduled
                })
            },
            pastInterviews() {
                return this.interviews.filter(function (interview) {
                    return !interview.scheduled
                })
            },
        },
        methods: {
            rnd (a, b) {
                return Math.floor((b - a + 1) * Math.random()) + a
            },
            getEventColor () {
                return this.colors[this.rnd(0, this.colors.length - 1)]
            },
            showEvent ({ nativeEvent, event }) {
                const open = () => {
                    this.selectedEvent = event
                    this.selectedElement = nativeEvent.target
                    setTimeout(() => this.selectedOpen = true, 10)
                }

                if (this.selectedOpen) {
                    this.selectedOpen = false
                    setTimeout(open, 10)
                } else {
                    open()
                }

                nativeEvent.stopPropagation()
            },
        }

    }
</script>

<style scoped>
    .tab_card {
        border: 1px solid rgba(15,117,188,0.3);
        display: block;
        width: 95%;
        margin: 20px 0;
    }
    .tab_content {
        padding: 20px 0;
        text-align: center;
    }
    .item_content {
        display: flex;
    }
    .item_content > div {
        margin-right: auto
    }


</style>
