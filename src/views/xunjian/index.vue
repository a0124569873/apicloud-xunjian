<template>
    <div class="bodycontaner1">
        <div>
            <van-nav-bar title="巡检列表" class="title-color">
            </van-nav-bar>
            <van-nav-bar title="" class="xunjiantabbar">
                <div slot="left">手动巡检</div>
            </van-nav-bar>
            <div>
                <van-row justify="center" type="flex" class="xunjiancard">
                    <van-col span="8" style="text-align: center;">
                        <div @click="openscan">
                            <van-icon name="scan" size="50px"></van-icon><br/>
                            扫一扫
                        </div>
                    </van-col>
                    <van-col span="8" style="text-align: center;">
                        <div @click="find">
                            <van-icon name="search" size="50px"></van-icon><br/>
                            查找设备
                        </div>
                    </van-col>
                    <van-col span="8" style="text-align: center;">
                        <div @click="$router.push('shoudong_list')">
                            <van-icon name="notes-o" size="50px"></van-icon><br/>
                            手动巡检记录
                        </div>
                    </van-col>
                </van-row>
            </div>
            <van-nav-bar title="" class="xunjiantabbar">
                <div slot="left">自动巡检</div>
            </van-nav-bar>
            <div>
                <van-row justify="center" type="flex" class="xunjiancard">
                    <van-col span="8" style="text-align: center;">
                        <div @click="$router.push('zidong_list')">
                            <van-icon name="sign" size="50px"></van-icon><br/>
                            自动巡检报告
                        </div>
                    </van-col>
                    <van-col span="8" style="text-align: center;">
                        <!-- <van-icon name="scan" size="50px"></van-icon><br/>
                        扫一扫 -->
                    </van-col>
                    <van-col span="8" style="text-align: center;">
                        <!-- <van-icon name="scan" size="50px"></van-icon><br/>
                        扫一扫 -->
                    </van-col>
                </van-row>
            </div>

            
        </div>
        
    </div>
</template>

<script>

import { listobj, scan } from '../data'


export default {

    data(){
        return {

            currentPage: 1,

            suidaolist: [
                
            ],

            zhongleilist: [

            ],

            devicelist: [

            ],

            listtype: "suidao"
        }  
    },

    mounted(){

    },

    methods: {

        find(){
            this.$router.push("shoudong_add")
        },

        openscan(){
            let _this = this
            // _this.$router.push(`saoma_add?deviceid=aaa`)
            let deviceid = ""

            var FNScanner = api.require('FNScanner');
            FNScanner.open({
                autorotation: true
            }, function(ret, err) {
                if (ret && ret.eventType == 'success') {
                    deviceid = JSON.parse(ret.content).code
                    _this.$router.push(`saoma_add?deviceid=${deviceid}`)
                } else {
                    _this.$toast(JSON.stringify(err))
                }
            });
        },

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

</style>
