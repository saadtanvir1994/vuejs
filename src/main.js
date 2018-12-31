import Vue from 'vue'
import App from './App.vue'
import router from './router'
/* Importing Bootstrap Vue Files*/
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
/* Importing Jquery*/
import Jquery from 'jquery'
global.$ = Jquery;
/* Importing Google Maps */
import * as VueGoogleMaps from "vue2-google-maps";
import VueGrecaptcha from 'vue-grecaptcha'
/* For Routing */
router.beforeEach((to,from,next) =>{
  document.title = to.meta.title
  next()
});

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyB4XICMkmwCPkDqs79GloMjxXtKR2U0YPo",
    libraries: "places" // necessary for places input
  }
});
/* Calling the Vue Method to load it in project*/
Vue.use(BootstrapVue);

 Vue.use(window.VueGrecaptcha, {
    sitekey: '6LeYdoQUAAAAACVDUn8bLf9e7Kt7TWxbCYeeSIU8'
  });

/* Vue Instances */
new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
