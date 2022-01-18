<template>
    <div class="row">
        <Banner type="loginFormJobseeker"></Banner>
        <div class="col-9">
            <v-container>
                <v-data-iterator
                        :items="jobs"
                        sort-by="date"
                        sortDesc
                        hide-default-footer
                >
                    <template v-slot:default="props">
                        <v-row class="col-12">
                            <v-col cols="12" v-for="(item,i) in props.items" :key="i">
                                <v-card class="mx-auto">
                                    <v-row>
                                        <v-col class="col-9 pb-0">
                                            <v-card-title>{{item.title}}</v-card-title>
                                            <v-card-title class="subtitle-1 py-0">Badge Perks</v-card-title>

                                        </v-col>

                                    </v-row>
                                    <v-row>
                                        <v-col v-for="(badge,i) in item.badges" :key="i" cols="1" class="py-0">
                                            <v-card-text class="pa-0 mx-4">
                                                <v-tooltip bottom>
                                                    <template v-slot:activator="{ on }">
                                                        <v-img :src="badge.img" max-height="60px" contain v-on="on" />
                                                    </template>
                                                    <span>{{badge.description}}</span>
                                                </v-tooltip>
                                            </v-card-text>
                                        </v-col>
                                    </v-row>
                                    <br/>
                                    <v-card-subtitle class="subtitle-1 py-0">About Coles</v-card-subtitle>
                                    <v-card-text>
                                        {{item.description}}
                                    </v-card-text>
                                    <br/>
                                    <v-card-subtitle class="subtitle-1 py-0">Daily Tasks</v-card-subtitle>
                                    <v-card-text>
                                        {{item.description}}
                                        <br/>
                                        {{item.description}}
                                        <br/>
                                        {{item.description}}
                                        <br/>
                                        {{item.description}}
                                        <br/>
                                        {{item.description}}
                                    </v-card-text>
                                    <v-row justify="space-between">

                                        <v-col cols="3" class="pt-0">
                                            <v-card-text class="title pb-0 text-right">
                                                <v-chip
                                                        class="ma-2"
                                                        :color="item.fav?'success':'info'"
                                                        text-color="white"
                                                        @click="!loginState()?dialog=true:item.fav=!item.fav"
                                                >
                                                    Save Job
                                                    <v-icon right>{{item.fav?"mdi-star":"mdi-star-outline"}}</v-icon>
                                                </v-chip>
                                            </v-card-text>
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-col>
                        </v-row>
                        <!-- a pop up dialog to login -->
                        <v-dialog v-model="dialog" max-width="500">
                            <v-card>
                                <v-card-title class="headline">Not Signed in?</v-card-title>
                                <v-card-text class="title">
                                    <a class="success--text" href="/#/login">Sign in</a> or
                                    <a class="success--text" href="/#/register">Register</a> to save your jobs
                                </v-card-text>
                                <v-card-actions>
                                    <div class="flex-grow-1"></div>
                                    <v-btn color="success" text @click="dialog = false">Close</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>

                    </template>
                </v-data-iterator>

            </v-container>
        </div>
        <div class="col-3">
            <v-container>
                <template>
                    <v-row class="col-12">
                        <v-col cols="12">
                            <v-card class="mx-auto">
                                <div class="text-xl-center">
                                    <v-card-title class="subtitle-2">Posted {{getTimeDiff('2019-09-15T05:55:01.629Z')}}</v-card-title>
                                </div>
                                <v-img src="../assets/coles.png" max-height="60px" contain v-on="on"></v-img>
                                <div class="text-xl-center">
                                    <v-card-subtitle class="subtitle-1">Coles Group</v-card-subtitle>
                                </div>

                                <div class="text-xl-center" >
                                    <v-btn v-on:click="apply()" class="primary">Apply For This Job</v-btn>
                                </div>
                                <br/>

                            </v-card>
                            <br/>
                            <v-card class="mx-0">
                                <v-card-title class="subtitle-2">Role:</v-card-title>
                                <v-card-text>IT Support Technician</v-card-text>

                                <v-card-title class="subtitle-2">Location:</v-card-title>
                                <v-card-text>Melbourne, Victoria</v-card-text>

                                <v-card-title class="subtitle-2">Skills Required:</v-card-title>
                                <v-card-text>
                                    -Communication<br/>
                                    -Teamwork<br/>
                                    -Negotiation and Persuasion<br/>
                                    -Problem solving<br/>
                                    -Leadership<br/>
                                    -Organisation<br/>
                                    -Perseverence<br/>
                                    -Motivation<br/>
                                </v-card-text>
                                <v-card-title class="subtitle-2">Perks And Benefits:</v-card-title>
                                <v-card-text>
                                    -Vacation Time<br/>
                                    -Medical Insurance<br/>
                                    -Dental Insurance<br/>
                                    -Problem solving<br/>
                                    -Vision Coverage<br/>
                                    -Extra Holiday<br/>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </template>
            </v-container>
        </div>
    </div>
</template>

<script>
    import Banner from "../components/Banner";
    export default {
        data: () => ({

            dialog: false,
            //test data
            testData: {
                id: "1",
                title: "IT Support Technician",
                company: "Company Name",
                location: "Location",
                logo: require("../assets/apple.png"),
                badges: [
                    {
                        img: require("../assets/badges/Near Transport.png"),
                        description: "Near Transport"
                    },
                    {
                        img: require("../assets/badges/Morning Shift.png"),
                        description: "Morning Shift"
                    },
                    {
                        img: require("../assets/badges/Phased Retirement.png"),
                        description: "CPhased Retirement"
                    },
                    {
                        img: require("../assets/badges/Travel Assist_1.png"),
                        description: "Travel Assist"
                    }
                ],
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
                date: "2019-09-15T05:55:01.629Z",
                fav: false
            }
        }),
        computed: {

            //generate the test data for jobs list
            jobs() {
                var arr = new Array(1);
                var i = arr.length;
                while (i--) {
                    arr[i] = JSON.parse(JSON.stringify(this.testData));
                }
                return arr;
            }
        },
        components:{Banner},
        name: "JobDescription",
        methods: {
                loginState() {
                    return this.$store.state.loginState;
                },
                userType() {
                    return this.$store.state.userType;
                },
                getTimeDiff(date) {
                    const time = Math.floor(
                        (new Date().getTime() - new Date(date).getTime()) / 1000 / 60
                    );
                    if (time >= 2880) return Math.floor(time / 24 / 60) + " Days ago";
                    else if (time < 2880 && time >= 120)
                        return Math.floor(time / 60) + " Hours ago";
                    else if (time < 120 && time > 60)
                        return "1 Hour " + (time - 60) + " Min ago";
                    else if (time == 60) return "1 Hour ago";
                    else return time + " Min ago";
                },
                apply() {
                    this.$router.push("/jobApplication")
                }
            },



    }
</script>

<style scoped>

</style>
