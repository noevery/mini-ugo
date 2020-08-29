// pages/cart/childCpns/d-list/d-list.js
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

  /**
   * 组件的方法列表
   */
  methods: {
    //选中事件
    handeItemChange({currentTarget: {dataset:{id}}}) {
      this.triggerEvent("handleIsChecked", {id})
    },
    //数量加减
    handleItemNumEdit({currentTarget: {dataset}}) {
      this.triggerEvent("handleAddNum", dataset)
    }

  },
})
