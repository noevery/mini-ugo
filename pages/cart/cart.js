// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cart: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const cart = wx.getStorageSync("cart")
    this.setData({
      cart
    })

  },
  //是否点击
  handleIsChecked({detail: {id}}) {
     const cart = [...this.data.cart]
     let index = cart.findIndex(item => item.goods_id === id)
;
     cart[index].checked = !cart[index].checked
     this.setData({
       cart
     })
    wx.setStorageSync("cart", cart)
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  //是否全选
  handleAllCheck({detail: {allChecked}}) {
    const cart = [...this.properties.cart]
    cart.forEach(v => v.checked = allChecked)
    this.setData({
      cart
    })
    wx.setStorageSync("cart", cart)
  },
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})