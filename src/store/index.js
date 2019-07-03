import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

//引入子模块
import index from './modules/index'
import interview from './modules/interview'
import sign from './modules/sign'

Vue.use(Vuex)

export default new Vuex.Store({
    mutations:{
        updateCode(state, payload) {
            console.log(state)
            state.index.openid = payload.openid
        },
        updateState(state, payload) {
            state.info = payload
        }
    },
    modules: {
        index,
        interview,
        sign
    },
    state: {
        info: {}  //用户信息
    },
    plugins: [createLogger()]
})