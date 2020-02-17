// pages/user/pages/serviceCenter/serviceCenter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topQuestions: [
      {
        title: "查件问题",
        picSrc: "../../../../assets/images/chajianicon.png",
        path: "../retrievalQues/retrievalQues"
      },
      {
        title: "寄件问题",
        picSrc: "../../../../assets/images/jijian.png",
        path: "../mailQues/mailQues"
      },
      {
        title: "反馈建议",
        picSrc: "../../../../assets/images/jianyi.png",
        path: "../feedback/feedback"
      }
    ],
    questionList: [
      {
        title: "快递员什么时候来取件"
      },
      {
        title: "可以指定快递公司吗"
      },
      {
        title: "寄件合作快递公司"
      },
      {
        title: "我的包裹什么时候送到"
      },
      {
        title: "如何支付运费"
      },
      {
        title: "如何取消订单"
      },
      {
        title: "如何修改收件或寄件信息"
      },
      {
        title: "如何寄件"
      },
      {
        title: "寄件收费标准"
      },
    ]
  },

  topBtn: function(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.path,
    })
  },
  hotQuestions: function(e) {
    wx.showToast({
      title: '未完成',
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