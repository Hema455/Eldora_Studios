<template>
  <div class="main">
    <div class="accordion faq" id="accordionExample">

      <h2 class="card-header text-center"> General Questions </h2>
      <div
              v-for="(question, index) in generalQuestions"
              :key="question.title"
              v-b-toggle="'accordion-generalquestions' + index"
              class="card-header row"
      >
        <div class="col-7 col-md-6">
          <h5
                  class="align-self-start text-start font-weight-bold"
                  block
                  variant="info"
          >
            {{ question.title }}
          </h5>
        </div>
        <!-- <div class="col-1 align-self-end">
          <radio
            class="fa fa-plus"
            style="font-size: 30px"
          ></radio>
        </div> -->

        <b-collapse
                :id="'accordion-generalquestions' + index"
                :accordion="'generalquestions-accordion' + index"
                role="tabpanel"
        >
          <div class="container-fluid">
            <div class="card-body">
              <span id="spnCustomerName">{{ question.value }}</span>
            </div>
          </div>
        </b-collapse>
      </div>
      <h2 class="card-header text-center">
        Job Search
      </h2>
      <div
              v-for="(question, index) in jobSearch"
              :key="question.title"
              v-b-toggle="'accordion-jobsearch' + index"
              class="card-header row"
      >
        <h5
                class="col-7 col-md-4 align-self-start text-start font-weight-bold"
                block
                variant="info"
        >
          {{ question.title }}
        </h5>

        <b-collapse
                :id="'accordion-jobsearch' + index"
                :accordion="'jobsearch-accordion' + index"
                role="tabpanel"
        >
          <div class="container-fluid">
            <div class="card-body">
              <span id="spnCustomerName">{{ question.value }}</span>
            </div>
          </div>
        </b-collapse>
      </div>

    </div>
    <v-pagination
            v-model="page"
            :length="12"
            limit="8"
            circle
            :color="blue"
            :total-visible="7"

    ></v-pagination>
  </div>

</template>
<script>
  // import VueFaqAccordion from "vue-faq-accordion";

  export default {
    components: {
      // VueFaqAccordion,
    },
    data: () => ({
      page:1,
      generalQuestions: [
        {
          title: "How effective is Eldora in finding employment opportunities?",
          value:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " +
                  "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud " +
                  "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure " +
                  "dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
                  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim " +
                  "id est laborum.",
        },
        {
          title: "How to open an account?",
          value:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" +
                  " ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco " +
                  "laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in " +
                  "voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat " +
                  "non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          title: "What is the quickest way to search jobs?",
          value:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                  "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
                  "ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit " +
                  "in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint " +
                  "occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          title: "How do I update my account information?",
          value:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt " +
                  "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco " +
                  "laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate" +
                  " velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident," +
                  " sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          title: "Forgot password?",
          value:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut " +
                  "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris " +
                  "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit " +
                  "esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt " +
                  "in culpa qui officia deserunt mollit anim id est laborum.",
        },
      ],
      jobSearch: [
        {
          title: "How effective is Eldora in finding employment opportunitie?",
          value:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " +
                  "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud " +
                  "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure " +
                  "dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
                  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim " +
                  "id est laborum.",
        },
        {
          title: "How do you open an account?",
          value:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" +
                  " ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco " +
                  "laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in " +
                  "voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat " +
                  "non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          title: "What is the quickest way to search job?",
          value:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                  "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
                  "ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit " +
                  "in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint " +
                  "occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
      ],
    }),
    methods: {
      myFunction(x) {
        x.classList.toggle("fa fa-minus");
      },
    },
  };
</script>
<style>
  .main{
    padding: 20px;
  }
  .faq {
    /*min-height: 100%;*/
    background-color: white;
    margin: 20px 300px;
    font-size: 1em;
  }
  .fa-plus {
    transition: all 0.3s;
  }

  .fa-plus:active {
    transform: rotate(45deg);
  }
</style>
