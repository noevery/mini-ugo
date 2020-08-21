// pages/goods_detail/childCpns/l-swiper/l-swiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
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
    //点击全屏图片
    handleBigImg({currentTarget: {dataset: {url: current}}}) {
      const urls = this.properties.list.map(item => item.pics_mid)
      console.log(current);
      wx.previewImage({
        current,
        urls
      })
    }
  }
})
