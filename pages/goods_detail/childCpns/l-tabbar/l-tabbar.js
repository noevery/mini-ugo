// components/l-tabbar/l-tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      obj: {
        type: Object,
        value: {}
      }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    //加入购物车
    handleCartAdd() {
      //获取购物车
      const cart = wx.getStorageSync("cart") || []
      const obj = this.properties.obj

      //判断购物车是否已经储存
      const index = cart.findIndex(item => item.goods_id === obj.goods_id)
      if (index === -1) {
        const list = {...obj}
        list.checked = true
        //数量为1
        list.num = 1
        cart.push(list)
        wx.showToast({
          title: '加入购物车成功',
          icon: "success"
        })
      } else {
        //数量+1
        cart[index].num++
        wx.showToast({
          title: '数量加1',
        })
      }
      wx.setStorageSync("cart", cart)
    }
  }
})
