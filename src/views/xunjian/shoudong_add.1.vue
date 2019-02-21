<template>
    <div>
        <van-nav-bar title="手动查找设备" @click-left="onClickLeft"  class="title-color">
            <van-icon name="arrow-left" slot="left" size="30px"/>
        </van-nav-bar>
        <van-row class="showdong_add_item">
            <van-col span="12">所在隧道</van-col>
            <van-col span="12">
                <div @click="showPop('suidao')">{{suidao}}</div>
            </van-col>
        </van-row>
        <van-row class="showdong_add_item">
            <van-col span="12">设备分类</van-col>
            <van-col span="12">
                <div @click="showPop('type')">{{type}}</div>
            </van-col>
        </van-row>
        <van-row class="showdong_add_item">
            <van-col span="12">设备</van-col>
            <van-col span="12">
                <div @click="showPop('shebei')">{{shebei}}</div>
            </van-col>
        </van-row>

        <van-row class="showdong_add_item1">
            <van-col span="24">
                <div class="title">
                    现场图片:
                </div>
                <div style="display: flex;align-items: center;flex-wrap: wrap; width: 100%">
                    <img v-for="item in files" :src="item.content" alt="" style="width: 100px; height: 100px;margin: 0px 5px;">
                    <van-icon name="delete" size="50px" @click="delall"/>
                    <van-uploader :after-read="onRead">
                        <van-icon name="plus" size="50px"/>
                    </van-uploader>
                    <van-button
                        :loading="loading"
                        loading-text="上传中.."
                        style="width: 200px;"
                        size="normal"
                        @click="uupload"
                        type="primary"
                    >
                        上传
                    </van-button>
                </div>

            </van-col>
        </van-row>
        <van-row class="showdong_add_item1">
            <van-col span="24">
                <div class="title">
                    问题描述:
                </div>
                <van-checkbox-group v-model="questionres">
                    <van-checkbox
                        v-for="item in questions"
                        :key="item.code"
                        :name="item.code"
                    >
                        {{item.name}}
                    </van-checkbox>
                </van-checkbox-group>
            </van-col>
        </van-row>

        <van-row class="showdong_add_item1">
            <van-col span="24">
                <div class="title">
                    备注:
                </div>
                <van-cell-group>
                    <van-field type="textarea" rows="10" v-model="inputval" placeholder="请输入描述" />
                </van-cell-group>
            </van-col>
            
        </van-row>

        <van-row class="showdong_add_item">
            <van-col span="24" style="text-align: center;">
                <van-button type="primary" size="large">上报</van-button>
            </van-col>
            
        </van-row>

        <bottom-bar></bottom-bar>

        <van-popup
            v-model="show"
            position="bottom"
        >
            <van-picker
                show-toolbar
                :columns="columns"
                @confirm="popconfirm"
                @cancel="show = false"
            />
        </van-popup>
    </div>
</template>

<script>

import axios from 'axios'
import 'es6-promise-always'

export default {

    mounted(){
        this.questions = [
            {name: '外观有破损', code: '001'},
            {name: '外观不好看', code: '002'},
            {name: '噪音太大', code: '003'},
        ]
    },

    data(){
        return {
            show: false,
            poptype:'',
            columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
            suidao: '请选择>',
            type: '请选择>',
            shebei: '请选择>',
            inputval: "",
            questions: [],
            questionres: [],
            photos: [],
            files: [],
            loading: false

        }
    },

    methods: {

        delall(){
            this.files = []
        },

        uupload(){

            if(this.files.length == 0){
                this.$toast("请至少添加一张图片")
                return
            }

            this.loading = true

            let _this = this

            let aaxios = axios.create()
            let formdata = new FormData()
            this.files.map(item => {
                formdata.append('imgfile', item.file, item.file.name);
            })
            
            let config = {
                // headers:{'Content-Type':'multipart/form-data'}
            };
            // config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
            aaxios.post('http://47.105.40.29:19999/uploadimg', formdata, config).then(res => {
                // _this.$dialog.alert({message: JSON.stringify(res)})
                if (res.data == "success"){
                    _this.$toast("上传成功")
                }else{
                    _this.$toast("上传失败")
                }
            }).catch((err) => {
                _this.$toast("上传失败")
            }).always(() =>  {
                _this.loading = false
            })
        },

        onRead(file){
            this.files.push( file )
        },

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
            this.$dialog.alert({message: item.link})
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

.showdong_add_item1{

    background-color: white;

    .title{
        margin: 5px;
    }

    .van-col{
        font-size: 20px;
    }

    .van-checkbox{
        padding: 5px;
        font-size: 16px;
    }

    .van-icon{
        margin: 20px;
    }

}

.showdong_add_item{
    padding: 20px;
    background-color: white;
    margin: 5px;
}
</style>
