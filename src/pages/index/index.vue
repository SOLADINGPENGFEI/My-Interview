<template>
  <div class="wrap">
        <div class="main">
            <TencentMap />
            <button class="userInfo" @click="UserLogin">
                  <image class="userIcon" src="/static/images/my.png" />
            </button>
        </div>
        <div class="footer">
            <Foot />
        </div>
  </div>
</template>

<script>
import TencentMap from '@/components/TencentMap'
import Foot from '@/components/footer'

import {mapState,mapActions,mapGetters} from 'vuex'
export default {
  data () {
    return {
       
    }
  },

  components: {
    Foot,TencentMap
  },

  methods: {
      UserLogin() {
        wx.navigateTo({
          url: '/pages/Login/main'
        })
      },
      ...mapActions({
          Login: 'index/Login'
        })
  },
  cmoputed: {
      ...mapState({
         openid: state=> state.index.openid
      })
  },
  created () {   
    this.Login()  
    wx.getSetting({
      success(res) {
        // console.log(res)
        if(res.authSetting) {
          //授权
          wx.getUserInfo({
            success: function(res) {
              let userInfo = res.userInfo
              let nickName = userInfo.nickName
              let avatarUrl = userInfo.avatarUrl
              let gender = userInfo.gender //性别 0：未知、1：男、2：女
              let province = userInfo.province
              let city = userInfo.city
              let country = userInfo.country
            },
            fail: function(resF) {
              console.log('resF...',resF)
            }
          })
        } else {
          // 未授权
          wx.authorize({
          scode: 'scope.record',
          success: (res)=>{
            console.log(res)
            wx.getUserInfo({
            success: function(res) {
              let userInfo = res.userInfo
              let nickName = userInfo.nickName
              let avatarUrl = userInfo.avatarUrl
              let gender = userInfo.gender //性别 0：未知、1：男、2：女
              let province = userInfo.province
              let city = userInfo.city
              let country = userInfo.country
            }});
          },
          fail: ()=>{
            wx.openSetting();
          }
        })
        }
      }
    })
  
  }
}
</script>

<style lang='scss'>
    page,.wrap {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .main {
      flex: 1;
      width: 100%;
      .userInfo {
        position: fixed;
        bottom: 75px;
        right: 10px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: rgba(87, 85, 85, 0.507);
        z-index: 99;
        color: #fff;
        font-size: 12px;
        line-height: 50px;
        .userIcon {
          width: 40px;
          height: 40px;
          line-height: 40px;
          position:absolute;
          right: 5px;
        }
      }
    }
    .footer {
      width: 100%;
      height: 50px;
    }
  }
  
</style>
