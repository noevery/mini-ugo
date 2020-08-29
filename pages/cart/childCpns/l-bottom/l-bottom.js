// pages/cart/childCpns/l-bottom/l-bottom.js

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cart: {
      type: Array,
      value: [],
      //值一发生改变就执行该函数
      observer: '_onRefreshCart'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    totalPrice: 0,
    totalNum: 0,
    allChecked: false
  },


  /**
   * 组件的方法列表
   */
  methods: {
    //发送全选事件
    handleItemAllCheck() {
      const allChecked = !this.data.allChecked
      this.setData({
        allChecked
      })
      this.triggerEvent('handleAllCheck', {allChecked})
    },
    //cart值改变就执行
    _onRefreshCart(newVal, oldVal) {
      const cart = [...newVal]
      //价格
      let totalPrice = cart.filter(v => v.checked === true).reduce((pre, item) => {
        return pre + item.num * item.goods_price
      }, 0)

      //数量
      let totalNum = cart.filter(v => v.checked === true).reduce((prev, v) =>{
        return prev + v.num
      }, 0)


      this.setData({
        totalPrice,
        totalNum,
      })
      //全选
      let allChecked = cart.filter(v => v.checked === true).length === cart.length ? true : false
      this.setData({
        allChecked
      })
    },

    //结算，跳转到支付页面
    async handlePay(){
      const address = wx.getStorageSync("address")
      if (!address.userName) {
        wx.showToast({
          title: '请选择收货地址！'
        })
        return ;
      }
      if (this.data.totalNum === 0) {
        wx.showToast({
          title: "请选择商品"
        })
        return ;
      }
      wx.navigateTo({
        url: "/pages/pay/pay"
      })
    }
  }
})
