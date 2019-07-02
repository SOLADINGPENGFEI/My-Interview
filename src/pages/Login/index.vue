<template>
    <div class="person-center">
        <button class="userInfo" open-type="getUserInfo" bindgetuserinfo="userInfoHandler">
            <div class="user-avtar">
                <image src="/static/images/my.png"/>
            </div>
            <p>{{phone}}</p>
        </button>
        <div class="list-nav">
            <div class="item-nav" @click="myInterview">
                <icon class="" size="18" type="waiting" role="img"></icon>
                <label for="">我的面试</label>
                <span>▶</span>
            </div>
            <button class="item-nav">
                <icon class="" size="18" type="info" role="img"></icon>
                <label for="">客服中心</label>
                <span>▶</span>
            </button>
        </div>
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
    components:{

    },
    computed:{
        ...mapState({
            phone: state => state.index.phone
        })
    },
    methods:{
        myInterview() {
            wx.navigateTo({
                url: '/pages/MyInterview/main'
            })
        },
        onLoad: function() {
            // 查看是否授权
            wx.getSetting({
            success (res){
                if (res.authSetting['scope.userInfo']) {
                // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                wx.getUserInfo({
                    success: function(res) {
                    console.log(res.userInfo)
                    }
                })
                }
            }
            })
        },
        bindGetUserInfo (e) {
            console.log(e.detail.userInfo)
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