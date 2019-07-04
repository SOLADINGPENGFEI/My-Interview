<template>
    <div class="detail">
        <ul class="interview_detail">
            <li>
                <label>面试地址:</label>
                <span class='address'>{{info.address && info.address.address}}</span>
            </li>
            <li>
                <label>面试时间:</label>
                <span class='time'>{{info.start_time}}</span>
            </li>
            <li>
                <label>联系方式:</label>
                <span class='tel' @click="makePhone">{{info.phone}}</span>
            </li>
            <li>
                <label>是否提醒:</label>
                <span class='remind'>{{info.remind?'未提醒':'已提醒'}}</span>
            </li>
            <li>
                <label>面试状态:</label>
                <span class='status'>{{info.status==-1?'未开始':info.status==0?'已打卡':'已放弃'}}</span>
            </li>
            <li>
                <label>取消提醒:</label>
                <switch class='cancel' :checked='info.remind===1' @change='cancelRemind' />
            </li>
        </ul>
        <div class="btns" v-if="info.status == -1">
            <button class="card" @click='gopunch'>去打卡</button>
            <button class="abandon" @click='giveup'>放弃面试</button>
        </div>
    </div>
</template>
<script>
import { mapActions,mapState } from 'vuex'
export default {
    data(){
        return {
            data: {

            }
        }
    },
    computed:{
        ...mapState({
            info: state => state.sign.info
        })
    },
    methods:{
        ...mapActions({
            getDetail: 'sign/getDetail',
            updateDetail: 'sign/updateDetail'
        }),
        //拨打电话
        makePhone() {
            wx.makePhoneCall({ phoneNumber:this.info.phone})
        },
        cancelRemind(e) {
            // 取消提醒
            this.updateDetail({
                id: this.id,
                params: {remind: e.target.value?1:-1}
            })
        },
        //打卡
        gopunch() {
            wx.navigateTo({ url: '/pages/Punch/main'})
        },
        //放弃面试
        giveup() {
            wx.showModal({
                title: '温馨提示', // 提示的标题
                content: '确定要放弃本次面试吗?', //提示的内容
                success: async res => {
                    if(res.confirm) {
                        await this.updateDetail({
                            id: this.id,
                            params: { status: 1}
                        })
                    }
                }
            })
        }
    },
    created(){
        
    },
    mounted(){

    },
    onLoad(options) {
            // 获取id
            this.id = options.id
            // 把view属性加到响应监听里面
            this.$set(this.data, 'view', options.view || false)
        },
        async onShow() {
            wx.showLoading({
                title: '加载数据中...', //提示的内容
                mask: true, //显示透明蒙层,防止触摸穿透
            })
            await this.getDetail(this.id);
            // 修改标题
            wx.setNavigationBarTitle({title: this.info.company})
            wx.hideLoading()
        },
        onShareAppMessage() {
            return {
                title: this.info.company + '的面试',
                path: '/pages/sign/detail/main?view=1&id=' + this.id,
                success: res = {},
                fail: () => {},
                complete: () => {}
            }
        }
}
</script>
<style scoped lang="scss">
    .detail {
        width: 100%;
        height: 100%;
        .interview_detail {
            border-top:1rpx solid #eee;
            border-bottom:1rpx solid #eee;
            background:#fff;
            li {
                width:720rpx;
                min-height:88rpx;
                margin-left:30rpx;
                border-bottom:1rpx solid #eee;
                display:flex;
                align-items:center;
                justify-content:space-between;
                label {
                    color:#666;
                    width:170rpx;
                    font-size:30rpx;
                }
                span {
                    flex:1;
                    font-size:30rpx;
                    color:#333;
                    padding-right:30rpx;
                    box-sizing:border-box;
                }
            }
        }
        .btns {
            width: 100%;
            display:flex;
            justify-content: space-around;
            align-items: center;
            padding: 25px 0;
            button {
                width: 45%;
                border: none;
                border-radius: 0;
                color: #fff;
            }
            .card {
                background:#197dbf;
            }
            .abandon {
                background: #dc4e42;
            }
        }
    }
</style>