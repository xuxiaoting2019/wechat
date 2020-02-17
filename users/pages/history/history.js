// pages/history/history.js
const App = 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    ordered: [
      {
        address: '安徽省合肥市庐阳区天府鹭洲601',
        sender: '李现',
        receive: '杨紫',
        date: '今天 13:26',
        telephone: '18227673665'
      },
      {
        address: '安徽省合肥市庐阳区天府鹭洲602',
        sender: '李现',
        receive: '杨紫',
        date: '今天 13:26',
        telephone: '18227673665'
      },
      {
        address: '安徽省合肥市庐阳区天府鹭洲603',
        sender: '李现',
        receive: '杨紫',
        date: '今天 13:26',
        telephone: '18227673665'
      },
      {
        address: '安徽省合肥市庐阳区天府鹭洲604',
        sender: '李现',
        receive: '杨紫',
        date: '今天 13:26',
        telephone: '18227673665'
      },
      {
        address: '安徽省合肥市庐阳区天府鹭洲605',
        sender: '李现',
        receive: '杨紫',
        date: '今天 13:26',
        telephone: '18227673665'
      }
    ],
    rejected: [
      {
        address: '安徽省合肥市庐阳区天府鹭洲606',
        sender: '李现',
        receive: '杨紫',
        date: '今天 13:26',
        telephone: '18227673665'
      },
      {
        address: '安徽省合肥市庐阳区天府鹭洲607',
        sender: '李现',
        receive: '杨紫',
        date: '今天 13:26',
        telephone: '18227673665'
      },
      {
        address: '安徽省合肥市庐阳区天府鹭洲608',
        sender: '李现',
        receive: '杨紫',
        date: '今天 13:26',
        telephone: '18227673665'
      },
      {
        address: '安徽省合肥市庐阳区天府鹭洲609',
        sender: '李现',
        receive: '杨紫',
        date: '今天 13:26',
        telephone: '18227673665'
      },
      {
        address: '安徽省合肥市庐阳区天府鹭洲610',
        sender: '李现',
        receive: '杨紫',
        date: '今天 13:26',
        telephone: '18227673665'
      },
    ],
    canceled: [
      {
        address: '安徽省合肥市庐阳区天府鹭洲611',
        sender: '李现',
        receive: '杨紫',
        date: '今天 13:26',
        telephone: '18227673665'
      },
      {
        address: '安徽省合肥市庐阳区天府鹭洲612',
        sender: '李现',
        receive: '杨紫',
        date: '今天 13:26',
        telephone: '18227673665'
      },
      {
        address: '安徽省合肥市庐阳区天府鹭洲613',
        sender: '李现',
        receive: '杨紫',
        date: '今天 13:26',
        telephone: '18227673665'
      },
      {
        address: '安徽省合肥市庐阳区天府鹭洲614',
        sender: '李现',
        receive: '杨紫',
        date: '今天 13:26',
        telephone: '18227673665'
      },
      {
        address: '安徽省合肥市庐阳区天府鹭洲615',
        sender: '李现',
        receive: '杨紫',
        date: '今天 13:26',
        telephone: '18227673665'
      },
    ]
  },

  // tab切换事件
  toggle: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
      })
    }
  },

  // 拨打电话事件
  callTo: function (e) {
    console.log(e.target.dataset.tel);
    wx.makePhoneCall({
      phoneNumber: e.target.dataset.tel,
    })
  },

  // 打印事件
  printBtn: function() {
    console.log("未完成");
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