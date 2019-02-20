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
                <van-icon name="photo" size="40px" v-for="item in photos" @click="showlink(item)"></van-icon>
                <van-icon name="photograph" size="40px" @click="paizhao"></van-icon>
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
                <van-button type="primary" style="width: 200px;">上报</van-button>
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
            photos: []

        }
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
