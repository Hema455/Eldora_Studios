<template>
<div class="container-fluid">
<div class="row">
<div class="col-sm-6">
<About />
</div>
<div class="col-sm-6">
<slider />
</div>
</div>
<div class="row">
<div class="col-sm-6">
<PopCompany />
</div>
<div class="col-sm-6">
<News />
</div>

</div>
</div>

</template>

<script>
// import Banner from "../components/Banner";
// import carousel from "../components/carousel";

// import Recommend from "../components/Recommend";
// import OpenJob from "../components/OpenJob";

import PopCompany from "../components/PopCompany";
// import Activity from "../components/Activity";
// import Concat from "../components/Concat";
import About from "../components/About";
import News from "../components/News";
import slider from "../components/slider";
export default {
components: {
// Banner,
// Concat,
// carousel,
// Recommend,
PopCompany,
slider,
About,
News,
// Activity,
// OpenJob
},
methods: {},
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
