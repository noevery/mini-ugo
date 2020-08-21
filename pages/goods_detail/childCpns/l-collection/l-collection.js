// pages/goods_detail/childCpns/l-collection/l-collection.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    collect: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isCollect: false,
    collect: {}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //点击收藏
    handleCollect() {
      //判断是否有登录
      const userInfo = wx.getStorageSync('userInfo') || {}
      if (JSON.stringify(userInfo) === '{}') {
        wx.navigateTo({
          url: '/pages/login/login'
        })
      }
      //判断商品是否已经收藏
      const collect = this.properties.collect
      console.log(collect);
      const collectAll = wx.getStorageSync("collectAll") || []
      let index = collectAll.findIndex(item => item.goods_id == collect.goods_id)
      console.log(index);
      if (index === -1) {
        collectAll.push(collect)
        this.setData({
          isCollect: true
        })
        wx.showToast({
          title: '收藏成功',
          icon: 'success',
        })
      }else {
        collectAll.splice(index, 1)
        this.setData({
          isCollect: false
        })
        wx.showToast({
          title: '取消收藏',
          icon: 'success'
        })
      }
      wx.setStorageSync('collectAll', collectAll)
    },
  }
})
