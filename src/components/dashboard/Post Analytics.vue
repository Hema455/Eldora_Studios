<template>
    <div>
        
        <!-- Header card-->
            <b-card style="background-color:#ebebeb">
                <div class="header-card">
                   <b-icon class="h4 mb-2" icon="question-circle"></b-icon>
                    <v-badge :content="1" color="green" overlap>
                        <b-icon class="h4 mb-2" icon="bell-fill"></b-icon>
                    </v-badge>
                    <v-badge :content="3" color="red" overlap>
                         <b-icon class="h4 mb-2" icon="envelope-fill"></b-icon>
                    </v-badge>
                    
                    <b-card-text>Recruiter ID: {{recruiter.id}}</b-card-text>
                </div>
            </b-card>
        <br>
        <div class="h2 font-weight-bold text-center">Vistor's Overview</div>
        <br>
        <v-container style="background-color:#ebebeb">
            <v-row>
                <!--Post views-->
                <v-col>
                    <v-card max-width="400px" height="auto" class="mx-auto px-4">
                        <v-card-text class="text-center headline font-weight-bold black--text py-6">4,200</v-card-text>
                        <v-card-text class="text-center headline  black--text py-6"> Post Views
                            <v-icon medium color="green darken-2">mdi-arrow-up</v-icon> 4.3%
                        </v-card-text>
                        <v-row align="center" justify="center" style="height: 200px">
                            <GChart
                                    style="width: 350px"
                                    type="ColumnChart"
                                    :data="postViewsColumnChartData"
                                    :options="postViewsColumnChartOptions"
                                    />
                        </v-row>
                    </v-card>
                </v-col>
                <!--Unique Visitors-->
                <v-col>
                    <v-card max-width="400px" height="auto" class="mx-auto px-4">
                        <v-card-text class="text-center headline font-weight-bold black--text py-6">1,500</v-card-text>
                        <v-card-text class="text-center headline  black--text py-6"> Unique Visitors
                            <v-icon medium color="red darken-2">mdi-arrow-down</v-icon> 9.87%
                        </v-card-text>
                        <v-row align="center" justify="center" style="height:200px">
                            <GChart
                                    style="width: 350px"

                                    type="ColumnChart"
                                    :data="uniqueVisitorsColumnChartData"
                                    :options="uniqueVisitorsColumnChartOptions"
                            />
                        </v-row>
                    </v-card>
                </v-col>
                <!--Total Visits-->
                <v-col>
                    <v-card max-width="400px" height="auto" class="mx-auto px-4">
                        <v-card-text class="text-center headline font-weight-bold black--text py-6">7,500</v-card-text>
                        <v-card-text class="text-center headline  black--text py-6"> Total Visits
                            <v-icon medium color="orange darken-2">mdi-arrow-down</v-icon>  <small>6.2%</small>
                            </v-card-text>
                        <v-row align="center" justify="center" style="height:200px">
                            <GChart
                                    style="width: 350px"

                                    type="ColumnChart"
                                    :data="totalVisitorsColumnChartData"
                                    :options="totalVisitorsColumnChartOptions"
                            />
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>

            <v-row>
                    <v-col>
                        <v-card max-width="100%" height="auto" class="mx-auto px-4">

                            <v-row align="center" justify="center" style="height:300px">
                                <GChart style="width: 80%"
                                        type="LineChart"
                                        :data="lineChartData"
                                        :options="lineChartOptions"
                                />
                            </v-row>
                        </v-card>
                    </v-col>
                 </v-row>
                 <br>
                 <div class="text-center h4 font-weight-bold">Visitors Sessions by browsers</div>
            <v-row>
                    <v-col>
                        <v-card max-width="500" height="auto" class="mx-auto px-4">
                            <br><div class="text-left display-2">35%</div>
                            <div class="text-left h6">Bounce Rate</div>
                            <v-row align="center" justify="center" style="height:250px">
                                <GChart style="height: 100%"
                                        type="AreaChart"
                                        :data="AreaChartData"
                                        :options="AreaChartOptions"
                                />
                            </v-row>
                        </v-card>
                    </v-col>
                <!--Table-->
                <v-col>
                        <v-card max-width="500" height="100%" class="mx-auto px-4">
                            <v-row align="center" justify="center" style="height:300px">
                                <b-table style="height:100%" striped hover :items="tableItems"></b-table>
                            </v-row>
                        </v-card>
                    </v-col>

            </v-row>

        </v-container>
    </div>
