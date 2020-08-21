import { request } from "./network";

export function getGoodList(data) {
    return request({
        url: '/goods/search',
        data
    })
}