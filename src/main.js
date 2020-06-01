import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import VueAMap from 'vue-amap'

Vue.config.productionTip = false
Vue.use(Element)
Vue.use(VueAMap)

// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 高德的key
  key: '12398dbc0625671072fb5b6967a5c025',
  // 插件集合
  plugin: ['AMap.Geolocation','AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType','AMap.Driving'],
  // ui库版本，不配置不加载,
  uiVersion: '1.0.11',
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
