// pages/retrieval/retrieval.js
let app =  getApp();
// import getData from '../../utils/getData'
  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderList: [ // 订单列表
      {
        id: '1',
        code: '1909400310469100', // 订单号
        time: '2019-09-04 13:27', // 下单时间
        fromCity: '成都', // 来源城市
        fromPerson: '杨紫',
        toCity: '上海', // 去往城市
        toPerson: '离线',
        type: '2', // 类型
        status: '1' // 状态
      },
      {
        id: '2',
        code: '1909400310469100', // 订单号
        time: '2019-09-04 13:27', // 下单时间
        fromCity: '成都', // 来源城市
        fromPerson: '杨紫',
        toCity: '上海', // 去往城市
        toPerson: '离线',
        type: '2', // 类型
        status: '1' // 状态
      },
      {
        code: '1909400310469100', // 订单号
        time: '2019-09-04 13:27', // 下单时间
        fromCity: '成都', // 来源城市
        fromPerson: '杨紫',
        toCity: '上海', // 去往城市
        toPerson: '离线',
        type: '2', // 类型
        status: '1' // 状态
      },
      {
        code: '1909400310469100', // 订单号
        time: '2019-09-04 13:27', // 下单时间
        fromCity: '成都', // 来源城市
        fromPerson: '杨紫',
        toCity: '上海', // 去往城市
        toPerson: '离线',
        type: '2', // 类型
        status: '1' // 状态
      },
      {
        code: '1909400310469100', // 订单号
        time: '2019-09-04 13:27', // 下单时间
        fromCity: '成都', // 来源城市
        fromPerson: '杨紫',
        toCity: '上海', // 去往城市
        toPerson: '离线',
        type: '', // 类型
        status: '1' // 状态
      },
      {
        code: '1909400310469100', // 订单号
        time: '2019-09-04 13:27', // 下单时间
        fromCity: '成都', // 来源城市
        fromPerson: '杨紫',
        toCity: '上海', // 去往城市
        toPerson: '离线',
        type: '2', // 类型
        status: '1' // 状态
      }
    ],
    orderType: app.globalData.ORDER_TYPE,
    orderStatus: app.globalData.ORDER_STATUS
  },

  search: function() {
    console.log('sdfjsklf')
  },
  /**
   * 方法，用来获取订单列表
   */
  getOrderList: function() {
    const param = {}
  },
  goToDetail(item) { // 方法，跳转到详情
    wx.navigateTo({
      url: `/pages/retrieval/retrievalDetail/retrievalDetail?id=${item.currentTarget.dataset.item.id}`
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

    // 模拟请求
    setTimeout(() => {
      app.globalData.ORDER_TYPE = {
        0: '未下单',
        1: '已下单'
      }
      this.setData({
        orderType: app.globalData.ORDER_TYPE
      })
      app.globalData.ORDER_STATUS = {
        2: '车牌寄递',
        1: '已下单'
      }
      this.setData({
        orderStatus: app.globalData.ORDER_STATUS
      })
      console.log(this.orderType);
    }, 1000)
  },

  onload: function() {
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
    console.log('helso');
    getData({
      wx
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})