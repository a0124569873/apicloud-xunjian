<template>
    <div class="bodycontaner1">
        <div>
            <van-nav-bar title="巡检列表" class="title-color">
            </van-nav-bar>
            <van-nav-bar title="" class="xunjiantabbar">
                <div slot="left">手动巡检</div>
            </van-nav-bar>
            <div>
                <van-row>
                    <van-row justify="center" type="flex" class="xunjiancardsd">
                        <van-col span="8" style="text-align: center;">
                            <div @click="openscan">
                                <van-icon name="scan" size="50px" color="#67C23A"></van-icon><br/>
                                扫一扫
                            </div>
                        </van-col>
                        <van-col span="8" style="text-align: center;">
                            <div @click="find">
                                <van-icon name="search" size="50px" color="#F56C6C"></van-icon><br/>
                                查找设备
                            </div>
                        </van-col>
                        <van-col span="8" style="text-align: center;">
                            <div @click="$router.push('shoudong_list')">
                                <van-icon name="notes-o" size="50px" color="#E6A23C"></van-icon><br/>
                                手动巡检记录
                            </div>
                        </van-col>
                    </van-row>
                    <van-row justify="center" type="flex" class="xunjiancardsd1">
                        <van-col span="8" style="text-align: center;">
                            <div @click="$router.push('local_record')">
                                <van-icon name="clock" size="50px" color="#67C23A"></van-icon><br/>
                                本地记录
                            </div>
                        </van-col>
                        <van-col span="8" style="text-align: center;">
                            <!-- <div @click="find">
                                <van-icon name="search" size="50px" color="#F56C6C"></van-icon><br/>
                                查找设备
                            </div> -->
                        </van-col>
                        <van-col span="8" style="text-align: center;">
                            <!-- <div @click="$router.push('shoudong_list')">
                                <van-icon name="notes-o" size="50px" color="#E6A23C"></van-icon><br/>
                                手动巡检记录
                            </div> -->
                        </van-col>
                    </van-row>
                </van-row>
            </div>
            <!-- <van-nav-bar title="" class="xunjiantabbar">
                <div slot="left">自动巡检</div>
            </van-nav-bar>
            <div>
                <van-row justify="center" type="flex" class="xunjiancard">
                    <van-col span="8" style="text-align: center;">
                        <div @click="$router.push('zidong_list')">
                            <van-icon name="sign" size="50px" color="#409EFF"></van-icon><br/>
                            自动巡检报告
                        </div>
                    </van-col>
                    <van-col span="8" style="text-align: center;">
                    </van-col>
                    <van-col span="8" style="text-align: center;">
                    </van-col>
                </van-row>
            </div> -->

            <!-- <van-button @click="test" type="primary" style="margin-top: 50px;" size="large">
                测试按钮
            </van-button> -->

            <bottom-bar></bottom-bar>

            
        </div>
        
    </div>
</template>

<script>

import { listobj, scan } from '../data'


export default {

    data(){
        return {
            scankeys: [
                "categoryCode",
                "categoryName",
                "code",
                "name",
                "sectionCode",
                "sectionName",
            ]
        }  
    },

    mounted(){

    },

    methods: {

        test(){
            
            // let timestamp = new Date().getTime()
            // let newDate = new Date()
            // newDate.setTime(timestamp)
            // let res =  newDate.toLocaleString()

            // console.log(res);

// api.alert({
//     title: 'testtitle',
//     msg: 'testmsg',
// }, function(ret, err) {

// });

// api.notification({
//     sound:'default',
//     notify: {
//     title: '通知标题',
//         content: '通知内容'
//     }
// });

            let localconfig = localStorage.getItem("localconfig")

            console.log(localconfig == null);
            
            

        },

        find(){
            this.$router.push("add_record?type=shoudong")
        },

        openscan(){
            let _this = this

            if ((typeof api) == 'undefined'){
                let info = '{"categoryCode":"COVIJCQ","categoryName":"CO/VI检测器","code":"000001YRKCOVI","name":"右洞入口段CO/VI检测器","sectionCode":"CU1X1Q5","sectionName":"实验室隧道一"}'
                _this.$router.push(`add_record?info=${info}&type=saoma`)
                return
            }

            var FNScanner = api.require('FNScanner');
            FNScanner.open({
                autorotation: true
            }, function(ret, err) {
                if (ret && ret.eventType == 'success') {
                   
                    if ( !_this.checkscanjson(ret.content) ) {
                        _this.$toast("二维码内容错误")
                        return
                    }

                    

                    let info = ret.content
                    // let info = '{"categoryCode": "COVIJCQ","categoryName": "CO/VI检测器","code": "001001YCKCOVI","name": "CO/VI检测器YCKCOVI","sectionCode": "CU4933Y","sectionName": "西簧隧道"}'
                    _this.$router.push(`add_record?info=${info}&type=saoma`)
                } else {
                    if(err != ''){
                        _this.$toast('扫码失败' + JSON.stringify(err))
                    }
                }
            });
        },

        checkscanjson(content){
            if ( ! this.$isJSON(content) ) {
                return false
            }

            let con_json = JSON.parse(content)
            let res = true
            this.scankeys.map(item => {
                if (con_json[item] == undefined) {
                    res = false
                }
            })
            return res
        }
    }
}
</script>

<style lang="scss" scoped>
.xunjian_col{
    text-align: center;
}

.xunjiantabbar{
    .van-nav-bar__title{
        color: black;
        margin-top: 2px;
    }
}

.xunjiancard{
    margin: 5px;
    background-color: white;
    padding: 10px;
}

.xunjiancardsd{
    margin: 5px 0px 0px 0px;
    background-color: white;
    padding: 10px;
}

.xunjiancardsd1{
    margin: 0px 0px 5px 0px;
    background-color: white;
    padding: 10px;
}

</style>
