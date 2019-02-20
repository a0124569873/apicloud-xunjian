<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>

    <van-tabbar v-model="active">
            <van-tabbar-item icon="like">故障</van-tabbar-item>
            <van-tabbar-item icon="cart">巡检</van-tabbar-item>
            <van-tabbar-item icon="setting">设置</van-tabbar-item>
        </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      active: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
