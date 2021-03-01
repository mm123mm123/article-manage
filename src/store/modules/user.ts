import {api} from '@/util/api'
import {Module} from "vuex";
import {rootState, userState} from "@/store/store";



export const user: Module<userState, rootState> = {
    state: {
        userNickName: '',
        roleName: ''
    },
    mutations: {
        setUserNickName(state, data) {
            state.userNickName = data.nickName
        },
        setRoleName(state, data) {
            state.roleName = data.roleName
        }
    },
    actions: {
        getInfo({state, commit}) {
            return api.post('login/getInfo', '')
                .then((res: any) => {
                    commit('setUserNickName', res.info.userPermission.nickname)
                    commit('setRoleName', res.info.userPermission.roleName)
                })
        }
    }
}
