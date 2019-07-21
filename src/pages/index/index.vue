<template>
  <div class="wrap">
        <div class="main">
            <TencentMap />
            <button class="userInfo" @click="UserLogin">
                  <image class="userIcon" src="/static/images/my.png" />
            </button>
            <button class="soter" @click="Soter">指纹识别</button>
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
          getResult: 'user/getResult'
      }),
      Soter() {
        wx.startSoterAuthentication({
          requestAuthModes: ['fingerPrint'],
          challenge: 'hello user',
          authContent: '请用指纹解锁',
          success(res) {
            console.log('res...',res)
            if(res.errMsg === 'startSoterAuthentication:ok') {
               wx.showToast({
                 title: '指纹验证成功',
                 icon: 'success'
               })
            } else {
                wx.showToast({
                 title: '指纹验证失败,请重试',
                 icon: 'none'
               })
            }
          },fail(err) {
            console.log('err...',err)
          }
        })
      }
  },
  cmoputed: {
     
  },
  created () {   
    this.getResult()
  
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
        right: 10px;
        bottom: 75px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: rgba(218, 211, 211, 0.404);
        image {
            width: 40px;
            height: 40px;
            line-height: 40px;
            position:absolute;
            right: 5px;
          }
     }
     .soter {
       height: 40px;
       position: fixed;
       left: 10px;
       bottom: 150px;
       border: none;
       background:rgba(135, 115, 190, 0.507);
       color: #fff;
       z-index: 99;
     }
    }
    .footer {
      width: 100%;
      height: 50px;
    }
  }
  
</style>
