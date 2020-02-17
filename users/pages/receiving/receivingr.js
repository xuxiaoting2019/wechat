// pages/receiving/receivingr.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    // 接单列表
    dataList:[
      {
        address: "北京市大兴区",
        out: "张三",
        phone: "1388888888",
        come: "李四",
        time: "00:00"
      },
      {
        address: "北京市大兴区",
        out: "张三",
        phone: "1388888888",
        come: "李四",
        time: "00:00"
      }
    ],
    // 打单列表
    printList:[
      {
        address: "北京市大兴区",
        out: "啦啦",
        phone: "1388888888",
        come: "啦啦",
        time: "00:00"
      },
      {
        address: "北京市大兴区",
        out: "啦啦",
        phone: "1388888888",
        come: "啦啦",
        time: "00:00"
      },
      {
        address: "北京市大兴区",
        out: "啦啦",
        phone: "1388888888",
        come: "啦啦",
        time: "00:00"
      },
    ],
    dialogShow: false, // 拒单弹窗
    condition: true, // 显示条件
    classNum: 1, // 样式判断
  },

  // 拒单
  refuse: function () {
    this.setData({
      dialogShow: true
    })
  },
  tapDialogButton(e) {
    // console.log('dialog', e.detail)
    // console.log(e)
    this.setData({
      dialogShow: false,
      showOneButtonDialog: false
    })
  },

  // 接单
  accept: function() {
    wx.navigateTo({
      url: './orderReceiving/orderReceiving',
    })
  },

  // 等待接单
  receive: function() {
    this.setData({
      condition: true,
      classNum: 1,
    })
  },

  // 等待打单
  print: function() {
    this.setData({
      condition: false,
      classNum: 2,
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