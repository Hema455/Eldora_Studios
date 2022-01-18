  import Vue from "vue";
  import App from "./App.vue";
  import router from "./router";
  import store from "./store";
  import {
      BootstrapVue,
      IconsPlugin
  } from "bootstrap-vue";
  import "bootstrap/dist/css/bootstrap.css";
  import "bootstrap-vue/dist/bootstrap-vue.css";
  import vuetify from "./plugins/vuetify";
  import "roboto-fontface/css/roboto/roboto-fontface.css";
  import "@mdi/font/css/materialdesignicons.css";
  import Vuelidate from "vuelidate";
  import moment from 'moment'

  Vue.use(IconsPlugin);
  Vue.use(Vuelidate);
  Vue.use(BootstrapVue);
  Vue.config.productionTip = false;
  import "roboto-fontface/css/roboto/roboto-fontface.css";
  import "@mdi/font/css/materialdesignicons.css";
  import VueGoogleCharts from 'vue-google-charts';
  Vue.use(Vuelidate);
  Vue.use(VueGoogleCharts);

  Vue.config.productionTip = false;

  Vue.filter('formatDate', function(value) {
      if (value) {
          return moment(String(value)).format('MM/DD/YYYY hh:mm')
      }
  });
  new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
  }).$mount("#app");