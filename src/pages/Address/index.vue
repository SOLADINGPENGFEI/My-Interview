<template>
    <div class="address">
        <div class='searchAddress'>
            <label for="">北京</label>
            <input type="text" placeholder="请选择面试地址" 
             v-model='address' focus>
        </div>
        <div class='search-cont'>
            <ul class="list">
                <li v-for="(item,index) in searchData" :key='index' 
                hover-class="hover" @click='select(index)'>
                    <image src="/static/images/location.svg"></image>
                    <div>
                        <h3>{{item.title}}</h3>
                        <p>{{item.address}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import {mapMutations} from 'vuex'
import {debounce} from '@/utils/index.js'

export default {
    data() {
        return {
            searchData:[],
            address: ''
        }
    },
    watch: {
        // 监听input框变化,调用智能提示
        address(val, oldVal) {
            this.search(val)
        }
    },
    methods:{
         
        select(index) {
            console.log('index...',index)
            //更新当前地址
            this.updateState({
                address: this.searchData[index]
            })
            //返回上一页
            wx.navigateBack()
        },
        ...mapMutations({
            updateState: 'interview/updateState'
        })
       
    },
    created(){
        const that = this
        this.search = debounce((val) => {
            this.$map.search({
                keyword: val,
                region: '北京',
                key: that.$map.key,
                page_size:10,
                page_index:1,
                success: function(res) {
                    console.log(res)
                    that.searchData = res.data
                }
            })
        },300)
    }
}
</script>
<style scoped lang="scss">
    .address {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .searchAddress {
            width: 100%;
            height: 40px;
            display: flex;
            align-items:center;
            border-top:1px solid #eee;
            border-bottom:1px solid #eee;
            label {
                width:26%;
                text-align:center;
                box-sizing:border-box;
                border-right:2rpx solid #eee;
                }
            input {
                cursor:auto;
                text-indent: 10px;
                display:block;
                height:40px;
                text-overflow:clip;
                overflow:hidden;
                white-space:nowrap;
                font-family:UICTFontTextStyleBody;
                min-height:40px;
            }
        }
       .search-cont {
           width: 100%;
           flex: 1;
           .list {
            li {
                height: 50px;
                padding:5px 0 5px 30px;
                box-sizing: border-box;
                border-bottom: 1px solid #eee;
                display: flex;
                align-items: cneter;
                flex-direction: row;
                image {
                    width: 22px;
                    height: 22px;
                }
                div {
                    flex:1;
                    margin-left:15px;
                    display:flex;
                    flex-direction:column;
                    justify-content:space-around;
                    h3 {
                        font-size: 17px
                    }
                    p {
                        font-size: 12px;
                        color:silver
                    }
                }
            }
        }
       }
        
    }
</style>