import Vue from 'vue'
import App from './App'
//引入store
import store from '@/store/index'
//引入QQMap
import QQMapWx from '@/utils/qqMap.js'

Vue.config.productionTip = false
App.mpType = 'app'

//挂载store到原型链上
Vue.prototype.$store = store
//挂载QQMapdao到原型链上
var $map = new QQMapWx({
    key: 'X7RBZ-MMOKR-UQEWJ-WSCXC-IVXVK-IFFLL'
})
Vue.prototype.$map = $map

const app = new Vue(App)
app.$mount()
