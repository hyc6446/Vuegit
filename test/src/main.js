// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'
// import router from './router'
//
// Vue.config.productionTip = false
//
// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
/*
入口js：     创建js实例
* */

import Vue from 'vue'
//  引入组件
import App from './App.vue'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  //  映射成标签
  components: {
    App
  },
  //  使用标签
  template: '<App/>'
})