</template>

<script>
    export default {
        data(){ return {
            tableItems: [
                {  browsers: 'Chrome', Today: '64%',Yesterday: '0.2%' },
                {  browsers: 'Mozilla', Today: '22%',Yesterday: '3.6%' },
                {  browsers: 'Opera', Today: '15%',Yesterday: '10.6%' },
                {  browsers: 'Safari', Today: '23%' ,Yesterday: '4.5%'},
                {  browsers: 'Internet Explorer', Today: '5.6%',Yesterday: '1.6%' }
            ],
            //Column Charts
            postViewsColumnChartData: [
                ['Month', 'Visits', { role: 'style' }],
                ['Jan', 400,'green'],
                ['Feb', 800,'green'],
                ['Mar', 1200,'green'],
                ['Apr', 1500,'green'],
                ['May', 1300,'green'],
                ['Jun', 1000,'green'],
                ['Jul', 900,'green']

            ],
            postViewsColumnChartOptions: {
                chart: {
                    title: 'Post Views',
                    subtitle: 'Monthly Post Views',
                    legend: { position: 'bottom' }

                }
            },
            uniqueVisitorsColumnChartData: [
                ['Month', 'Visits', { role: 'style' }],
                ['Jan', 400,'red'],
                ['Feb', 600,'red'],
                ['Mar', 1200,'red'],
                ['Apr', 800,'red'],
                ['May', 1300,'red'],
                ['Jun', 100,'red'],
                ['Jul', 900,'red']

            ],
            uniqueVisitorsColumnChartOptions: {
                chart: {
                    title: 'Post Views',
                    subtitle: 'Monthly Post Views',
                }
            },
            totalVisitorsColumnChartData: [
                ['Month', 'Visits', { role: 'style' }],
                ['Jan', 400,'orange'],
                ['Feb', 800,'orange'],
                ['Mar', 1200,'orange'],
                ['Apr', 1500,'orange'],
                ['May', 1300,'orange'],
                ['Jun', 1000,'orange'],
                ['Jul', 900,'orange']

            ],
            totalVisitorsColumnChartOptions: {
                chart: {
                    title: 'Post Views',
                    subtitle: 'Monthly Post Views',
                }
            },
            lineChartData: [
                ['Month', 'Visits', 'Post Views','Unique Visits'],
                ['Jan', 400,200,100],
                ['Feb', 800,700,1300],
                ['Mar', 1200,500,600],
                ['Apr', 1500,900,450],
                ['May', 1300,200,300],
                ['Jun', 1000,400,2000],
                ['Jul', 900,1800,300]

            ],
            lineChartOptions: {
                chart: {
                    title: 'Post Views',
                    subtitle: 'Monthly Post Views',
                }
            },
//
            AreaChartData: [
                ['Day', 'Clicks',{ role: 'style' }],
                ['25/04/20', 55,'red'],
                ['26/04/20', 20,'red'],
                ['27/04/20', 40,'red'],
                ['28/04/20', 30,'red'],
                ['30/04/20', 50,'red'],

            ],
            AreaChartOptions: {
                chart: {
                    title: 'Area',
                    subtitle: 'Monthly Bounce',
                }
            },

            recruiter: {
                id: 33123,
                name: "John Doe",
                company: "Eldora"
            },

        }},
        mounted() {
            if (!this.$store.state.loginState) {
                this.$router.push("/login");
            }
        }
    };
</script>

<style scoped>
    .header-card {
        display: flex;
        float:right;
        font-size: 16px;
        font-weight: bold;
        
    }
    .header-card > * {
        margin-left: 20px;
    }

</style>