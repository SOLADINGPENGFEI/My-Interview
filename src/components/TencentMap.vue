<template>
    <div class='TencentMap'>
        <map 
        id="map" 
        :longitude="longitude" 
        :latitude="latitude" 
        scale="14" 
        key="X7RBZ-MMOKR-UQEWJ-WSCXC-IVXVK-IFFLL"
        show-location
        show-compass
        :markers="markers"
        :include-points="points"
        :circles="circle"
        @markertap="markertap"
        @regionchange="regionChange"></map>
        <cover-view class="relocation">
                <cover-image class="locationIcon" src="/static/images/location.png" 
                @click="goCurrent" />
        </cover-view>
    </div>
</template>
<script>
import QQMapWX from '@/utils/qqMap'
import {mapState,mapActions} from 'vuex'
import getDistance from '@/utils/distance.js'
import {getLocation,getAuth} from '@/utils/index.js'

export default {
    data() {
        return {
            location: {
                latitude: 0,
                longitude: 0
            },
            distance: 0
        }
    },
    props: {
        markers: {
            type: Array,
            default: []
        },
        markertap: {
            type: Function,
            default: () => {}
        },
        reginonChange: {
            type: Function,
            default: () => {}
        },
        reLocation: {
            type: Boolean,
            default: false
        },
        updateDistance: {
            typef: Function,
            default: () => {}
        }
    },
    created() {
           let qqmapsdk = new QQMapWX({
            key: 'X7RBZ-MMOKR-UQEWJ-WSCXC-IVXVK-IFFLL'
            });
            //获取当前位置
            this.getLocation()
    },
    methods: {
        ...mapActions({
            getLocation: 'index/getLocation'
        }),
        goCurrent() {
            getAuth('scope.userLocation', async () => {
                let location = await getLocation()
                this.location = location

                console.log('scope.userLocation...',this.location,this.markers[0])
                // 重新计算距离
                if(this.updateDistance) {
                    this.distance = getDistance(this.location.latitude, this.location.longitude,
                    this.markers[0].latitude, this.markers[0].longitude)
                    this.updateDistance(this.distance)
                }
            })
        }
    },
    mounted() {
        this.goCurrent()
    },
    computed: {
        ...mapState({
            longitude: state => state.index.longitude,
            latitude: state => state.index.latitude
        }),
        // points() {
        //     return [this.location, ...this.markers]
        // },
        // circle() {
        //     if(!this.markers.length) {
        //         return []
        //     } else {
        //         return [{
        //             ...this.markers[0],
        //             color: this.distance > 100 ? '#c9394A':'#197DBF',
        //             fillColor: 'rgba(0,0,0,.3)',
        //             radius: 100,
        //             strokeWidth: 2
        //         }]
        //     }
        // }
    },
    watch: {
        reLocation() {
            // 检测重新定位当前位置
            this.goCurrent()
        }
    },


}
</script>
<style scoped lang="scss">
    .TencentMap {
        width: 100%;
        height: 100%;
        #map {
            height: 100%;
            width: 100%;
        }
        .relocation {
        position: fixed;
        left: 10px;
        bottom: 75px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: none;
     }
    }
</style>