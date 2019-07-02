<template>
    <div class="addInterview">
        <div class="message">
            <h3>面试信息</h3>
            <div>
                <span>公司名称</span>
                <input type="text" placeholder="请输入公司名称">
            </div>
            <div>
                <span>公司电话</span>
                <input type="text" placeholder="请输入面试联系人电话">
            </div>
            <div>
                <span>面试时间</span>
                <picker mode="multiSelector"
                class="pick"
                :value="date" 
                :range="multiArray"
                bindchange="bindMultiPickerChange"
                bindcolumnchange="bindMultiPickerColumnChange">
                    <view class="picker">
                        {{multiArray[0][multiIndex[0]]}} {{multiArray[1][multiIndex[1]]}} {{multiArray[2][multiIndex[2]]}}
                    </view>
                    
                </picker>
                <icon class="" size="18" type="info" role="img"></icon>
            </div>
            <div>
                <span>面试地址</span>
                <input type="text" placeholder="请输入面试地址" @click="myAddress">
            </div>
        </div>
        <div class="message">
            <h3>备注信息</h3>
            <textarea name="" id="area" placeholder="备注信息(可选,100个字以内)"></textarea>
        </div>
        <button>确认</button>
    </div>
</template>
<script>
import {mapState,mapActions,mapGetters} from 'vuex'
    
export default {
    data(){
        return {
            date: new Date().toLocaleDateString()
            
        }
    },
    computed:{
        ...mapState({
            multiArray: state => state.index.multiArray,
            multiIndex: state => state.index.multiIndex
        })

    },
    methods:{
        myAddress() {
            wx.navigateTo({
                url: '/pages/Address/main'
            })
        },
        bindMultiPickerChange: function(e) {
            console.log('picker发送选择改变，携带值为',e.detail.value)
            this.setData({
                multiIndex: e.detail.value
            })
        },
        bindMultiPickerColumnChange: function(e) {
            console.log('修改的列为',e.detail.column,'值为',e.detail.value)
            let data = {
                multiArray: this.data.multiArray,
                multiIndex: this.data.multiIndex
            }
            data.multiIndex[e.detail.column] = e.detail.value
        },
        
    },
    created(){
    
    }
 
}
</script>
<style scoped lang="scss">
    .addInterview {
        width: 100%;
        .message {
            h3 {
                background: #f0eeee;
                padding: 10px;
            }
            div {
                display: flex;
                height: 40px;
                align-items: center;
                padding: 0 10px;
                border-bottom: 1px solid #ccc;
                justify-content: space-around;
                &:last-child {
                    border-bottom: none;
                }
                span {
                    font-size: 16px;
                    color: #ccc;
                    width: 30%;
                }
                input {
                    width: 70%;
                    text-indent: 10px;
                    font-size: 16px;
                    cursor:auto;
                }
               .pick {
                   width: 60%;
                   height: 100%;
                   font-size: 14px;
                   line-height: 40px;
               }
            }
             textarea {
                margin: 10px auto;
                width: 90%;
                border: 1px solid #ccc;
                border-radius: 5px;
                padding: 10px;
            }
        }
    }
</style>