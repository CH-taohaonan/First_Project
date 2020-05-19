import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import UrlConstant from './constant/UrlConstant.js'
import httputils from './utils/httputils.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'


Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.prototype.httputils = httputils
Vue.prototype.UrlConstant = UrlConstant
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
