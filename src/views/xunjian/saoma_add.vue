<template>
    <div>
        <van-nav-bar title="扫码上报" @click-left="onClickLeft"  class="title-color">
            <van-icon name="arrow-left" slot="left" size="30px"/>
        </van-nav-bar>
        <van-row class="showdong_add_item" type="flex" justify="center">
            <van-col>
                    <img src="static/mapIcon/SDFJ-1.gif" alt="">
                </van-col>
            </van-row>
        <van-row class="showdong_add_item">
            <van-col span="24">
                <div>{{shebei}} {{code}}</div>
            </van-col>
        </van-row>
        <van-row class="showdong_add_item">
            <van-col span="12">所在隧道</van-col>
            <van-col span="12">
                <div>{{suidao}}</div>
            </van-col>
        </van-row>
        <van-row class="showdong_add_item">
            <van-col span="12">方向</van-col>
            <van-col span="12">
                <div>{{fangxiang}}</div>
            </van-col>
        </van-row>
        
        <addcom />

        <van-row class="showdong_add_item">
            <van-col span="24" style="text-align: center;">
                <van-button type="primary" style="width: 200px;">上报</van-button>
            </van-col>
        </van-row>

        <bottom-bar></bottom-bar>

    </div>
</template>

<script>

import addcom from './addcomponent'

export default {

    components: {
        addcom
    },

    data(){
        return {
            show: false,
            poptype:'',
            columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
            suidao: '西黄隧道',
            type: '',
            shebei: '隧道风机FJ03',
            inputval: "",
            fangxiang: "西坪-寺湾",
            questions: [],
            questionres: [],
            code: '',
            photos: []


        }
    },

    mounted(){

        this.code = this.$route.query.deviceid

        this.questions = [
            {name: '外观有破损', code: '001'},
            {name: '外观不好看', code: '002'},
            {name: '噪音太大', code: '003'},
        ]
    },

    methods: {

        paizhao(){
            let _this = this;
            var FNPhotograph = api.require('FNPhotograph');
            FNPhotograph.open({
                path: 'fs://savePath',
                album: true ,
                quality: 'medium'
            }, function(ret){

                if(ret.eventType == "takePhoto"){
                    _this.photos.push({link: ret.imagePath})
                    FNPhotograph.close()
                }
                
            });
        },

        showlink(item){
            this.$notify(item.link)
        },

        showPop(type){
            this.poptype = type
            this.show = true
            switch (type) {
                case 'suidao':
                    this.columns = ['隧道1', '隧道2', '隧道3']
                    break;
                case 'type':
                    this.columns = ['设备种类1', '设备种类2', '设备种类3']
                    break;
                case 'shebei':
                    this.columns = ['设备1', '设备2', '设备3']
                    break;
            
                default:
                    break;
            }
        },

        popconfirm(value, index){
            this.show = false
            this[this.poptype] = value
        },

        onClickLeft(){
            this.$router.push("xunjian")
        }
    }
}
</script>

<style lang="scss" scoped>

.showdong_add_item{
    padding: 10px;
    background-color: white;
    margin: 0px;
    text-align: center;
}

</style>
