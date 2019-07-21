<template>
    <form class="addInterview" @submit="submit" report-submit>
        <div class="message">
            <h3>面试信息</h3>
            <div>
                <span>公司名称</span>
                <input type="text" placeholder="请输入公司名称" v-model="current.company">
            </div>
            <div>
                <span>公司电话</span>
                <input type="text" placeholder="请输入面试联系人电话" v-model="current.phone" maxlength="11">
            </div>
            <div>
                <span>面试时间</span>
                <picker mode="multiSelector"
                class="pick"
                :value="info.date" 
                :range="dateRange"
                @change="dateChange"
                @columnchange="columnChange">
                    <view class="picker">
                        {{dateShow}}
                    </view>
                    
                </picker>
                <icon @click="showTimeTip" class="" size="18" type="info" role="img"></icon>
            </div>
            <div>
                <span>面试地址</span>
                <input type="text" placeholder="请输入面试地址" v-model="current.address.address" @click="myAddress">
            </div>
        </div>
        <div class="message">
            <h3>备注信息</h3>
            <textarea name="" id="area" v-model="current.description" placeholder="备注信息(可选,100个字以内)"></textarea>
        </div>
        <button :class="btnEnable?'':'disable'" form-type="submit">确认</button>
    </form>
</template>
<script>
import {mapState,mapActions,mapGetters, mapMutations} from 'vuex'
const moment = require('moment')   

const range = [
        ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"],
        ["00","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],
        ["00分","10分","20分","30分","40分","50分"]
        ]

export default {
    data(){
        return {
            info: {
                date: [0,0,0]
            },
        }
    },
    computed:{
        ...mapState({
            current: state=>state.interview.current
        }),
        //按钮是否可点击
        btnEnable() {
            // 判断公司名称是否为空
            if(!this.current.company) {
                return false
            }
            //判断手机是否符合规范
            if(!/^1(3|4|5|7|8)\d{9}$/.test(this.current.phone)|| !/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(this.current.phone)) {
                return false
            }
            // 判断公司地址
            if(!this.current.address.address) {
                return false
            }
            return true
        },
        // 处理面试日期
        dateRange() {
            let dateRange = [...range]
            // 如果时间是今天,过滤掉现在之前的小时
            if(!this.info.date[0]) {
                dateRange[1] = dateRange[1].filter(item => {
                    return item > moment().hour()
                })
            } else {
                dateRange[1] = range[1]
            }
            // 格式化小时
            dateRange[1] = dateRange[1].map(item => {
                return item + '点'
            })
            // 计算当前日期之后的十天
            dateRange[0] = dateRange[0].map(item=> {
                return moment().add(item, 'days').date() + '号'
            })
            return dateRange
        },
        // 显示的日期
        dateShow() {
            return moment()
                .add(moment().hour()==23?this.info.date[0]-1:this.info.date[0],'d')
                .add(this.info.date[1]+1, 'h')
                .minute(this.info.date[2]*10)
                .format('YYYY-MM-DD HH:mm')
        }

    },
    methods:{
        myAddress() {
            wx.navigateTo({
                url: '/pages/Address/main'
            })
        },
        ...mapActions({
            submitInterview: 'interview/submit'
        }),
        ...mapMutations({
            updateState: 'interview/updateState'
        }),
        // 监听多列选择器每列变化
        columnChange(e) {
            // console.log('column...e',e)
            let {column,value} = e.target
            let date = [...this.info.date]
            date[column] = value
            this.info.date = date
        },
        showTimeTip() {
            wx.showToast({
                title: '在面试前一个小时我们会通知您',
                icon: 'none'
            })
        },
        // 点击确认提交添加面试
        async submit(e) {
            // console.log('submit...e',e)
            // 判断是否在提交状态
            
            // 判断公司名称是否为空
            if(!this.current.company) {
                wx.showToast({
                    title: '请输入公司名称', //提示的内容
                    icon: 'none' //图标
                })
                return false
            }
            // 判断手机号是否符合规范
            if(!/^1(3|4|5|7|8)\d{9}$/.test(this.current.phone) || !/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(this.current.phone)) {
                wx.showToast({
                    title: '请输入面试联系人的手机或座机', //提示的内容
                    icon: 'none'  //图标
                })
                return false
            }
            // 判断公司地址
            if(!this.current.address.address) {
                wx.showToast({
                    title: '请选择公司地址', //提示的内容
                    icon: 'none' //图标
                })
                return false
            }
            // 添加时间戳到表单
            this.current.start_time = moment(this.dateShow).unix()*1000
            // 添加form_id
            this.current.form_id = e.target.formId
            // this.submiting = true
            let data = await this.submitInterview(this.current)
            // console.log('submitData...',data)
            // this.submiting = false
            //处理添加的结果
            if(data.code === 0) {
                wx.showModal({
                    title: '温馨提示', //提示的标题
                    content: data.msg, //提示的内容
                    showCancel: false,
                    confirmText: '确定', //确定按钮的文字,默认为取消,最多4个字符
                    confirmColor: '#197DBF', //确定按钮的文字颜色
                    success: res => {
                        if(res.confirm) {
                            this.updateState({
                                form_id: '',
                                company: '',
                                address: '',
                                phone: ''
                            })
                            wx.navigateTo({url: '/pages/MyInterview/main'})
                        }
                    }
                })
            } else {
                wx.showModal({
                    title: 'data.mag', //提示的内容
                    icon: 'fail' //图标
                })
            }
        }
        
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
        button {
            margin-top: 25px;
            color: #fff;
            background: #197DBF;
        }
        button.disable{
            background: #999;
        }
    }
</style>