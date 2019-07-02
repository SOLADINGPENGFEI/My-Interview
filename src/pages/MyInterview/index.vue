<template>
    <div class="interview-list">
        <div class="tabNav">
            <span :class="ind === index?'active':null"
            v-for="(item,index) in tabNav" :key="index" @click="tab(index)">{{item}}</span>
        </div>
        <div class="cont-list">
            <span>当前分类还没有面试!</span>
        </div>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            tabNav: ['未开始','已打卡','已放弃','全部'],
            ind: 0
        }
    },
    computed:{

    },
    methods:{
        tab(i) {
            this.ind = i
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    .interview-list {
        width: 100%;
        height: 100%;
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
            text-align:center;
            span {
                padding:50px 0;
                font-size: 15px;
                color:#666;
                
            }
            
        }
    }
    .active {
                border-bottom: 2px solid #197dbf;
                color: #197dbf;
            }
</style>