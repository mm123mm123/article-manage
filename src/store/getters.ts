import {GetterTree} from "vuex";
import {rootState} from "@/store/store";

export const getters: GetterTree<rootState, rootState> = {
    userNickName: state => state.user.userNickName,
    roleName: state => state.user.roleName
}
