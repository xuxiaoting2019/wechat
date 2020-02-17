// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataObj: {
      orderNo: 13456,
      bizOccurdate: '2018-12-34',
      senderLinker: '李现',
      senderCityName: '武汉',
      receiverLinker: '杨紫',
      receiverCityName: '成都',
      orderState: '已下单' // 1：已下单（待接单）（已支付）  2：已取消  3：已拒单  4：已接单（待打单）  5：已撤单   6：已打单（待发货）  7：已发货
    }
  },
  viewOrder() {
    console.log('点击查看，跳转页面')
  },
  goBack() {
    wx.switchTab({
      url: '/pages/order/order'
    })
  },
  goPage() {
    wx.switchTab({
      url: '/pages/order/order'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})