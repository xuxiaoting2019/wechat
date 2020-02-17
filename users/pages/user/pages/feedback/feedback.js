// pages/user/pages/feedback/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picList: []
  },

  // 上传图片
  selectPic: function() {
    let that = this;
    // if (that.data.picList.length >= 9) {
    //   wx.showToast({
    //     title: '最多可上传9张图片',
    //     icon: 'none'
    //   })
    // } else {
      wx.chooseImage({
        success: function (res) {
          console.log(res);
          that.setData({
            picList: [...that.data.picList, ...res.tempFilePaths]
          })
        }
      })
    // }
  },

  // 提交按钮
  submit: function(){
    wx.showToast({
      title: '未完成',
      icon: 'none'
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