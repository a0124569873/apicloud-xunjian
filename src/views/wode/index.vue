<template>
    <div>
        <van-nav-bar title="我的" class="title-color">
        </van-nav-bar>

        <van-row class="title-color" style="padding: 10px;">
            <van-col span="8">
                <div style="border-radius: 50%;margin: 0px 20px;">
                    <van-icon name="manager" size="100px"></van-icon>
                </div>
            </van-col>
            <van-col span="16" style="color: white;">
                <van-row>
                    <van-col style="font-size: 20px;margin: 10px;">
                        李&nbsp;&nbsp;思
                    </van-col>
                </van-row>
                <van-row>
                    <van-col style="margin: 10px;">
                        运维管理
                    </van-col>
                </van-row>
            </van-col>
        </van-row>

        <van-nav-bar style="margin: 5px 0px;">
            <div slot="left">
                我的上报
            </div>
            <div slot="right">
                <van-icon name="arrow" size="40px" @click="$router.push('zidong_list')"></van-icon>
            </div>
        </van-nav-bar>

        <van-nav-bar style="margin: 5px 0px;">
            <div slot="left">
                测试页面
            </div>
            <div slot="right">
                <van-icon name="arrow" size="40px" @click="$router.push('test')"></van-icon>
            </div>
        </van-nav-bar>

        <van-nav-bar style="margin: 5px 0px;" @click-right="denglu">
            <div slot="left">
                跳到登录
            </div>
            <div slot="right">
                <van-icon name="arrow" size="40px" @click="denglu"></van-icon>
            </div>
        </van-nav-bar>

    </div>
</template>

<script>

import axios from 'axios'

export default {

    data(){
        return {

        }
    },

    watch:{
        
    },

    methods: {

        denglu(){
            this.$toast("sdfsdfsdfsdf")
            this.$router.push("/login")
        }

    }
}
</script>

<style lang='scss' scoped>

</style>
