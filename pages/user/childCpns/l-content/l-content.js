// pages/user/childCpns/l-content/l-content.js
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
    collectNums: 0
  },
  pageLifetimes: {
  show() {
    const collectNums = wx.getStorageSync("collectAll").length || 0
    this.setData({
      collectNums
    })
  }

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
