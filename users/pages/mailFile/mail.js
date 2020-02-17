
Page({
  data: {

  },
  onTabItemTap() { // 点击tabBar
    console.log(123)
    this.scanCode()
  },
  onLoad: function(options) {
    console.log('onLoad')
  },
  onReady: function() {
    console.log('onReady')
  },
  onShow: function() {
    console.log('onShow')
    // this.scanCode()
  },
  scanCode() {
    wx.scanCode({
      success(res) {
        console.log(res, '------res')
      },
      fail(err) {
        console.log(err, '-----err')
      },
      complete(finish) {
        wx.navigateTo({
          url: 'pages/order/order'
        });
        console.log(finish, '-----finish')
      }
    })
  },
  goBack() {
    wx.switchTab({
      url: '/pages/checkFile/check'
    })
    // wx.navigateBack({

    // })
  }
})