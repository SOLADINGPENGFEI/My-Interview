<template>
    <div class="punch">
        <div class="map">
            <TencentMap :markers="markers" :updateDistance="updateDistance" />
        </div>
        <div class="gopunch">
            <button @tap="goSign">打卡</button>
        </div>
    </div>
</template>
<script>
import TencentMap from '@/components/TencentMap'
import getDistance from '@/utils/distance.js'
import {mapState,mapActions} from 'vuex'

export default {
    components:{
        TencentMap
    },
    data(){
        return {
            distance: 0
        }
    },
    computed:{
        ...mapState({
            info: state=>state.sign.info
        }),
        distance() {
            return getDistance(this.info.latitude, this.info.longitude)
        },
        markers() {
            if(this.info && Object.keys(this.info)) {
                return [{
                    iconPath: '/static/images/job.png',
                    latitude: this.info.latitude,
                    longitude: this.info.longitude,
                    title: this.info.company,
                    width: 20,
                    height: 20
                }]
            } else {
                return []
            }
        }
    },
    methods:{
        ...mapActions({
            updateDetail: 'sign/updateDetail'
        }),
        // 点击标注物
        marketTap(e) {

        },
        updateDistance(distance) {
            console.log('distance...', distance)
            this.distance = dsitance
        },
        async goSign() {
            let distance = this.distance
            if(this.distance < 100) {
                let result = await this.updateDetail({
                    id: this.info.id,
                    params: {
                        status: 0,
                        sign_time: +new Date()
                    }
                })
                console.log('result...', result)
                ex.showToast({
                    title: '打卡成功', //提示的内容
                    icon: 'none' // 图标
                })
            } else {
                if(this.distance > 1000) {
                    distance = (this.distance/1000).toFixed(2) + '公里'
                } else {
                    distance = this.distance + '米'
                }
                console.log('distance...', distance, this.distance)
                wx.showToast({
                    title: `你距离目的地还有${distance},暂时还不能打卡`, //提示的内容
                    icon: 'none'
                })
            }
        }
    },
    async onShow() {
        // 修改标题
        wx.setNavigationBarTitle({ title:'打卡'+this.info.company})
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    .punch {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .map {
            width: 100%;
            flex: 1;
        }
        .gopunch {
            width: 100%;
            height: 50px;
            button {
                width: 100%;
                height: 50px;
                border: none;
                background: #dd1ce4;
                color: #fff;
                line-height: 50px;
                border-radius: 0;
            }
        }
    }
</style>