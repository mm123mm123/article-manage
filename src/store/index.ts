import Vue from 'vue'
import Vuex from 'vuex'
import {getters} from './getters'
import {article} from "@/store/modules/article";
import {role} from "@/store/modules/role"
import {user} from "@/store/modules/user"
import {navBar} from "@/store/modules/navBar";


Vue.use(Vuex);//vue的插件机制

//Vuex.Store 构造器选项
const store = new Vuex.Store({
    modules: {
        article,
        role,
        user,
        navBar
    },
    getters
})
export default store
