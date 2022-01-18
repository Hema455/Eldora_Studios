<template>
  <div >
    <div class="text-uppercase text-center display-1"><strong>Popular Companies</strong></div>
    <v-row>
      <v-col class="col-md-8 offset-md-2">
        <v-row>
          <v-col class="col-lg-6 col-xl-3" v-for="(item,i) in companies" :key="i">
            <Company :company="item" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>


  </div>

</template>
<script>
    // import News from "../components/News";
    import Company from "../components/company";


    export default {
        components: {
          Company

            // News

        },
        // the data should from server side
        data: () => ({
            companies: [

                {
                    name: "Apple",
                    logo: require("../assets/apple.png"),
                    industry: "Information & communication Technology",
                    jobs: "38",
                    link: "/#/"
                },

                {
                    name: "Google",
                    logo: require("../assets/google.png"),
                    industry: "Information & communication Technology",
                    jobs: "23",
                    link: "/#/"
                }, {
                    name: "Deakin Uni",
                    logo: require("../assets/deakin.png"),
                    industry: "Education & Training",
                    jobs: "13",
                    link: "/#/"
                }, {
                    name: "Coles",
                    logo: require("../assets/coles.png"),
                    industry: "Retail & Consumer Products",
                    jobs: "52",
                    link: "/#/"
                }
            ]
        })
    };
</script>
<style scoped>
    my1 {
        padding: 0;
        margin: 0;
    }
</style>
