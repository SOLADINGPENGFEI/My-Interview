import {fingerprint} from '@/services/index'

const state = {
    
}

const actions = {
    getResult(state,{...payload}) {
        return new Promise(async (resolve,reject)=>{
            console.log('payload...',payload,state)
            // payload.requestAuthModes = state.requestAuthModes
            // payload.challenge = state.challenge
            // payload.openid = payload.
            let result = await fingerprint(payload)
            console.log('result111...',result)
            // commit()
            resolve(result)
        })
    }
}

const mutations = {

}

export default  {
    namespaced: true,
    state,
    actions,
    mutations
}