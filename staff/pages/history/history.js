// pages/history/history.js
import { getHistory } from './server.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    navList: [
      {
        name: '已打单'
      },
      {
        name: '已拒单'
      },
      {
        name: '已取消'
      }
    ],
    dataList: [],
    ordered: [
      {
        address: '安徽省合肥市庐阳区天府鹭洲6143',
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
    ],
    rejected: [
      {
        address: '安徽省合肥市庐阳区天府鹭洲6122',
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

  getDataList() { // 获取数据
  }
})