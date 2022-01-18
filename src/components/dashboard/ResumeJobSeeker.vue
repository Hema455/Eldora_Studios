<template>
  <div>
    <v-container>
        <v-row>
            <!-- Professional Summary -->
            <v-col class="col-12 col-md-6">
            <v-card class="mx-auto " max-width="700" height="350">
                <v-card-text
                class="text-center headline font-weight-bold cardHead white--text py-2"
                >Attach Resume
                </v-card-text>
                <v-row>
                    <v-card-subtitle class="subtitle-padding">Resume is the most important document recruiters look for.</v-card-subtitle>
                </v-row>
                <div>
                <v-row>
                    <v-col cols="12" sm="6">
                    <v-card-subtitle class="font-weight-bold font-resume text-center">
                        {{ resumeObj.resumeFileName }}</v-card-subtitle>
                    </v-col>
                    <v-col cols="12" sm="6">
                    <v-card-subtitle class="font-weight-semibold text-center">{{ resumeObj.resumelastUpdated }}<v-btn color="blue"  outlined ><v-icon>mdi-download</v-icon></v-btn> </v-card-subtitle>
                    </v-col>
                </v-row>
                </div>
                <v-row>
                    <v-col cols="12" sm="6">
                        <v-btn color="blue" outlined class="btn-resume">
                            Upload
                        </v-btn>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-btn color="blue"  outlined class="btn-resume">
                            Delete
                        </v-btn>
                    </v-col>
                </v-row>
                <v-row>
                    <v-card-subtitle class="msg-padding">Supported documents docs, PDF.</v-card-subtitle>
                </v-row>
                
            </v-card>
            </v-col>
            <!-- Employment History card -->
            <v-col class="col-12 col-md-6">
            <v-card max-width="700" height="350" class="mx-auto">
                <v-card-text
                class="text-center headline font-weight-bold cardHead white--text py-2"
                >Attach Cover Letter
                </v-card-text>
                 <v-row>
                    <v-card-subtitle class="subtitle-padding">Resume is the most important document recruiters look for.</v-card-subtitle>
                </v-row>
                 <v-row>
                    <v-col cols="12" sm="6">
                        <v-card-subtitle class="font-weight-bold font-resume text-center">{{ resumeObj.resumeFileName }}</v-card-subtitle>
                    </v-col>
                     <v-col cols="12" sm="6">
                    <v-card-subtitle class="font-weight-semibold text-center">{{ resumeObj.resumelastUpdated }}<v-btn color="blue"  outlined ><v-icon>mdi-download</v-icon></v-btn></v-card-subtitle>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="6">
                        <v-btn color="blue"  outlined class="btn-resume">
                            Upload
                        </v-btn>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-btn color="blue"  outlined class="btn-resume">
                            Delete
                        </v-btn>
                    </v-col>
                </v-row>
                <v-row>
                    <v-card-subtitle class="msg-padding">Supported documents docs, PDF.</v-card-subtitle>
                </v-row>
            </v-card>
            </v-col>
        </v-row>
        <v-row>
            <!-- Skills card -->
            <v-col class="col-12 col-md-6">
            <v-card max-width="700" height="400" class="mx-auto">
                <v-card-text
                class="text-center headline font-weight-bold cardHead white--text py-2"
                >Resume Headline</v-card-text>
                <v-row>
                    <v-card-subtitle class="subtitle-padding">Use this space to give suitable headline to your resume.</v-card-subtitle>
                </v-row>
                 <v-row
                    v-if="!editShow"
                    align="center"
                    justify="center"
                    class="mx-auto px-4"
                    >
                    <v-textarea  outlined v-model="resumeObj.resumeSummary"> </v-textarea>
                 </v-row>
                 <v-row v-else style="height: 180px;" class="mx-auto px-4 pt-2">
                    {{ resumeObj.resumeSummary }}
                </v-row>
                <v-row align="center" justify="center" class="py-4">
                    <v-btn
                        align="center"
                        class="btn-headline"
                        v-if="editShow"
                        color="blue"  outlined 
                        @click="editShow = !editShow"
                    >
                        Edit
                        <v-icon right>mdi-pencil</v-icon>
                    </v-btn>
                    <!-- button to edit badges -->
                    <v-btn v-else text color="blue" class="btn-headline"  @click="editShow = !editShow">
                        Done
                    </v-btn>
                </v-row>
            </v-card>
            </v-col>
            <!-- Educations card -->
            <v-col>
                <v-card max-width="700" height="400" class="mx-auto">
                    <v-card-text 
                    class="text-center headline font-weight-bold cardHead white--text py-2 hegiht-20px">
                    Important Links
                    </v-card-text>
                    <v-row>
                        <v-col cols="12" sm="12" class="important-link" v-if="editLink">
                             <v-text-field disabled
                                hide-details
                                label="LinkedIn:"
                                outlined
                                v-model="resumeObj.linkedInLink"
                            ></v-text-field>
                        </v-col> 
                        <v-col v-else cols="12" sm="12" class="important-link">
                             <v-text-field 
                                label="LinkedIn:"
                                hide-details
                                outlined
                                v-model="resumeObj.linkedInLink"
                            ></v-text-field>
                        </v-col> 
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="12" class="important-link" v-if="editLink">
                             <v-text-field disabled
                                hide-details
                                label="Git Hub:"
                                outlined
                                v-model="resumeObj.gitHubLink"
                            ></v-text-field>
                        </v-col> 
                        <v-col v-else cols="12" sm="12" class="important-link">
                             <v-text-field 
                                hide-details
                                label="Git Hub:"
                                outlined
                                v-model="resumeObj.gitHubLink"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="12" class="important-link" v-if="editLink">
                             <v-text-field disabled
                                hide-details
                                label="Other Link:"
                                outlined
                                v-model="resumeObj.otherLink"
                            ></v-text-field>
                        </v-col> 
                        <v-col v-else cols="12" sm="12" class="important-link">
                             <v-text-field 
                                hide-details
                                label="Other Link:"
                                outlined
                                v-model="resumeObj.otherLink"
                            ></v-text-field>
                        </v-col> 
                    </v-row>
                    <v-row align="end" justify="center" class="py-4">
                    <v-btn
                        v-if="editLink"
                        text
                        color="blue"
                        class="btn-headline"
                        @click="editLink = !editLink"
                    >
                        Edit
                        <v-icon right>mdi-pencil</v-icon>
                    </v-btn>
                    <!-- button to edit badges -->
                    <v-btn v-else text color="blue" class="btn-headline" @click="editLink = !editLink">
                        Done
                    </v-btn>
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
            editLink: true,
            editLinkedIn: true,
            editGitHub: true,
            editOtherLink: true,
            show: false,
            resumeObj: {
                resumeSummary: "Proven software engineer with extensive firewall and virus research experience. Excellent technical and communication skills. Dedicated to improving network security and eliminating vulnerabilities. Organized and analytical. Detail- and goal-oriented professional.",
                coverletterSummary: "This is the summary of cover letter",
                linkedInLink: "john.smithlinkedinprofile.com",
                gitHubLink: "mygithublink.com",
                otherLink: "myportfolio@gmail.com",
                resumeFileName: "MyResume.pdf",
                resumelastUpdated: "Uploaded on 1st Aug 2020",
                },
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
        background-color: #4489ffea;
    }
    .subtitle-padding{
        padding-left: 18%;
    }
    .important-link{
        padding-left: 5%;
        padding-right: 5%;
    }
    .font-resume{
        font-size: 22px;
        font-weight: bold;
    }
    .btn-resume{
        border: 1px solid #007bff;
        color: #007bff;
        margin-left: 30%;
        background-color: transparent;
    }
    .btn-headline{
        border: 1px solid #007bff;
        color: #007bff;
        background-color: transparent;
    }
    .msg-padding{
        padding-left: 8%;
    }

</style>
