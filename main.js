
// #ifndef VUE3
import Vue from 'vue'
import App from './App'

import * as enums from 'helper/enum.js'
const EnumPlugin = {
  install(Vue) {
    Vue.prototype.$enums = enums;
  }
};
Vue.use(EnumPlugin)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif

console.log("this......",Vue)