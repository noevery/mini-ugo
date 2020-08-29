const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


//获取用户的当前设置。返回值中只会出现小程序已经向用户请求过的权限。
export  const getSetting = (message) => {
  return new Promise((resolve, reject) => {
    wx.getSetting({
      withSubscriptions: message || false,
      success: resolve,
      fail: reject
    })
  })
}

//调起客户端小程序设置界面，返回用户设置的操作结果。设置界面只会出现小程序已经向用户请求过的权限。
export const openSetting = (message) => {
  return new Promise((resolve, reject) => {
    wx.openSetting({
      withSubscriptions: message || false,
      success: resolve,
      fail: reject
    })
  })
}

//获取用户收货地址。调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址。
export const chooseAddress = () => {
  return new Promise((resolve, reject) => {
    wx.chooseAddress({
      success: resolve,
      fail: reject
    })
  })
}


//显示模态对话框
export const showModal = (title, content) => {
  return new Promise((resolve, reject) => {
    wx.showModal({
      title: title || '',
      content: content || '',
      success: resolve,
      fail: reject
    })
  })
}
/*module.exports = {
  formatTime: formatTime,
}*/
