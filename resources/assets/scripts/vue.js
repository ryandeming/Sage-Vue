import Vue from 'vue';

// import VueCookie from 'vue-cookie';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Vue.use(VueCookie);

Vue.component(
  'hero',
  require('./vue/Hero.vue').default
);

Vue.component(
  'portfolio',
  require('./vue/Portfolio.vue').default
);


Vue.config.productionTip = false;


/**
*
* Root Vue Instance
*
*/
// eslint-disable-next-line
const app = new Vue({
  el: '#app',
});