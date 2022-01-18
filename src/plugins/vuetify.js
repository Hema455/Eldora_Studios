import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#0F75BC',//blue
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#FF9800',//orange
        success: '#4CAF50',//green
        background:"#EBEBEB", //grey white
        warning: '#FFC107'
      },
    },
  },
  icons: {
    iconfont: 'mdi',
  },
});
