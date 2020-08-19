import {
    request
} from "./network";

export function getHomeBanner(options) {
    return request({
        url: '/home/swiperdata'
    })
}
export function getHomecatitems(options) {
    return request({
        url: '/home/catitems'
    })
}
export function getHomeFloor(options) {
    return request({
        url: '/home/floordata'
    })
}