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
    },
    list: [
      {
        firstName: '寄',
        bgColor: '#4F5BFF',
        listItem: [
          {
            key: '寄件人',
            value: '李四'
          },
          {
            key: '联系电话',
            value:'收到货晒哦钓活动搜都ISOif哦亿是哦东方红水电费会受到熬到红豆爱欧舒丹'
          }
        ]
      },
      {
        firstName: '收',
        bgColor: '#00B366',
        listItem: [
          {
            key: '收件人',
            value: '张三'
          },
          {
            key: '联系电话',
            value:'收到货晒哦钓活动搜都ISOif哦亿是哦东方红水电费会受到熬到红豆爱欧舒丹'
          }
        ]
      },
      {
        firstName: '',
        bgColor: '',
        listItem: [
          {
            key: '物品名称',
            value: '张三'
          },
          {
            key: '订单编号',
            value:'收到货晒哦钓活动搜都ISOif哦亿是哦东方红水电费会受到熬到红豆爱欧舒丹'
          }
        ]
      }
    ],
    dataList: [
      {
        orderState: '订单已创建',
        bizOccurdate: '1572488209'
      },
      {
        orderState: '订单已取消',
        bizOccurdate: '1572488208'
      },
      {
        orderState: '订单进行中',
        bizOccurdate: '1572488207'
      }
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    // const eventChannel = this.getOpenerEventChannel()
    // // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    // eventChannel.on('checkItem', function(data) {
    //   console.log(data)
    // })
  },
  clickBtn() {
    console.log(123)
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