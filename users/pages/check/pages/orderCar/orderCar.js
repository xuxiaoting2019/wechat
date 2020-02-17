let app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    personData: [{ // 寄件人和收件人信息
      type: '寄',
      name: '王天龙',
      mobile: '15283089779',
      address: '安徽省合肥市庐阳区178号'
    }, {
      type: '收',
      name: '董芳芳',
      mobile: '18227673005',
      address: '四川省成都市青羊区天府鹭洲大厦'
    }],
    goodsData: [{ // 商品的数据
      name: '车牌（车牌号：粤A3N22D）',
      code: '190904553761000',
      status: '已下单'
    }
    ],
    courierPerson: [{
      name: '黄志博'
    }],
    orderProgress: [{
      day: '09-04',
      time: '13:50',
      oderStatus: '揽件员已已揽件'
    },
    {
      day: '09-04',
      time: '13:15',
      oderStatus: '等待揽件'
    },
    {
      day: '09-04',
      time: '13:15',
      oderStatus: '订单已创建'
    },
    ]
  },
  getGoodData() { // 方法，用来获取商品的数据
    setTimeout(() => { // 用来获取数据

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({
      id: options.id
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(app.globalData.ORDER_TYPE)
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

  },
  tel: function() {
    wx.makePhoneCall({
      phoneNumber: '158XXXXXXXX',
    })
  }
})