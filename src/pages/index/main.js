import Vue from 'vue'
import App from './index'
//引入vuex
import store from '@/store'

// add this to handle exception
Vue.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err)
  }
}


Vue.prototype.$store = store

const app = new Vue(App)
app.$mount()