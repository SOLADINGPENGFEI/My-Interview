<template>
    <div class='TencentMap'>
        <map id="map" 
        :longitude="longitude" 
        :latitude="latitude" 
        scale="14" 
        key="X7RBZ-MMOKR-UQEWJ-WSCXC-IVXVK-IFFLL"
        show-location></map>
    </div>
</template>
<script>
import QQMapWX from '@/utils/qqMap'
import {mapState,mapActions} from 'vuex'

export default {
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
        })
    },
    computed: {
        
        ...mapState({
            longitude: state => state.index.longitude,
            latitude: state => state.index.latitude
        })
    }

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
    }
</style>