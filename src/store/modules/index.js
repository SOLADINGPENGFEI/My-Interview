import { DH_UNABLE_TO_CHECK_GENERATOR } from "constants";

//原始数据
const state = {
    longitude: '0',
    latitude: '0',
    multiArray: [
        ["1号","2号","3号","4号","5号","6号","7号","8号","9号","10号","11号","12号","13号","14号","15号","16号","17号","18号","19号","20号","21号","22号","23号","24号","25号","26号","27号","28号","29号","30号"],
        ["00点","1点","2点","3点","4点","5点","6点","7点","8点","9点","10点","11点","12点","13点","14点","15点","16点","17点","18点","19点","20点","21点","22点","23点"],
        ["00分","10分","20分","30分","40分","50分"]
        ],
    multiIndex: [0,0,0],
    openid: ''
}

//派发数据
const getters = {
    
}

//异步改变
const actions = {
    getLocation({commit},payload) {
        wx.getLocation({
            type: 'wgs84',
            altitude: 'true',
            success (res) {
                console.log('resMap...', res);
                commit('updateLocation',res)
            }
        })
    },
    
    
}

//同步改变,改变数据的唯一途径
const mutations = {
    updateLocation(state,payload) {
        state.longitude = payload.longitude
        state.latitude = payload.latitude
    },
    

   
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}