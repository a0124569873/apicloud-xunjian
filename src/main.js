// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

// import MuseUI from 'muse-ui';
// import 'muse-ui/dist/muse-ui.css';
// Vue.use(MuseUI);
// import Toast from 'muse-ui-toast';
// Vue.use(Toast);

import '@/assets/iconfont/iconfont'
import IconSvg from "./components/common/IconSvg.vue"; // svg组件
// 注册全局组件（register global）
Vue.component("icon-svg", IconSvg);

import BottomBar from "./components/common/BottomBar.vue"
Vue.component("bottom-bar", BottomBar);

import * as filters from "./filters/index"; // 全局过滤器
// 注册全局实用程序过滤器（register global utility filters）.
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
});

import './assets/theme/index.scss'

Vue.config.productionTip = false

function randomNum(min,max){ 
  switch(arguments.length){ 
      case 1: 
          return Math.floor(Math.random()*minNum+1); 
      break; 
      case 2: 
          return Math.floor(Math.random()*(max-min+1)+min); 
      break; 
          default: 
              return 0; 
          break; 
  } 
}
Vue.prototype.$RN = randomNum

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
