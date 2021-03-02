import {Module} from "vuex";
import {rootState, articleState} from "@/store/store";
import {api} from "@/util/api";

export const article: Module<articleState, rootState> = {
    state: {
        articleList: [],
        totalCount: 0,
    },
    mutations: {
        setArticle(state, data) {
            state.articleList = data.list
            state.totalCount = data.totalCount
        }
    },
    actions: {
        getArticleList({state, commit}) {
            return api.get('article/listArticle', {pageNum: 1, pageRow: 50, name: ''})
                .then((data)=>{commit('setArticle',data)})
        }
    }
}
