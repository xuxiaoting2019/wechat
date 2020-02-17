// pages/receiving/orderReceiving/orderReceiving.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    money: 30.12,
    showModalStatus: false, // 底部弹窗控制
    classNuma: 1,
    classNumb: 3,
    classNumc: 6,
  },

  
  //点击我显示底部弹出框
  clickme: function () {
    let showModalStatus = this.data.showModalStatus
    if(showModalStatus) {
      wx.navigateTo({
        url: '../receiptPage/receiptPage',
      })
    } else {
      this.showModal();
    }
  },

  //显示对话框
  showModal: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  },

  radioCheckedChange1: function(e) {
    // console.log(e.detail.value,"1")
    this.setData({
      classNuma: e.detail.value
    })
  },
  radioCheckedChange2: function (e) {
    // console.log(e.detail.value, "2")
    this.setData({
      classNumb: e.detail.value
    })
  },
  radioCheckedChange3: function (e) {
    // console.log(e.detail.value, "3")
    this.setData({
      classNumc: e.detail.value
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