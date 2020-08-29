// pages/feedback/childCpns/l-content/l-content.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    //文本框内容
    textVal: '',
    //图片集
    chooseImgs: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //添加图片
    handleChooseImg() {
      wx.chooseImage({
        count: 9,
        // 图片的格式  原图  压缩
        sizeType: ['original', 'compressed'],
        // 图片的来源  相册  照相机
        sourceType: ['album', 'camera'],

        success: ({tempFilePaths: res}) => {
          const chooseImgs = [...res, ...this.data.chooseImgs]
          this.setData({
            chooseImgs
          })
          console.log(this.data.chooseImgs)
        }
      })
    },
    //删除图片

    // 提交建议
    handleFormSubmit() {

    }
  }
})
