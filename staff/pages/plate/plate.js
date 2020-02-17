// pages/index/plate/plate.js
Page({

  /**
   * 页面的初始数据
   */
  // 定义空数据 通过onLoad动态赋值
  data: {
    registeredCity: '', // 办理城市
    handlingOutlets: '', // 办理网点
    ownerName: '', // 车主姓名
    plateNum: '', // 机动车牌号
    currentMotorType: '', // 机动车类型
    receiverLinker: '', // 收件人
    receiverMobile: '', // 联系电话
    addressee: '', // 收件地区
    receiverAddr: '', // 详细地址
    charges: '' // 邮政速递服务费
  },

  // 提交按钮 提交订单
  submitBtn: function() {
    let that = this;
    wx.navigateTo({
      url: '../payment/payment?paymentType=plate' + '&plateNum=' + that.data.plateNum + '&charges=' + that.data.charges,
      events: {},
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 拿数据
    let that = this;
    wx.getStorage({
      key: 'platePostData',
      success: function(res) {
        that.setData({
          registeredCity: res.data.registeredCity,
          handlingOutlets: res.data.handlingOutlets,
          ownerName: res.data.ownerName,
          plateNum: res.data.plateNum,
          currentMotorType: res.data.currentMotorType,
          receiverLinker: res.data.receiverLinker,
          receiverMobile: res.data.receiverMobile,
          addressee: res.data.addressee,
          receiverAddr: res.data.receiverAddr,
          charges: '22.00',
          paymentType: "plate"
        })
      },
    })
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