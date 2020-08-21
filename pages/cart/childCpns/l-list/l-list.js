// pages/cart/childCpns/l-list/l-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cart: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  ready() {
    const cart = this.properties.cart
    this.setData({
      cart
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    handeItemChange({currentTarget: {dataset:{id}}}) {
      //发送选中事件
      this.triggerEvent("handleIsChecked", {id})
    }
  }

})
