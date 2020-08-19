// pages/index/index.js
import { getHomeBanner,
         getHomecatitems,
         getHomeFloor } from "../../network/index";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    bannerList: [],
    navList: [],
    floorList: []
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取轮播图数据
    this.__getHomeBanner()
    //获取导航数据
    this.__getHomecatitems()
    //获取楼层数据
    this.__getHomeFloor()
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

  },
  //---------------  网络请求 --------------
  async __getHomeBanner() {
    const {data: {message: bannerList}} = await getHomeBanner()
    this.setData({
      bannerList
    })
  },
  async __getHomecatitems() {
    const {data: {message: navList}} = await getHomecatitems()
    this.setData({
      navList
    })
  },
    async __getHomeFloor() {
      const {data: {message: floorList}} = await getHomeFloor()
        this.setData({
            floorList
        })
        console.log(floorList);
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