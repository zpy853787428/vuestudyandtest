import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 定义全局过滤器
Vue.filter('wholeMoneyFormat',(value)=>{
  return '¥' + Number(value)
})
new Vue({
  render: h => h(App),
}).$mount('#app')
