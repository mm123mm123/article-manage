import Vue from 'vue'
import App from './App.vue'
import {api} from './util/api'
import store from "@/store";

Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.prototype.$store = store
new App().$mount()
