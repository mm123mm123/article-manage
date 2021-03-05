import {api} from '@/util/api'
import {Module} from "vuex";
import {rootState, userState} from "@/store/store";



export const user: Module<userState, rootState> = {
    state: {
        userNickName: '',
        roleName: '',
        menuList:[]
    },
    mutations: {
        setUserNickName(state, data) {
            state.userNickName = data
        },
        setRoleName(state, data) {
            state.roleName = data
        },
        setMenuList(state,data){
            state.menuList=data
        }
    },
    actions: {
        getInfo({state, commit}) {
            return api.post('login/getInfo', '')
                .then((res: any) => {
                    commit('setUserNickName', res.info.userPermission.nickname)
                    commit('setRoleName', res.info.userPermission.roleName)
                    commit('setMenuList',res.info.userPermission.menuList)
                })
        }
    }
}
