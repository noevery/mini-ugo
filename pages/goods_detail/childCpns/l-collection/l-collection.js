// pages/goods_detail/childCpns/l-collection/l-collection.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    collect: {
      type: Object,
      value: {}
    },
    isCollect: {
      type: Boolean,
      value: false
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

      //收藏成功
      if (index === -1) {
        collectAll.push(collect)
        collect.is_collect = true
        this.setData({
          isCollect: collect.is_collect
        })
        wx.showToast({
          title: '收藏成功',
          icon: 'success',
        })
      //  取消收藏
      }else {
        collectAll.splice(index, 1)
        collect.is_collect = false
        this.setData({
          isCollect: collect.is_collect
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
