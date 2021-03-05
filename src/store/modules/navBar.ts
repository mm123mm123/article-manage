import {Module} from "vuex";
import {navBarState, rootState} from "@/store/store";

export const navBar: Module<navBarState, rootState> = {
    state: {
        selectedIndex: 0
    },
    mutations: {
        setSelectedIndex(state, data) {
            state.selectedIndex = data
        }
    }
}
