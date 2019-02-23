<template>
    <div>
        <van-nav-bar :title="type == 'saoma' ? '扫码上报' : '手动上报'" @click-left="onClickLeft"  class="title-color">
            <van-icon name="arrow-left" slot="left" size="30px"/>
        </van-nav-bar>

        <saomaaddtitle :imgsrc.sync="imgsrc" :devicename.sync='devicename' :suidao.sync="suidao" :devicetype.sync="devicetype" v-if="type=='saoma'" />

        <shoudongaddtitle v-if="type == 'shoudong'" ref="shoudongcom"/>
        
        <addcom ref="addcom" :questions.sync="questions"/>

        <van-row class="showdong_add_item">
            <van-col span="24" style="text-align: center;">
                <van-button type="primary" style="width: 200px;" @click="upload">上报</van-button>
                <van-button type="primary" style="width: 200px;" @click="test">上报</van-button>
            </van-col>
        </van-row>

        <bottom-bar></bottom-bar>

    </div>
</template>

<script>

import addcom from './addcomponent'
import saomaaddtitle from './saoma_addtitle'
import shoudongaddtitle from './shoudong_addtitle'

import * as type from '../type'
import xunjianService from '../../services/xunjianService'

export default {

    components: {
        addcom,
        saomaaddtitle,
        shoudongaddtitle
    },

    data(){
        return {
            show: false,
            poptype:'',
            suidao: '',
            type: '',
            shebei: '',
            inputval: "",
            questions: [],
            questionres: [],
            code: '',
            photos: [],
            imgsrc: '',
            devicename: '',
            devicetype: '',

        }
    },

    mounted(){

        this.type = this.$route.query.type

        if (this.type == 'saoma'){
            let info = this.$route.query.info
            let json_info = JSON.parse(info)
            this.imgsrc = 'static/mapIcon/' + json_info.categoryCode + '--1.png'
            this.devicename = json_info.name
            this.code = json_info.code
            this.suidao = json_info.sectionName
            this.devicetype = json_info.categoryName
            this.questions = type.typecode[json_info.categoryCode].split(",")
        }

        
    },

    methods: {

        test(){
            console.log(this.$refs.shoudongcom.code);
            
        },

        upload(){

            let _this = this

            if (this.type == 'shoudong') {
                this.code = this.$refs.shoudongcom.code
            }

            if(this.code == ''){
                this.$toast("请选择设备")
                return
            }

            if (this.$refs.addcom.filess.length != 0 || this.$refs.addcom.questionres.length != 0 || this.$refs.addcom.inputval != ''){

                let problem = this.$refs.addcom.questionres.join(",") + "|" + this.$refs.addcom.inputval
                let imgs_arr = []
                Object.keys(this.$refs.addcom.files).map(item => {
                    this.$refs.addcom.files[item].finimgurl = _this.code + "-" + new Date().getTime() +  "-" + this.$RN(0, 9999) +  "-" + this.$refs.addcom.files[item].file.file.name
                    imgs_arr.push(this.$refs.addcom.files[item].finimgurl)
                }) 

                let imgs = imgs_arr.join(",")
    
                let params = {}
                params.equipCode = this.code
                params.serverity = '1'
                params.symptom = problem
                params.timestamp = new Date().getTime()
                params.solutionCode = '1'
                params.imageUrl = imgs
    
                xunjianService.addXunjianRecordItem(params).then(res => {
                    if(res == true){
                        this.$toast("上传记录结束，开始上传图片")
                        this.$refs.addcom.uploadimgs()
                    }
                })
            }else{
                this.$toast("请输入问题描述")
            }

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
