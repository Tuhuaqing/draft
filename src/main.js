import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import weui from 'weui.js'
import 'weui'
import './assets/base.css'

Vue.config.productionTip = false
Vue.prototype.$weui = weui

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')