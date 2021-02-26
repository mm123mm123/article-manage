export const api = {
    baseUrl: '/api/',
    get(path: string, param: string) {
        uni.request({
            url: param ? this.baseUrl + path + param : this.baseUrl + path,
            header: {},
        });
    },
    post(path: string, data: {}) {
        return new Promise((resolve, reject) => {
            uni.request({
                url: this.baseUrl + path,
                method: 'POST',
                header: {},
                data: data,
                success: (res: any) => {
                    console.log(res);
                    if (res.data.info.result === 'success') {
                        resolve(res.data)
                    }else{
                        reject(res.data)
                    }
                }
            })
        })
    }
}
