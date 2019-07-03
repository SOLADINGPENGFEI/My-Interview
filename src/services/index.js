import request from '../utils/request'

//登录
export let login = code => {
    return request.post('https://sign.jasonandjay.com/user/code2session',{
        code
    })
}

//添加面试
export let addSign = params => {
    return request.post('https://sign.jasonandjay.com/sign',params)
}

//解密数据
export let encryptData = params => {
    return request.post('https://sign.jasonandjay.com/user/decrypt', params)
}

// 获取面试列表
export let getSignList = params => {
    return request.get('/sign',params)
}

// 获取面试详情
export let getSignDetail = id => {
    return request.get('/sign/'+id)
}

//更新面试状态
export let updateSignDetail = (id, params) => {
    return request.post('/user/decrypt', params)
}