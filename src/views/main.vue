<template>
    <div>

        <router-view class="mainview">
        </router-view>
        <van-tabbar v-model="active" style="background-color: #F7F8F7;">
                <van-tabbar-item icon="fire" to="guzhang" :replace=true >故障</van-tabbar-item>
                <van-tabbar-item icon="cart" to="xunjian" :replace=true >巡检</van-tabbar-item>
                <van-tabbar-item icon="friends" to="wode" :replace=true >我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    data (){
        return {
            active: 0,
            title: "故障列表"
        }
    },

    watch: {
        active (newval, oldval) {
            this.switchpage(newval)
        }
    },

    mounted (){
        this.$router.push("guzhang")
    },

    methods: {

        switchpage(newval){
            
            switch (Number(newval)) {
                case 0:
                    this.$router.push("guzhang")
                    
                    break;
                case 1:
                    this.$router.push("xunjian")
                    break;
                case 2:
                    this.$router.push("wode")
                    break;
            
                default:

                    break;
            }
        }
    }

}
</script>

<style lang="scss" scoped>

.mainview{
    height: calc(100vh - 113px);
}

.buttombar{
    buttom: 0;
}
</style>

