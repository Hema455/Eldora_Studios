<template>
    <div>
      <div style="height:30px"></div>
      <v-row class="mx-auto" style="width:80%">
        <!-- About us paragraphs -->
        <v-col class="h3 text-left">
          <div class="h1 text-center">About Eldora</div>
          <br>
          <div>{{aboutuspara1}}</div>
          <br>
          <div>{{aboutuspara2}}</div>
        </v-col>



        <!-- Image in right side of the page -->
        <v-col style="width:50%">
          <div style="height:400px"><v-img style="height:100%;width:100%" src="../assets/aboutustop.png"></v-img></div>
        </v-col>
      </v-row>

      <!-- About us last paragraph -->
      <v-row class="text-left h3 mx-auto" style="width:80%">{{aboutuspara3}}</v-row>
      <br>
      <br>

      <!-- Our team -->
      <div class="h1 text-center" >Our Team</div>
      <div class="h3 text-center">The heart of our business</div>
      
      <v-row  style="width:80%" class="text-center mx-auto">
        <v-col v-for="(item,i) in ourteam" :key="i">
          <div class="border border-dark shadow p-3 mb-5 bg-white rounded">
            <img :src="item.img" class="rounded-circle img-fluid" />
            <h2>{{item.name}}</h2>
            <h4>{{item.position}}</h4>
            <h5>{{item.value}}</h5>
            <v-row style="width:60%" class="mx-auto">
              <v-col><a :href="item.linkedin" target="_blank"><v-icon color="#0e76a8" size="xxx-large">mdi-linkedin-box</v-icon></a></v-col>
              <v-col><a :href="item.twitter" target="_blank"><v-icon color="#00acee" size="xxx-large">mdi-twitter-box</v-icon></a></v-col>
              <v-col><a :href="item.fb" target="_blank"><v-icon color="#3b5998" size="xxx-large">mdi-facebook-box</v-icon></a></v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
      <br><br><br>
      <!--our values-->
      <div class="mx-auto text-center" style="width:85%"><img class="image-fit" src="../assets/ourvalues.png"></div>
      <br><br><br>
      <!--our clients-->
      <div class="h1 text-center">Our Clients</div>
      <div class="h3 text-center">Best friends of our brand</div>
    <br><br>
    <!--clients carousal-->
    <!-- ##Static list without carousal propertiesx 
      <br>
    <v-row  style="width:80%" class="mx-auto">
        <v-col v-for="(item,i) in ourclients" :key="i">
          <div>
            <img :src="item.icon" class="icon-fit"/>
            <br><br>
            <h2>{{item.title}}</h2>
          </div>
        </v-col>
      </v-row>
      <br><br><br> -->

      <v-carousel
          cycle
          height="250"
          hide-delimiter-background
          show-arrows-on-hover
          style="width:80%"
          class="mx-auto text-center "
        >
                <v-carousel-item v-for="(item,i) in ourclients" :key="i">
                          <v-row>
                            <v-col v-for="(item,i) in ourclients" :key="i">
                              <img :src="item.icon" class="icon-fit"/>
                              <br><br>
                              <h2>{{item.title}}</h2>
                            </v-col>
                          </v-row>
                  </v-carousel-item>
        </v-carousel>


<!--clients carousal-->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        aboutuspara1: 
          "We are not just selling consultancy services (well, we are, but hear us out for a second ;-}}!",
        aboutuspara2:
          "Our team has over 15 years experience in the areas of concept development, R&D, project management and digitalisation so whatever the problem, we would love to be part of the solution... simply because your business is our business!",
        aboutuspara3:
          "  While we work our way through the set up of a new website, suscribe to out mailing list so we can get in touch about the exciting things happening with out customers. Also, if you have any fascinating stories or burning questions, shoot!",
        ourteam:[
          {
            img: require("../assets/team1.png"),
            name:'David Jackson',
            position:'Project Manager',
            value:'Best member of your team and Employee of the year',
            fb: "https://www.fb.com",
            twitter: "https://www.twitter.com",
            linkedin: "https://www.linkedin.com"
          },
          {
            img: require("../assets/team2.png"),
            name:'Rimz Darson',
            position:'Career Advisor',
            value:'Best member of your team and Employee of the year',
            fb: "https://www.fb.com",
            twitter: "https://www.twitter.com",
            linkedin: "https://www.linkedin.com"
          },
          {
            img: require("../assets/team3.png"),
            name:'Michael Jordan',
            position:'Senior Recruitor',
            value:'Best member of your team and Employee of the year',
            fb: "https://www.fb.com",
            twitter: "https://www.twitter.com",
            linkedin: "https://www.linkedin.com"
          }
          ],
          ourclients:[
            {icon: require("../assets/Facebook.png"), title:'Facebook'},
            {icon: require("../assets/deakin.png"),title:'Deakin University'},
            {icon: require("../assets/coles.png"),title:'Coles'},
            {icon: require("../assets/apple.png"),title:'Apple'},
            {icon: require("../assets/visa.png"),title:'Visa'},
            {icon: require("../assets/Tesla.png"),title:'Tesla'},
            {icon: require("../assets/google.png"),title:'Google'}
          ]
      }
    }
  }
</script>

<style>
  .image-fit{
  width: 90%;
  object-fit: scale-down;
  }
  .icon-fit{
    width: 100px;
    height: 100px;
    object-fit: scale-down;
  }
 
</style>