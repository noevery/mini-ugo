// pages/goods_list/goods_list.js
import { getGoodList } from "../../network/goods_list";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList: ['综合', '销量', '价格'],
    //查询参数
    goods: {
      //关键字
      query: '',
      //分类id
      cid: '',
      //页码
      pagenum: 0,
      //页容量
      pagesize: 10,
    },
    //获取的数据
    goodsList: [],
    //索引
    index: 0,
    //总页数
    totalPages: 0,
    tlag: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.goods.cid = options.id || ''
    this.data.goods.query = options.query || ''
    this.__getGoodsList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  //------------- 网络请求 --------
  async __getGoodsList() {
    this.data.goods.pagenum++
    const {data:{ message: res}} = await getGoodList(this.data.goods)
    //获取总页数
    const total = res.total
    //计算所获取的页数
    this.data.totalPages = Math.ceil(total/this.data.goods.pagesize)

    const goodsList = this.data.goodsList
    goodsList.push(...res.goods)
    this.setData({
      goodsList
    })
    // 关闭下拉刷新的窗口 如果没有调用下拉刷新的窗口 直接关闭也不会报错
    wx.stopPullDownRefresh()
    console.log(res);
  },

  // tab 传过来的事件
  changeTabIndex({detail: {index}}) {
    this.setData({
      index
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
      this.setData({
        goodsList: []
      })
    this.data.goods.pagenum = 0
    this.__getGoodsList()
    this.data.tlag = true
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
      if(!this.data.tlag) return
      if (this.data.goods.pagenum >= this.data.totalPages) {
        wx.showToast({title: '没有下一页数据'})
        this.data.tlag = false
      }else {
        this.__getGoodsList()
      }
    }

  ,

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})