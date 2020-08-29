// pages/cart/cart.js

import { showModal } from "../../utils/util";

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

  setCart(cat) {
    const cart = [...cat]
    this.setData({
      cart
    })
    wx.setStorageSync("cart", cart)
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
     cart[index].checked = !cart[index].checked
    this.setCart(cart)
   /*  this.setData({
       cart
     })
    wx.setStorageSync("cart", cart)*/
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  //是否全选
  handleAllCheck({detail: {allChecked}}) {
    const cart = [...this.data.cart]
    cart.forEach(v => v.checked = allChecked)
    this.setCart(cart)
    /*this.setData({
      cart
    })
    wx.setStorageSync("cart", cart)*/
  },
  //数量加减
  async handleAddNum({detail}) {
    const {id, operation} = detail
    const cart = [...this.data.cart]
    const index = cart.findIndex(item => item.goods_id === id)
    if (cart[index].num === 1 && operation === -1 ) {
    const res = await showModal('删除', '当前数量为1，是否取消商品？')
      if (res.confirm) {
        cart.splice(index, 1)
      }

    }else {
      cart[index].num += operation
    }
    this.setCart(cart)
 /*   this.setData({
      cart
    })*/

  }
  ,
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