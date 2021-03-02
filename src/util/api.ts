export const api = {
    baseUrl: '/api/',
    get(path: string, param: { [key: string]: any }) {
        const stringParam = Object.keys(param).map((key: string) => {
            return key + '=' + param[key]
        }).join('&')
        return new Promise((resolve) => {
            uni.request({
                url: param ? this.baseUrl + path + '?' + stringParam : this.baseUrl + path,
                method: 'GET',
                success: (res: any) => {
                    resolve(res.data.info)
                }
            })
        });
    },
    post(path: string, data: {}) {
        return new Promise((resolve) => {
            uni.request({
                url: this.baseUrl + path,
                method: 'POST',
                header: {},
                data: data,
                success: (res: any) => {
                    resolve(res.data)
                }
            })
        })
    }
}
