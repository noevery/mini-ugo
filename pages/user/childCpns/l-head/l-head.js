// pages/user/childCpns/l-head/l-head.js
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
    userInfo: {}
  },
  lifetimes: {
    attached: function () {
      const userInfo = wx.getStorageSync("userInfo")
      if (userInfo) {
        this.setData({
          userInfo
        })
      }
    }
  },
  created() {

  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
