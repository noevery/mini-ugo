// pages/pay/childCpns/l-bottom/l-bottom.js
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
    totalPrice: 0,
    totalNum: 0
  },
  lifetimes: {
    attached() {
      const cart = wx.getStorageSync("cart")
      const obj = cart.filter(v => v.checked = true).reduce((prev, v) => {
          console.log(prev);
          prev.totalPrice+= v.num * v.goods_price
          prev.totalNum += v.num
         // prev.totalNum + v.nu
        return prev;
      }, {totalPrice: 0,totalNum: 0})
      console.log(obj);
      this.setData({
        totalPrice: obj.totalPrice,
        totalNum: obj.totalNum
      })

    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
