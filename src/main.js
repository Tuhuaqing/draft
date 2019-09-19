import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import weui from 'weui.js'


Vue.config.productionTip = false

import 'weui'
import './assets/base.css'
Vue.prototype.$weui = weui

import common from './utils/common'
Vue.prototype.$common = common


import distPicker from 'v-distpicker'
Vue.component('distPicker', distPicker)


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

console.log(common.validateAgeRange(10, 'D', 20, 'A', '2019-9-11'))
