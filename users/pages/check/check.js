// pages/order/order.js
import { getUserOrderList } from './server'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderList: [
       {
         id: '1',
         code: '1909400310469100',
         time: '2019-09-04 13:27',
         fromCity: '成都市',
         fromPerson: '杨紫',
         toCity: '上海市',
         toPerson: '李现',
         type: '2',
         status: '已下单'
       },
       {
         id: '2',
         code: '1909400310469100',  //订单号
         time: '2019-09-04 13:27',  //下单时间
         fromCity: '成都市',  //来源城市
         fromPerson: '杨紫',
         toCity: '上海市',  //去往城市
         toPerson: '李现',
         type: '2',  //类型
         status: '已下单'  //状态
       },
       {
         id: '3',
         code: '1909400310469100',
         time: '2019-09-04 13:27',
         fromCity: '成都市',
         fromPerson: '杨紫',
         toCity: '上海市',
         toPerson: '李现',
         type: '2',
         status: '已提交'
       },
       {
         id: '4',
         code: '1909400310469100', // 订单号
         time: '2019-09-04 13:27', // 下单时间
         fromCity: '成都市', // 来源城市
         fromPerson: '杨紫',
         toCity: '上海市', // 去往城市
         toPerson: '李现',
         type: '2', // 类型
         status: '已取消' // 状态
       }
     ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  goToCar: function(e) {
    wx.navigateTo({
      url: "pages/orderCar/orderCar"
    })
  },
  dispath: function(e) {
    if (("已下单" == e.currentTarget.dataset.text) && ("2" == e.currentTarget.dataset.id)){
      wx.navigateTo({
        url: "pages/orderDigital/orderDigital"
      })
    }
    if("已提交" == e.currentTarget.dataset.text){
      wx.navigateTo({
        url: "pages/orderSubmit/orderSubmit"
      })
    }
    if ("已取消" == e.currentTarget.dataset.text){
      wx.navigateTo({
        url: "pages/orderCancell/orderCancell"
      })
    }
    
  }
})