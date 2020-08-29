// pages/pay/childCpns/d-list/d-list.js
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
    cart: []
  },
  lifetimes: {
    attached() {
      const cart = wx.getStorageSync("cart").filter(v => v.checked)
      this.setData({
        cart
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
