import { request } from "./network";

export function getGoodsDetail(goods_id) {
    return request({
        url: '/goods/detail',
        data: {
            goods_id
        }
    })
}