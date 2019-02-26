<template>
    <div>
        <van-nav-bar title="手动巡检记录" @click-left="onClickLeft" class="title-color">
            <van-icon name="arrow-left" slot="left" size="30px"/>
        </van-nav-bar>
        <van-collapse v-model="suidaoactive">
            <van-collapse-item v-for="suidaoitem in suidao" :title="suidaoitem.name" :name="suidaoitem.code">
                <van-list v-if="true" style="margin-top: 2px;">
                    <van-cell v-for="item in suidaoitem.recordlist.dataList" :key="item.timestamp" @click="$router.push('shoudong_record_list_items_list?timestamp=' + item.timestamp)">
                        <!-- {{item}} -->
                        <deviceitem :item.sync="item"/>
                    </van-cell>
                </van-list>
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
            suidao: {},
            suidaoactive: [],
            type: [],
            recordtive: [],
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
            _this.suidao = {}
            res.map(item => {
                _this.suidao[item.code] = item
                let params = {
                    pageNo : 1,
                    pageSize: 5,
                    sectionCode: item.code,
                    startTime: '2017-1-31',
                    endTime: _this.getenddate() 
                }
                _this.suidao[item.code].recordlist = {dataList: []}
                xunjianService.getXunjianList(params).then(res => {
                     _this.suidao[item.code].recordlist = res
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

        getenddate(){
            let timestamp = new Date().getTime()
            let newDate = new Date()
            newDate.setTime(timestamp)
            let res =  newDate.toLocaleString()
            return res.replace("/",'-')
        },

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
