<template>
<div>
    <div><h1>Frequently Asked Questions</h1></div>
    <v-divider>
    </v-divider>
     
    <div>

        <h3>Job Seekers</h3>
          <!-- <div><v-row  justify="center"> 
    <v-dialog v-model="dialog" persistent max-width="600px"> 
       <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
        Create New
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Add Questions</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <h5>Category:</h5>
                 <v-autocomplete
                  :items="[ 'Job Seeker', 'Employers']"
                  label="Select Category *"
                  multiple
                ></v-autocomplete>
                
              </v-col>
              
              <v-col cols="12">
                <h5>Sub Category:</h5>
                 <v-autocomplete
                  :items="[ 'Sign In/Password', 'Technical Support','Job Search','My Account']"
                  label="Select Category*"
                  multiple
                ></v-autocomplete>
              </v-col>
              <v-col cols="12">
                <h5>Add Question here:*</h5>
               <v-textarea label="Add Here!!" required!></v-textarea>
              </v-col>
              <v-col cols="12">
                 <h5>Add Answer here:*</h5>
               <v-textarea label="Add Here!!"></v-textarea>
              
               
              </v-col>
             
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Post</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
   </v-row> </div> -->
    <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
         Create New
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Add Question</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <h5>Category:</h5>
                 <v-autocomplete
                  :items="[ 'Job Seeker', 'Employers']"
                  label="Select Category *"
                  multiple
                ></v-autocomplete>
                
              </v-col>
              
              <v-col cols="12">
                <h5>Sub Category:</h5>
                 <v-autocomplete
                  :items="[ 'Sign In/Password', 'Technical Support','Job Search','My Account']"
                  label="Select Category*"
                  multiple
                ></v-autocomplete>
              </v-col>
              <!-- <v-col cols="12">
                <h5>Add Question here:*</h5>
               <v-textarea label="Add Here!!" required!></v-textarea>
              </v-col> -->
             
            </v-row>
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
  </v-row>
 
    </div>
  <v-row justify="center"><v-col class="col-8 col-md-10" id="panel1"> 
  <v-expansion-panels
      v-model="panel"
      :disabled="disabled"
       :float="center"
      multiple
    >
      <v-expansion-panel >
        <v-expansion-panel-header >Sign In/Passwords
          <template  v-slot:actions>
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
            <v-icon color="black">mdi-plus</v-icon>
            
          </template>
          </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div><p><template >
            <v-icon color="teal">mdi-eye-outline</v-icon>
          </template>What if I have forgotten my password?
          <template >
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
          </template>
             </p></div>
           
              <div><p><template >
            <v-icon color="teal">mdi-eye-outline</v-icon>
          </template>What if I what to change my password?
          <template >
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
          </template>
             </p></div>
            
           
             <div><p><template >
            <v-icon color="gray">mdi-eye</v-icon>
          </template>Why is my account locked?
          <template >
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
          </template>
             </p></div>
           
          
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header >Technical Support
          <template  v-slot:actions>
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
            <v-icon color="black">mdi-plus</v-icon>
            
          </template>
          </v-expansion-panel-header>
         <v-expansion-panel-content>
          <div><p><template >
            <v-icon color="teal">mdi-eye-outline</v-icon>
          </template>What if I have forgotten my password?
          <template >
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
          </template>
             </p></div>
           
              <div><p><template >
            <v-icon color="teal">mdi-eye-outline</v-icon>
          </template>What if I what to change my password?
          <template >
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
          </template>
             </p></div>
            
           
             <div><p><template >
            <v-icon color="gray">mdi-eye</v-icon>
          </template>Why is my account locked?
          <template >
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
          </template>
             </p></div>
           
          
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header >Job Search
          <template  v-slot:actions>
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
            <v-icon color="black">mdi-plus</v-icon>
            
          </template>
          </v-expansion-panel-header>
         <v-expansion-panel-content>
          <div><p><template >
            <v-icon color="teal">mdi-eye-outline</v-icon>
          </template>What if I have forgotten my password?
          <template >
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
          </template>
             </p></div>
           
              <div><p><template >
            <v-icon color="teal">mdi-eye-outline</v-icon>
          </template>What if I what to change my password?
          <template >
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
          </template>
             </p></div>
            
           
             <div><p><template >
            <v-icon color="gray">mdi-eye</v-icon>
          </template>Why is my account locked?
          <template >
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
          </template>
             </p></div>
           
          
        </v-expansion-panel-content>
      </v-expansion-panel>
  
  <v-expansion-panel>
        <v-expansion-panel-header >My Account
          <template  v-slot:actions>
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
            <v-icon color="black">mdi-plus</v-icon>
            
          </template>
          </v-expansion-panel-header>
         <v-expansion-panel-content>
          <div><p><template >
            <v-icon color="teal">mdi-eye-outline</v-icon>
          </template>What if I have forgotten my password?
          <template >
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
          </template>
             </p></div>
           
              <div><p><template >
            <v-icon color="teal">mdi-eye-outline</v-icon>
          </template>What if I what to change my password?
          <template >
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
          </template>
             </p></div>
            
           
             <div><p><template >
            <v-icon color="gray">mdi-eye</v-icon>
          </template>Why is my account locked?
          <template >
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
          </template>
             </p></div>
           
          
        </v-expansion-panel-content>
      </v-expansion-panel>
  
 
    </v-expansion-panels>
    </v-col></v-row>
   <v-divider></v-divider>
   <div>
       <h3>Employers</h3>
   </div>
    <!-- <div class="d-flex">
      <v-checkbox
        v-model="disabled"
        label="Disabled"
      ></v-checkbox>
    </div> -->
      <v-row justify="center"><v-col class="col-8 col-md-10" id="panel1"> 
    <v-expansion-panels
      v-model="panel"
      
      :popout="popout"
      multiple
    >
      
       <v-expansion-panel>
        <v-expansion-panel-header >Job Ads
          <template  v-slot:actions>
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
            <v-icon color="black">mdi-plus</v-icon>
            
          </template>
          </v-expansion-panel-header>
         <v-expansion-panel-content>
          <div><p><template >
            <v-icon color="teal">mdi-eye-outline</v-icon>
          </template>What if I have forgotten my password?
          <template >
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
          </template>
             </p></div>
           
              <div><p><template >
            <v-icon color="teal">mdi-eye-outline</v-icon>
          </template>What if I what to change my password?
          <template >
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
          </template>
             </p></div>
            
           
             <div><p><template >
            <v-icon color="gray">mdi-eye</v-icon>
          </template>Why is my account locked?
          <template >
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
          </template>
             </p></div>
           
          
        </v-expansion-panel-content>
      </v-expansion-panel>

     <v-expansion-panel>
        <v-expansion-panel-header >My Accounts
          <template  v-slot:actions>
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
            <v-icon color="black">mdi-plus</v-icon>
            
          </template>
          </v-expansion-panel-header>
         <v-expansion-panel-content>
          <div><p><template >
            <v-icon color="teal">mdi-eye-outline</v-icon>
          </template>What if I have forgotten my password?
          <template >
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
          </template>
             </p></div>
           
              <div><p><template >
            <v-icon color="teal">mdi-eye-outline</v-icon>
          </template>What if I what to change my password?
          <template >
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
          </template>
             </p></div>
            
           
             <div><p><template >
            <v-icon color="gray">mdi-eye</v-icon>
          </template>Why is my account locked?
          <template >
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
          </template>
             </p></div>
           
          
        </v-expansion-panel-content>
      </v-expansion-panel>
     <v-expansion-panel>
        <v-expansion-panel-header >My Candidates
          <template  v-slot:actions>
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
            <v-icon color="black">mdi-plus</v-icon>
            
          </template>
          </v-expansion-panel-header>
         <v-expansion-panel-content>
          <div><p><template >
            <v-icon color="teal">mdi-eye-outline</v-icon>
          </template>What if I have forgotten my password?
          <template >
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
          </template>
             </p></div>
           
              <div><p><template >
            <v-icon color="teal">mdi-eye-outline</v-icon>
          </template>What if I what to change my password?
          <template >
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
          </template>
             </p></div>
            
           
             <div><p><template >
            <v-icon color="gray">mdi-eye</v-icon>
          </template>Why is my account locked?
          <template >
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
          </template>
             </p></div>
           
          
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
   </v-col></v-row>
