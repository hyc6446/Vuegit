// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import {Dialog,Form} from 'element-ui'
import ElementUI from 'element-ui';
import App from './App'
import router from './router'
import './assets/css/font.css'
import './assets/css/normalize.css'
import './assets/css/main.css'
// import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/mobile.css'
import './assets/js/lib-flexible.js'
import './assets/js/jquery-2.1.0'

/* eslint-disable no-new */
Vue.config.productionTip = false
// Vue.use(Dialog)
// Vue.use(Form)

Vue.use(ElementUI)
new Vue({
  el: '#app',
  router,
  // components: { App },
  // template: '<App/>',
  render: h => h(App)
})
