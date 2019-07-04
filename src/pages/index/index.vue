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
      }
     
  },
  cmoputed: {
     
  },
  created () {   
    
  
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
    }
    .footer {
      width: 100%;
      height: 50px;
    }
  }
  
</style>
