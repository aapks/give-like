import Vue from 'vue'
import App from './App'
import './assets/utils/request'

import basics from './pages/basics/home.vue'
Vue.component('basics', basics)

import components from './pages/component/home.vue'
Vue.component('components', components)

import plugin from './pages/plugin/home.vue'
Vue.component('plugin', plugin)

import task from './pages/task/task.vue'
Vue.component('task', task)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom', cuCustom)

Vue.config.productionTip = false

// let timer;
// Vue.mixin({
// 	methods: {
// 		getCode() {
// 		  this.disabled = true;
// 		  let sec = 3;
// 		  timer = setInterval(() => {
// 		    sec--;
// 		    this.codeText = `${sec}s重新获取`;
// 		    if (sec < 0) {
// 		      this.codeText = `重新获取`;
// 		      this.disabled = false;
// 		      clearInterval(timer);
// 		    }
// 		  }, 1000);
// 		}
// 	}
// })

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()