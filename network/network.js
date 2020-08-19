import {
    baseUrl
} from "./config";

export function request(options) {
    return new Promise((resolve, reject) => {
        wx.request({
            ...options,
            url: baseUrl + options.url,
            timeOut: 5000,
            success: resolve,
            fail: reject
        })
    })
}
