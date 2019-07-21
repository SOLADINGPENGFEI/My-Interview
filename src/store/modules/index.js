import { DH_UNABLE_TO_CHECK_GENERATOR } from "constants";

//原始数据
const state = {
    longitude: '0',
    latitude: '0',
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
                // console.log('resMap...', res);
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