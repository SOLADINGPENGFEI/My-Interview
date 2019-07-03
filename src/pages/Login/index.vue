<template>
    <div class="person-center">
        <div class="userInfo">
            <div class="user-avtar">
                <image src="/static/images/my.png"/>
            </div>
            <p>{{formatPhone}}</p>
        </div>
        <div class="list-nav">
            <div class="item-nav" @click="myInterview">
                <icon class="" size="18" type="waiting" role="img"></icon>
                <label for="">我的面试</label>
                <image src="/static/images/arrow.svg"></image>
            </div>
            <button class="item-nav">
                <icon class="" size="18" type="info" role="img"></icon>
                <label for="">客服中心</label>
                <image src="/static/images/arrow.svg"></image>
            </button>
        </div>
        <button v-if="!hasPhone" open-type="getPhoneNumber" @getphonenumber="getphonenumber">
            获取手机号
        </button>
        <button v-if="!showSetting" open-type="openSetting">
            设置权限
        </button>
    </div>
</template>
<script>
import {mapState,mapActions,mapMutations} from 'vuex'
import {encryptData} from '@/services/index'
export default {
    data() {
        return {
            userTel: '',
            hasPhone: false,
            showSetting: false
        }
    },
    components:{

    },
    computed:{
        ...mapState({

        }),
        formatPhone() {
            if(this.userTel) {
                return this.userTel.slice(0,3) + '****' + this.userTel.slice(7,11)
            } else {
                return '***********'
            }
        }
    },
    methods:{
        
        myInterview() {
            wx.navigateTo({
                url: '/pages/MyInterview/main'
            })
        },
        onLoad: function() {
            let that = this
            // 查看是否授权
            wx.getSetting({
            success (res){
                console.log('loginRes...',res.authSetting)
                if (res.authSetting['scope.userInfo']) {
                // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                wx.getUserInfo({
                    withCredentials: true,
                    success: function(res) {
                        that.hasPhone = true
                    console.log(res.userInfo)
                    }
                })
               
                } else {
                    // 未授权
                    that.hasPhone = false
                }
            }
            })
        },
        async getphonenumber(e) {
            let that = this
            console.log('e...',e)
            if(e.target.errMsg != 'getPhoneNumber:fail user deny') {
                //授权完成
                let data = await encryptData({
                    encryptedData: e.target.encryptedData,
                    iv: e.target.iv
                })
                console.log(data)
                that.userTel = data.data.phoneNumber
            } else {
                //授权失败
                this.showSetting =false
            }
        }
        
    },
    created(){
        
    }
}
</script>
<style scoped lang="scss">
    .person-center {
        width: 100%;
        height: 100%;
        .userInfo {
            background:#f4f6f9;
            width:100%;
            height:200px;
            box-sizing:border-box;
            padding:20px 0;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:space-around;
            .user-avtar {
                width: 80px;
                height: 80px;
                text-align: center;
                line-height: 80px;
                border-radius: 50%;
                background: #fff;
                image {
                    width: 90%;
                    height: 90%;
                }
            }
        }
        .list-nav {
            width: 100%;
            .item-nav {
                width:100%;
                display:flex;
                align-items:center;
                justify-content:space-between;
                box-sizing:border-box;
                padding:15px 20px;
                border-bottom:1px solid #eee;
                label {
                    flex: 1;
                    margin-left: 20px;
                    color: #666;
                    font-size: 18px;
                    background:transparent;
                    text-align:left;
                }
                image {
                    width:20px;
                    height:20px;
                }
            }
            button {
                border: none;
                text-decoration:none;
                color:#000000;
                background:transparent
            }
        }
    }
</style>