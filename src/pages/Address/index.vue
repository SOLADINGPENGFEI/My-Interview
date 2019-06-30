<template>
    <div class="address">
        <label for="">北京</label>
        <input type="text" placeholder="面试地址">
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    .address {
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
</style>