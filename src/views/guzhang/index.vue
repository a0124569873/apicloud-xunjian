<template>
    <div>
        <van-nav-bar title="故障列表" class="title-color">
        </van-nav-bar>

        <van-tabs v-model="active">
            <van-tab title="未处理故障">
                <van-list v-if="true" style="margin-top: 2px;">
                    <van-cell v-for="item in guzhanglist" :key="item.code" @click="clickdetail(item)">
                        <deviceitem  :item="item"/>
                    </van-cell>
                </van-list>
            </van-tab>
            <van-tab title="历史故障">
                <van-list v-if="true" style="margin-top: 2px;">
                    <van-cell v-for="item in guzhanglist" :key="item.code" @click="clickdetail(item)">
                        <deviceitem :item="item" :cur="currentPage"/>
                    </van-cell>
                </van-list>
            </van-tab>
        </van-tabs>

        <van-nav-bar @click-right="switchpop" class="pagesize">
            <div slot="right">
                <van-icon name="edit"></van-icon>
            </div>
            <div slot="title" >
                总条数[{{total}}]每页条数&nbsp;&nbsp;&nbsp;[{{pagesize}}]
            </div>
        </van-nav-bar>
        <van-pagination 
        v-model="currentPage" 
        :total-items="total" 
        :items-per-page="pagesize"
        force-ellipses
        />
        
        <bottom-bar></bottom-bar>
        <van-popup
            v-model="showpop"
            position="bottom"
        >
            <van-picker
                show-toolbar
                :columns="[5, 10, 20, 40]"
                @confirm="popconfirm"
                @cancel="showpop = false"
            />
        </van-popup>

    </div>
</template>

<script>

import deviceitem from './deviceitem'
import * as data from '../data' 

export default {

    components: {
        deviceitem
    },

    data(){
        return {
            showpop: false,
            currentPage: 0,
            total: 0,
            pagesize: 5,
            active: 0,
            guzhanglist: [],
            imgpre:[]
        }
    },

    watch: {
        active(newval, oldval){
            this.switchTab(newval)
        },
        currentPage(n, o){
            this.pageChange(n)
        }
    },

    mounted(){
        this.total = this.$RN(50, 100)
        this.pageChange(this.pagesize)
        data.type().map(item => {
            this.imgpre.push(item.code)
        })
        
    },

    methods: {

        switchpop(){
            this.showpop = !this.showpop
        },

        popconfirm(v, i){
            this.pagesize = v
            this.gendata()
            this.showpop = !this.showpop
        },

        pageChange(val){
            this.gendata()
        },

        gendata(){
            this.guzhanglist = []
            
            if(this.currentPage < (this.total/this.pagesize)){
                for (let i = 0; i < this.pagesize; i++) {
                    this.guzhanglist.push({code: this.currentPage + " " +  i , id: i, imgpath: this.imgpre[this.$RN(0,7)]})
                }
            }else{
                for (let i = 0; i < (this.total%this.pagesize); i++) {
                    this.guzhanglist.push({code: this.currentPage + " " +  i , id: i, imgpath: this.imgpre[this.$RN(0,7)]})
                }
            }
            
        },

        switchTab(val){
            switch (val) {
                case 0:
                    console.log(this.active);
                    
                    break;
                case 1:
                    console.log(this.active);

                    break;
            
                default:
                    break;
            }
        },

        clickdetail(item){
            this.$router.push(`gz_detail?gz_id=${item.code}`)
        }
    }

}
</script>

<style lang="scss" scoped>

.pagesize {
    .van-nav-bar__title{
        color: black;
        margin-top: 2px;
    }
}

.testvant {
    margin: 10px;
}

</style>
