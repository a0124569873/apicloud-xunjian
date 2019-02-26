<template>
    <div>
        <van-nav-bar :title="'本地记录'" @click-left="$router.push('xunjian')"  class="title-color">
            <van-icon name="arrow-left" slot="left" size="30px"/>
        </van-nav-bar>

        <van-list
        >
            <van-cell
                v-for="item in list"
                :key="item"
                :title="item.devicename"
            />
        </van-list>

        <van-button
            type="primary"
            size="large"
            style="margin: 10px 0px;"
            @click="uploadrecord"
        >
            上传记录
        </van-button>

        <bottom-bar></bottom-bar>

    </div>
</template>
<script>

import xunjianService from '../../services/xunjianService'
import axios from 'axios'
import * as config from '../config'

export default {

    data(){
        return {
            list: [],
            tunnellist: {},
            domainconfig : '',
        }
    },

    mounted(){

        let xjr = localStorage.getItem("xunjianrecord")
        if (xjr == null) {
            xjr = '{}'
        }
        let xjr_json = JSON.parse(xjr)

        Object.keys(xjr_json).map(item => {
            xjr_json[item].map(suidaoitem => {
                this.list.push(suidaoitem)
            })
        })

        xunjianService.getAllTunnel().then(res => {
            res.map(item => {
                this.tunnellist[item.code] = item
            })
        })

        this.domainconfig = config.imguploaddomain
        
    },

    methods: {

        uploadrecord(){

            let _this = this

            let xjr = localStorage.getItem("xunjianrecord")
            if (xjr == null) {
                xjr = '{}'
            }
            let xjr_json = JSON.parse(xjr)

            Object.keys(xjr_json).map(item => {
                let timestamp = new Date().getTime()

                let equips = []

                xjr_json[item].map(eachsuidao_item => {

                    //上传记录
                    let params = {
                        equipCode : eachsuidao_item.equipCode,
                        serverity : '1',
                        symptom : eachsuidao_item.symptom,
                        timestamp : timestamp,
                        solutionCode : '1',
                        imageUrl : eachsuidao_item.imageUrl
                    }
                    xunjianService.addXunjianRecordItemItem(params).then(res => {
                        if(res == true){
                            this.$toast(`上传记录${eachsuidao_item.devicename}结束`)
                        }
                    })

                    //上传图片
                    eachsuidao_item.imgs.map(imgitem =>{
                        let formdata = new FormData()
                        formdata.append('file64', imgitem['file-content'].split(",")[1]);
                        formdata.append('fileName', imgitem['file-name']);
                        formdata.append('fileLength', imgitem['file-size']);
                        
                        let config = {
                            // headers:{'Content-Type':'multipart/form-data'}
                        };

                        axios.create().post(_this.domainconfig, formdata, config).then(res => {
                            
                            if (res.data.code == 200){
                                _this.$toast("上传" + imgitem['file-name'] + "成功")
                            }else{
                                _this.$toast("上传失败")
                            }
                        }).catch((err) => {
                            _this.$toast("上传失败" + err)
                        }).always((err) =>  {
                            // console.log(err);
                            // _this.loading = false
                        })
                    })

                    //拼接记录equits
                    equips.push(eachsuidao_item.devicename)

                })

                let params = {
                    timestamp: timestamp,
                    faultCount: xjr_json[item].length,
                    equipCount: xjr_json[item].length,
                    section: _this.tunnellist[item].name,
                    equips: equips.join(" "),
                    createDate: _this.$FT(timestamp),
                    sectionCode: item,
                    allCheck: '1'
                }
                
                xunjianService.addXunjianRecordItem(params).then(res => {
                    _this.$toast(`隧道[${_this.tunnellist[item].name}]记录上传成功`)
                }).catch(res => {
                    _this.$toast(res)
                })

            })

        }
        
    },
}
</script>

<style lang="scss" scoped>

</style>
