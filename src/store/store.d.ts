export type rootState = {
    user: {
        userNickName: string,
        roleName: string,
        menuList: string[]
    },
    role: {},
    article: {
        articleList: string[],
        totalCount: number
    },
    navBar: {
        selectedIndex: number
    }
}
export type articleState = {
    articleList: string[],
    totalCount: number
}
export type userState = {
    userNickName: string,
    roleName: string,
    menuList: string[]
}
export type navBarState = {
    selectedIndex: number
}
