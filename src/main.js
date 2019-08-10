import Vue from 'vue';
import App from './App.vue';
import 'bulma/css/bulma.min.css';
import './styles/app.css';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
