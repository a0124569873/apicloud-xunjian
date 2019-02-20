<template>
    <div class="bodycontaner1">
        <div>
            <van-nav-bar title="巡检列表">
                <van-icon name="scan" slot="right" @click="openscan" size='30px' />
            </van-nav-bar>
            <van-list v-if="listtype == 'suidao'">
                <van-cell v-for="item in suidaolist" :key="item.id" @click="clickSuidao(item)">
                    <div>{{item.name}}</div>
                </van-cell>
            </van-list>
            <van-list v-if="listtype == 'zhonglei'">
                <van-cell v-for="item in zhongleilist" :key="item.code" @click="clickZhonglei(item)">
                    <div>{{item.name}}</div>
                </van-cell>
            </van-list>
            <van-list v-if="listtype == 'jilu'">
                <van-cell v-for="item in devicelist" :key="item.code"><deviceitem /></van-cell>
            </van-list>
            <van-pagination 
                v-model="currentPage" 
                :total-items="1000" 
                :items-per-page="5"
                force-ellipses=true
            />
            <div style="height: 60px"></div>
        </div>
        
    </div>
</template>

<script>

import deviceitem from './deviceitem'
import { listobj, scan } from './data'


export default {

    components: {
        deviceitem,
    },

    data(){
        return {

            currentPage: 1,

            suidaolist: [
                {name: '隧道1', id: "A001"},
                {name: '隧道2', id: "A002"},
                {name: '隧道3', id: "A003"},
                {name: '隧道4', id: "A004"}
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

        openscan(){
            let _this = this
            var FNScanner = api.require('FNScanner');
            FNScanner.open({
                autorotation: true
            }, function(ret, err) {
                if (ret && ret.eventType == 'success') {
                    let deviceid = ret.content
                    _this.$router.push(`xj_detail?deviceid=${deviceid}`)
                } else {
                    _this.$toast.error(JSON.stringify(err))
                }
            });
        },

        clickSuidao(item){
            this.listtype = "zhonglei"
            this.zhongleilist = listobj.list
        },

        clickZhonglei(item1){
            this.listtype = "jilu"
            let _this = this
            this.zhongleilist.map(item => {
                if (item1.code == item.code){
                    _this.devicelist = item
                }
            })
        },

    }
}
</script>