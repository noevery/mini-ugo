// pages/feedback/childCpns/l-img/l-img.js

import {showModal} from "../../../../utils/util";

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    src: {
      type: String,
      value: ''
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
    async handleRemoveImg() {
      const res = await showModal("删除", "是否删除图片？")
      if (res.confirm) {
        this.setData({
          src: ''
        })
      }

    }
  }
})
