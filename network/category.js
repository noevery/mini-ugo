import { request } from "./network";

//请求分类数据
export function getCategoryData() {
    return request({
        url: '/categories'
    })
}