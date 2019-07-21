<template>
    <div class="interview-list">
        <div class="tabNav">
            <span :class="(active+3)%4 === index?'active':null"
            v-for="(item,index) in tabNav" :key="index" @click="tab(index)">{{item}}</span>
        </div>
        <div class="cont-list">
            <span v-if="!list.length">当前分类还没有面试!</span>
            <ul v-else class='list-msg'>
                <li class="list-item" v-for="(ite,ind) in list" :key="ind" @click="goDetail(ite.id)">
                    <div class="title">
                        <label class='h3'>{{ite.company}}</label>
                        <label class="tag">{{ite.status==-1?'未开始':ite.status==0?'已打卡':'已放弃'}}</label>
                    </div>
                    <p class="area">{{ite.description}}</p>
                    <div class='time'>
                        <label class='interview-time'>面试时间:{{ite.start_time}}</label>
                        <label class='not-remind'>{{ite.remind?'未提醒':'已提醒'}}</label>
                    </div>
                </li>
            </ul>
            
        </div>
        <p class="more" v-if="list.length&&list.length>=10">{{hasMore?'上拉加载更多':'我是有底线的'}}</p>
    </div>
</template>
<script>
import {mapActions,mapState,mapMutations} from 'vuex'

export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            tabNav: ['未开始','已打卡','已放弃','全部'],
        }
    },
    computed:{
        ...mapState({
            list: state => state.sign.list,
            active: state => state.sign.active,
            page: state => state.sign.page,
            hasMore: state => state.sign.hasMore
        })
       
    },
    methods:{
        ...mapMutations({
            updateState: 'sign/updateState'
        }),
        ...mapActions({
            getList: 'sign/getList'
        }),
        tab(i) {
           this.updateState({active: (i+1)%4, page:1})
           this.getList()
       
        },
        goDetail(id) {
            wx.navigateTo({url: '/pages/Detail/main?id='+id})
        }
    },
    onShow() {
        this.getList()
    },
    onReachBottom() {
        if(this.hasMore) {
            this.updateState({page: this.page+1})
            this.getList()
        }
    }
}
</script>
<style scoped lang="scss">
    .interview-list {
        width: 100%;
        height: 100%;
        .more {
            text-align: center;
            font-size: 16px;
            line-height: 2;
            color: #999;
            border-top: 10px solid #eee;
        }
        .tabNav {
            position:fixed;
            top:0;
            left:0;
            background:#fff;
            z-index:99;
            width:100%;
            height:44px;
            display:flex;
            align-items:center;
            justify-content:space-around;
            border-top:1px solid #eee;
        }
        .cont-list {
            padding-top: 88px;
            span {
                font-size: 15px;
                color:#666;
                margin: 50px auto;
                margin-left: 130px;
            }
            .list-msg {
                width: 100%;
                .list-item {
                    border-top: 10px solid #eee;
                    width: 100%;
                    padding: 5px 15px;
                    box-sizing: border-box;
                    height: 120px;
                    .title {
                        width: 100%;
                        height: 40px;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        .h3 {
                            color:#000;
                            font-size: 22px;
                            font-weight:500;
                        }
                        .tag {
                            background-color:hsla(0,87%,69%,.1);
                            border-color:hsla(0,87%,69%,.2);
                            color:#f56c6c;
                            font-size: 15px;
                            padding: 2.5px 5px;
                        }
                    }
                    .area {
                        width: 100%;
                        height: 30px;
                        font-size: 16px;
                        color: #999;
                        line-height: 30px;
                    }
                    .time {
                        width: 100%;
                        height: 30px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        .interview-time {
                            color: rgb(28, 199, 221);
                        }
                        .not-remind {
                            background-color:hsla(220,4%,58%,.1);
                            border-color:hsla(220,4%,58%,.2);
                            color:#909399;
                            padding: 2.5px 5px;
                        }
                    }
                }
            }
        }
    }
    .active {
                border-bottom: 2px solid #197dbf;
                color: #197dbf;
            }
</style>