<template>
    <div>
        <van-nav-bar :title="'告警记录'" @click-left="$router.push('wode')"  class="title-color">
            <van-icon name="arrow-left" slot="left" size="30px"/>
        </van-nav-bar>

        <van-collapse v-model="colactive">
            <van-collapse-item v-for="item in list" :title="item.name + '-' + tolocal(item.timestamp)" :name="item.timestamp" style="text-align: center;">
                {{item.msg[0]}}<br/>
                {{item.msg[1]}}
            </van-collapse-item>
        </van-collapse>

        <div v-if="list.length == 0" style="text-align: center; margin: 10px;">
            记录为空
        </div>

        <van-button
            @click="clearall"
            type="primary"
            size="large"
        >
            清空列表
        </van-button>

        <bottom-bar></bottom-bar>

    </div>
</template>
<script>
export default {

    data(){
        return{
            list: [],
            colactive: []
        }
    },

    mounted(){

        let _this = this

        let warn_str = localStorage.getItem("warnrecord")

        if(warn_str == null){
            warn_str = '{}'
        }

        let warn_json = JSON.parse(warn_str)

        Object.keys(warn_json).map(item => {
             warn_json[item].msg = warn_json[item].msg.split("<br/>")
            _this.list.push(warn_json[item])
        })

    },

    methods: {

        tolocal(time){
            return new Date(time).toLocaleString()
        },

        clearall(){
            if (this.list.length == 0) {
                this.$toast("记录为空")
                return
            }
            localStorage.setItem("warnrecord", "{}")
            this.list = []
            this.$toast("清空成功")
        }
    }


}
</script>
<style lang="scss" scoped>

</style>
