// components/d-category-left/d-category-left.js
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
    activeIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClickActive: function ({target: {dataset: {index}}}) {
      this.setData({
        activeIndex: index
      })
      this.triggerEvent("activeClick", {index})
    },
  }
})
