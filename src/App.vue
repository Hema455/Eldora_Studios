<template>
  <v-app>
    <Navbar />
    <v-content>
      <router-view />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
export default {
  name: "App",
  components: {
    Footer,
    Navbar
  },
  data: () => ({
    //
  })
};
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
</script>
<style scoped>
#app {
  background-color: #ebebeb;
}
</style>