<!-- <v-row justify="center"><v-col class="col-8 col-md-10" id="panel1"> 
  <v-expansion-panels
      v-model="panel"
      :disabled="disabled"
       :float="center"
      multiple
    >
      <v-expansion-panel >
        <v-expansion-panel-header >Panel 1
          <template  v-slot:actions>
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
            <v-icon color="black">mdi-plus</v-icon>
            
          </template>
          </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div><p><template >
            <v-icon color="teal">mdi-eye-outline</v-icon>
          </template>What if I have forgotten my password?
          <template >
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
          </template>
             </p></div>
           
              <div><p><template >
            <v-icon color="teal">mdi-eye-outline</v-icon>
          </template>What if I what to change my password?
          <template >
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
          </template>
             </p></div>
            
           
             <div><p><template >
            <v-icon color="gray">mdi-eye</v-icon>
          </template>Why is my account locked?
          <template >
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
          </template>
             </p></div>
           
          
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header >Panel 2
          <template  v-slot:actions>
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
            <v-icon color="black">mdi-plus</v-icon>
            
          </template>
          </v-expansion-panel-header>
         <v-expansion-panel-content>
          <div><p><template >
            <v-icon color="teal">mdi-eye-outline</v-icon>
          </template>What if I have forgotten my password?
          <template >
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
          </template>
             </p></div>
           
              <div><p><template >
            <v-icon color="teal">mdi-eye-outline</v-icon>
          </template>What if I what to change my password?
          <template >
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
          </template>
             </p></div>
            
           
             <div><p><template >
            <v-icon color="gray">mdi-eye</v-icon>
          </template>Why is my account locked?
          <template >
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
          </template>
             </p></div>
           
          
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header >Panel 3
          <template  v-slot:actions>
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
            <v-icon color="black">mdi-plus</v-icon>
            
          </template>
          </v-expansion-panel-header>
         <v-expansion-panel-content>
          <div><p><template >
            <v-icon color="teal">mdi-eye-outline</v-icon>
          </template>What if I have forgotten my password?
          <template >
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
          </template>
             </p></div>
           
              <div><p><template >
            <v-icon color="teal">mdi-eye-outline</v-icon>
          </template>What if I what to change my password?
          <template >
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
          </template>
             </p></div>
            
           
             <div><p><template >
            <v-icon color="gray">mdi-eye</v-icon>
          </template>Why is my account locked?
          <template >
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
          </template>
             </p></div>
           
          
        </v-expansion-panel-content>
      </v-expansion-panel>
  
  <v-expansion-panel>
        <v-expansion-panel-header >Panel 4
          <template  v-slot:actions>
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
            <v-icon color="black">mdi-plus</v-icon>
            
          </template>
          </v-expansion-panel-header>
         <v-expansion-panel-content>
          <div><p><template >
            <v-icon color="teal">mdi-eye-outline</v-icon>
          </template>What if I have forgotten my password?
          <template >
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
          </template>
             </p></div>
           
              <div><p><template >
            <v-icon color="teal">mdi-eye-outline</v-icon>
          </template>What if I what to change my password?
          <template >
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
          </template>
             </p></div>
            
           
             <div><p><template >
            <v-icon color="gray">mdi-eye</v-icon>
          </template>Why is my account locked?
          <template >
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
          </template>
             </p></div>
           
          
        </v-expansion-panel-content>
      </v-expansion-panel>
  
 <v-expansion-panel>
        <v-expansion-panel-header >Panel 5
          <template  v-slot:actions>
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
            <v-icon color="black">mdi-plus</v-icon>
            
          </template>
          </v-expansion-panel-header>
         <v-expansion-panel-content>
          <div><p><template >
            <v-icon color="teal">mdi-eye-outline</v-icon>
          </template>What if I have forgotten my password?
          <template >
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
          </template>
             </p></div>
           
              <div><p><template >
            <v-icon color="teal">mdi-eye-outline</v-icon>
          </template>What if I what to change my password?
          <template >
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
          </template>
             </p></div>
            
           
             <div><p><template >
            <v-icon color="gray">mdi-eye</v-icon>
          </template>Why is my account locked?
          <template >
            <v-icon color="black">mdi-pencil</v-icon>
            <v-icon color="red">mdi-close-circle</v-icon>
          </template>
             </p></div>
           
          
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    </v-col></v-row> -->
</div>

</template>

<script>
    export default {
        name: "Manage FAQs" ,
       data(){
       return{
         dialog : false,

       }},
      
      
  
    }
    
  
</script>

<style scoped>
h1{
    color: gray;
    text-align: center;
}
h3{
    color: gray;
    text-align: center;
}



</style>
