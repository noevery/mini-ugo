// pages/goods_list/childCpns/d-list/d-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
    },
    currentIndex: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  created() {
   console.log(this.properties.currentIndex)
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})