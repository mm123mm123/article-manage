import {api} from '@/util/api'

export const user = {
    state: {
        userNickName: ''
    },
    mutations: {
        setUserNickName(state: { userNickName: string }, data: { nickName: string }) {
            state.userNickName = data.nickName
        }
    }
    // action: {
    //     getInfo({state,commit}){
    //         return api.post('login/getInfo','')
    //     }
    // }
}
