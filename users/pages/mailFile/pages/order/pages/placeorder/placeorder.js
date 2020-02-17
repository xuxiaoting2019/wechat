// placeorder.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    listData: [
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
            value: '收到货晒哦钓活动搜都ISOif哦亿是哦东方红水电费会受到熬到红豆爱欧舒丹'
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
            key: '电话',
            value: '145678909876'
          },
          {
            key: '地址',
            value: '收到货晒哦钓活动搜都ISOif哦亿是哦东方红水电费会受到熬到红豆爱欧舒丹'
          }
        ]
      },
      {
        firstName: '',
        bgColor: '',
        listItem: [
          {
            key: '电话',
            value: '134907079868'
          },
          {
            key: '地址',
            value: '收到货晒哦熬到红豆爱欧舒丹'
          }
        ]
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goToSuccess() {
      wx.navigateTo(
        {
          url: '/pages/order/pages/success/success'
        }
      );
    }
  }
})
