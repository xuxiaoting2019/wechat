Page({

  /**
   * 页面的初始数据
   */
  data: {
    paymentType: '', // 订单支付 / 号牌支付
    orderNum: '', // 订单号：
    orderTime: '', // 下单时间：
    money: '', // 邮政速递服务费
    plateNum: '', // 机动车牌
    remainingTime: '01:00:00' // 支付剩余时间
  },

  // 点击支付按钮
  goPay: function() {
    wx.showToast({
      title: '未完成',
      icon: 'none'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    console.log(options);
    this.setData({
      // paymentType: options.paymentType,
      paymentType: "plate",
      orderNum: '1909400310469100',
      orderTime: '2019-09-04 13:27',
      plateNum: options.plateNum,
      money: options.charges
    });

    // 倒计时
    let countTime = 3600;
    let ihours = Math.floor(countTime / 3600),
      iminutes = Math.floor(countTime / 60),
      iseconds = Math.floor(countTime % 60);
    let hoursStr = "", minutesStr = "", secondsStr = "";

    let remain = setInterval(function () {
      countTime = countTime - 1;
      ihours = Math.floor(countTime / 3600);
      iminutes = Math.floor(countTime / 60),
        iseconds = Math.floor(countTime % 60);

      hoursStr = ihours < 10 ? '0' + ihours : ihours;
      minutesStr = iminutes < 10 ? '0' + iminutes : iminutes;
      secondsStr = iseconds < 10 ? '0' + iseconds : iseconds;

      console.log(hoursStr + ":" + minutesStr + ":" + secondsStr);
      that.setData({
        remainingTime: hoursStr + ":" + minutesStr + ":" + secondsStr
      })
      if (countTime === 0) {
        clearInterval(remain);
        wx.showToast({
          title: '支付超时，请重新下单',
          icon: "none"
        })
      }
    }, 1000)
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