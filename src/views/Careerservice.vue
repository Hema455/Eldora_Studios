<template>
  <div class="main-container">
                
    <v-card flat>
         <v-img height="300px" src="../assets/Careerservicebanner.jpg">
            <v-container> 
                <b-row>
                 <b-col class="py-0 pt-6 pl-12 col-8">
                     <h2 class = "heading white--text">Career Services</h2>
                 </b-col>  
                 <b-col class="py-0 pt-4 pl-12 col-8">
                  <v-text-field
                    v-model="keywords"
                    rounded
                    solo
                    :error-messages="keywordsErrors"
                     label="What are you looking for?"
                     required
                     @blur="$v.keywords.$touch()"
                     />
                  </b-col>
      <!-- search button-->
      <b-col class="px-0 py-4 pt-6 col-1 text-center">
        <v-btn icon type="submit" @click.prevent="submit">
          <b-icon icon="search" font-scale="2" ></b-icon>
        </v-btn>
      </b-col>
    </b-row>
 </v-container>
    </v-img>
  </v-card>
       
       
       <v-container>
        <v-layout ma-3 pl-7 pt-8>
           <h2 class="heading secondary--text">Progressing your career</h2>
        </v-layout>
        
        <v-layout justify-center>
            <v-flex xs12 v-for="detail in details_1" :key="detail.title">
              <v-card hover flat class="mx-auto" max-width="300" max-height="400"> 
                
                  <v-img 
                      class="black--text align-end"
                      height="200px"
                      v-bind:src="detail.image">
                    </v-img>
                        <v-container pb-0 mb-0>
                           <v-layout>
                                <h4 class="secondary--text">{{detail.title}}</h4>
                           </v-layout>
                        </v-container>        

                          <v-card-text class="text--secondary">
                             <div>{{detail.description}}</div>
                           </v-card-text>
                           

               </v-card>
            </v-flex>
        </v-layout>
       </v-container>

    <v-container>
        <v-layout ma-3 pl-7 pt-8>
           <h2 class="heading secondary--text" >Resumes And Cover Letters</h2>
        </v-layout>

        <v-layout justify-center>
            
            <v-flex xs12 v-for="detail in details_2" :key="detail.title">
              <v-card hover flat class="mx-auto" max-width="300" max-height="400"> 
                  <v-img
                      class="white--text align-end"
                      height="200px"
                      v-bind:src="detail.image">
                    </v-img>
                    <v-container pb-0 mb-0>
                           <v-layout>
                                <h4 class="secondary--text">{{detail.title}}</h4>
                           </v-layout>
                    </v-container>   

                          <v-card-text class="text--secondary">
                             <div>{{detail.description}}</div>
                           </v-card-text>
               </v-card>
            </v-flex>
        </v-layout>
    </v-container>
  </div>
    
</template>
<script>
export default {
    data(){
        return{
            details_1:[
                {title: 'Eldora Job Hunt Guide',description: 'On Eldora, you can find jobs by filtering and setting up preferred badges. Apply now by uploading your resume.',image: require("../assets/resume_1.png")},
                {title: '5 Tips To Build Network',description: 'Here are some steps to consider taking when building your network and to find the right job.',image: require("../assets/guide_resume.png")},
                {title: 'The Essential Job Guide',description: 'Here is a small guide on how to search relavent jobs and interships based on your skillset.',image: require("../assets/job_guide.png")}
            ],
            details_2:[
                {title: 'What is a CV?',description: 'On Eldora, you can find jobs by filtering and setting up preferred badges. Apply now by uploading your resume.',image: require("../assets/CV.png")},
                {title: 'Resume/CV structure',description: 'Here are some steps to consider taking when building your network and to find the right job.',image: require("../assets/CV_format.png")},
                {title: '6 Tips for strong resume',description: 'Here is a small guide on how to search relavent jobs and interships based on your skillset.',image: require("../assets/strong_cv.png")}
            ],
            details_3:[
                {title: 'Eldora Job Hunt Guide',description: 'On Eldora, you can find jobs by filtering and setting up preferred badges. Apply now by uploading your resume.',image: require("../assets/resume_img.png")},
                {title: '5 Tips To Build Network',description: 'Here are some steps to consider taking when building your network and to find the right job.',image: require("../assets/resume_img.png")},
                {title: 'Essential Job Search Guide',description: 'Here is a small guide on how to search relavent jobs and interships based on your skillset.',image: require("../assets/resume_img.png")}
            ],
        }
    }
}
</script>
<style>
    .main-container {
        margin-bottom: 20px;
    }
</style>
