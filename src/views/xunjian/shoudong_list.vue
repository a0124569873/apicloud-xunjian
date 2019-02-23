<template>
    <div>
        <van-nav-bar title="手动巡检记录" @click-left="onClickLeft" class="title-color">
            <van-icon name="arrow-left" slot="left" size="30px"/>
        </van-nav-bar>
        <van-collapse v-model="suidaoactive">
                <van-collapse-item v-for="suidaoitem in suidao" :title="suidaoitem.name" :name="suidaoitem.code">
                    <van-collapse v-model="typeactive">
                        <van-collapse-item v-for="typeitem in type" :title="typeitem.name" :name="typeitem.code">
                            <van-collapse v-model="shebeiactive">
                                <van-collapse-item v-for="shebeiitem in shebei[typeitem.code]" :title="shebeiitem.name" :name="shebeiitem.code">
                                    <div style="display: flex; justify-content: space-between;">
                                        <div @click="clickdetail(shebeiitem)">
                                            {{shebeiitem.name}}:故障
                                        </div>
                                        <div>
                                            <van-button type="primary" :disabled="shangbao">{{shangbao ? '已上报' : '点击上报' }}</van-button>
                                        </div>
                                    </div>
                                </van-collapse-item>
                            </van-collapse>
                        </van-collapse-item>
                    </van-collapse>
                </van-collapse-item>
        </van-collapse>
        <bottom-bar></bottom-bar>
    </div>
</template>

<script>

import deviceitem from './shoudong_list_item'
import * as data from '../data'
import xunjianService from '../../services/xunjianService'


export default {

    components: {
        deviceitem
    },

    data(){
        return {
            // shangbao: true,
            active: 0,
            // suidaoitem: {
            //     name: "隧道1", code: "suidao1"
            // },
            suidao: [],
            suidaoactive: [],
            type: [],
            typeactive: [],
            shebei: [],
            shebeiactive: [],
            recordlist: {},

        }
    },

    computed: {
        shangbao(){
            let res = (this.$RN(0, 9) > 5) ? true : false
            return res
        }
    },

    mounted (){
        let _this = this
        xunjianService.getAllTunnel().then(res => {
            _this.suidao = []
            res.map(item => {
                _this.suidao.push({name: item.name, code: item.code})
                xunjianService.getXunjianList().then(res => {
                    res.dataList.map(recorditem => {

                    })
                })
            })
        })
    },

    watch: {
        active(newval, oldval){
            this.switchTab(newval)
        },
    },

    methods: {

        clickdetail(item){
            this.$router.push(`shoudong_detail?gz_id=${item.code}`)
        },

        onClickLeft(){
            this.$router.push("xunjian")
        }
    }

}
</script>

<style scoped>
.testvant {
    margin: 10px;
}

</style>
