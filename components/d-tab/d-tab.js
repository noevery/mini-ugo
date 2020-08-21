// components/d-tab/d-tab.js
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
    list: ['综合', '销量', '价格'],
    activeIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleChangeIndex({currentTarget: {dataset: {index}}}) {
      this.setData({
        activeIndex: index
      })
      this.triggerEvent('tabClick', {index})
    }
  }
})
