<template>
  <div class="wrap">
        <div class="main">
            <TencentMap />
            <button class="userInfo" @click="Login">
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

export default {
  data () {
    return {
      
    }
  },

  components: {
    Foot,TencentMap
  },

  methods: {
      Login() {
        wx.navigateTo({
          url: '/pages/Login/main'
        })
      }
  },

  created () {
    // let app = getApp()
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
