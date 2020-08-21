// pages/cart/childCpns/d-address/d-address.js

import {chooseAddress, getSetting, openSetting} from '../../utils/util'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
      address: {}
  },
    lifetimes :{
        attached() {
            const address = wx.getStorageSync("address") || {}
            this.setData({
                address
            })
        }
    },
  /**
   * 组件的方法列表
   */
  methods: {
    async handleChooseAddress() {
        try {
            const {authSetting : res } = await getSetting()
            if (res['scope.address']) {
                const address = await chooseAddress()
                address.all = address.provinceName + address.cityName + address.countyName + address.detailInfo
                wx.setStorageSync('address', address)
                this.setData({
                    address
                })
            }
        }catch(err) {
          console.log(err);
        }
    }
    ,
  }
})
