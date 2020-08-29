// pages/goods_detail/goods_detail.js

import { getGoodsDetail } from "../../network/goods_detail";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    banner: [],
    collect: {},
    content: '',
    isCollect: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.data.id = options.id
    //获取商品详情数据
    this.__getGoodsDetail()
    //获取收藏商品
    const collectAll = wx.getStorageSync("collectAll") || []
    //判断商品是否有收藏
    collectAll.forEach(item => {
      if (item.goods_id.toString() === options.id) {
        this.setData({
          isCollect: true
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  //----------------   网络请求 ----------
  async __getGoodsDetail() {
      const {data: {message: goodsObj}} = await getGoodsDetail(this.data.id)
      const collect = {}
      console.log(goodsObj);
      collect.goods_id = goodsObj.goods_id
      collect.goods_small_logo = goodsObj.goods_small_logo
      collect.goods_price = goodsObj.goods_price
      collect.goods_name = goodsObj.goods_name

      this.setData({
        banner: goodsObj.pics,
        collect,
        content: goodsObj.goods_introduce
      })



  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
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