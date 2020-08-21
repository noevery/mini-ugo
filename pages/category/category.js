// pages/category/category.js
import { getCategoryData } from "../../network/category";

Page({

  /**
   * 页面的初始数据
   */
  data: {
      //左边栏数据
      cateList: [],
      //右边栏数据
      childrenList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //请求分类数据
    const Cates = wx.getStorageSync('cates')
    if (!Cates) {
      this.__getCategoryData()
    }else {
      // 有旧的数据 定义过期时间  10s 改成 5分钟
      if (Date.now() - Cates.time > 1000 *10) {
        //重新发送请求
        this.__getCategoryData()
      }else {
        //可以使用旧数据
        this.setData({
          cateList: Cates
        })
        const childrenList = this.data.cateList[0].children
        this.setData({
          childrenList
        })

      }
    }

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
  //----------------  网络请求 ------------------
  async __getCategoryData() {
    const {data: {message: cateList}} = await getCategoryData()
    //储存分类数据到本地
    wx.setStorageSync('cates', {time: Date.now(), data: cateList})
    this.setData({
      cateList
    })
    const childrenList = this.data.cateList[0].children
    this.setData({
      childrenList
    })
  },

  //左边栏目组件传来的事件 获取索引
  handleGetIndex({detail: {index}}) {
    const childrenList = this.data.cateList[index].children
    this.setData({
      childrenList
    })
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