<template>
    <v-card class="card" height="250">
        <div class="align-center justify-center">
            <img :src="company.logo">
        </div>
        <div class="d-flex headline font-weight-bold justify-center success--text pt-2">{{company.name}}</div>
        <div class="align-center justify-center">
            <div class="text-center subtitle-2 pa-2">{{company.industry}}</div>
            <div class="text-center subtitle-2 pa-2"><strong style="color: darkorange">{{company.jobs}}</strong> Jobs Available</div>
        </div>

    </v-card>
</template>
<script>
    export default {
        data: () => ({}),
        //receive the props which is the company info
        props: ["company"],
        /*
        The company info data structure is
        {
            name: ,
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
<style>
    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    .card {
        padding: 10px 0;
    }

</style>
