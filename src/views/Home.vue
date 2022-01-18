<template>

  <div>
    <div v-if="userType===0">
      <Banner id="mi" type="search" />
      <Notibar v-if="!loginState()" />
      <PopCompany/>
      <News/>
    </div>
    <!-- import the Banner component and pass the Banner type which will change the layout of the Banner -->
    <div v-if="userType===1">
      <Banner type="search" />
      <Notibar v-if="loginState()" />
      <Recommend />
      <PopCompany/>
      <News/>
    </div>
    <div v-if="userType===2">
      <Banner />
      <Notibar v-if="loginState()" />
      <Activity />
      <OpenJob />
      <News/>

    </div>



  </div>
</template>

<script>
    import Banner from "../components/Banner";
    import Notibar from "../components/Notibar";
    // import carousel from "../components/carousel";

    import Recommend from "../components/Recommend";
    import OpenJob from "../components/OpenJob";
    import PopCompany from "../components/PopCompany";
    import Activity from "../components/Activity";
    import News from "../components/News";

    // import Concat from "../components/Concat";
    // import About from "../components/About";
    // import NewFile from "../components/NewFile";

    export default {
        components: {
            Banner,
            Notibar,
            // Concat,
            // carousel,
            Recommend,
            PopCompany,
            News,
            // About,
            // NewFile,

            Activity,
            OpenJob
        },
        methods: {
          loginState() {
            return this.$store.state.loginState;
          }
        },
        computed: {
            userType() {
                if (
                    this.$store.state.loginState &&
                    this.$store.state.userType === "jobSeeker"
                )
                    return 1;
                if (
                    this.$store.state.loginState &&
                    this.$store.state.userType === "jobRecruiter"
                )
                    return 2;
                else return 0;
            }
        }
    };
</script>
