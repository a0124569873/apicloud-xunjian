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
                <van-icon name="arrow" size="40px"></van-icon>
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

        <!-- <div @click="paizhao">
            <van-icon name="photograph" size="50px"></van-icon>
        </div>
        <div @click="paizhao1">
            <van-icon name="photograph" size="50px"></van-icon>
        </div>

        <div style="background-color: black;">
            <img :src="imgpath" alt="" style="width: 200px; height: 200px;">
        </div>

        <div id="pic"></div>

        <input type="text" :value="imgpath" style="width:200px;"> -->


        
    </div>
</template>

<script>
export default {

    data(){
        return {
            imgpath: 'static/mapIcon/SDFJ-1.gif'
        }
    },

    watch:{
        imgpath(newval, oldval){
            this.$toast(newval)
        }
    },

    methods: {

        denglu(){
            this.$toast("sdfsdfsdfsdf")
            this.$router.push("/login")
        },



        paizhao1(){
            let _this = this;
            api.getPicture({
                sourceType: 'album',//library
                encodingType: 'jpg',
                mediaValue: 'pic',
                destinationType: 'url',
                allowEdit: false,
                quality: 60,
                targetWidth:640,
                saveToPhotoAlbum: true
            }, function(ret, err){ 
                if (ret.data) {
                    alert(ret.data);
                    _this.imgpath = ret.data
                    _this.$toast(ret.data)
                    document.getElementById("pic").innerHTML="<img src=" + ret.data + "/>"
                            
                }
            });
        },
        paizhao(){
            let _this = this;
            var FNPhotograph = api.require('FNPhotograph');
            FNPhotograph.open({
                path: 'fs://savePath',
                album: true ,
                quality: 'medium'
            }, function(ret){

                _this.$toast(this.eventType)

                if(ret.eventType == "takePhoto"){
                    _this.imgpath = "fs:/" + ret.imagePath
                    _this.$toast(this.imgpath)
                    FNPhotograph.close()
                }
                
            });
        },

    }
}
</script>

<style lang='scss' scoped>

</style>
