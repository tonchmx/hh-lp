import Vue from 'vue';
import App from './App.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bulma/css/bulma.min.css';
import './styles/app.css';

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init();
  },
  render: h => h(App)
}).$mount('#app');
