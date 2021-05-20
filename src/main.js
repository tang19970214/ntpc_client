import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue2Editor from "vue2-editor";
import qrcode from 'vue-qrcode-directive';

import './assets/all.scss';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueAxios, axios);
Vue.use(Vue2Editor);
Vue.use(require('vue-moment'));
Vue.use(qrcode);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
