<script>
import {mapMutations,mapState,mapActions} from 'vuex'
import {login} from './services/index'
import {getAuth,getLocation} from '@/utils/index'
export default {
  created () {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */

    wx.login({
      success: async res => {
        console.log('reslogin...',res)
        let data = await login(res.code)
        console.log(data)
        this.updateCode(data.data)
        wx.setStorageSync('openid',data.data.openid)
      }
    })

    
    // 用户一打开小程序，就做定位
    getAuth('scope.userLocation',async () => {
      let location = await getLocation()
      wx.setStorageSync('location',location)
      console.log('location...',location)
    })

    let openid = wx.getStorageSync('openid')
  },
  methods: {
      ...mapMutations({
        updateCode: 'updateCode'
      })
  },
  log () {
    console.log(`log at:${Date.now()}`)
  }
}
</script>

<style>
page{
  width: 100%;
  height: 100%;
}
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
