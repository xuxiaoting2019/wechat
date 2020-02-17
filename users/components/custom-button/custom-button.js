// pages/order/order.js
Component({
  behaviors: [],
  // 属性定义（详情参见下文）
  properties: {
    btnText: {
      type: String,
      value: '确定'
    },
    btnType: {
      type: String,
      value: 'default'
    }
  },
  data: {
    
  }, // 私有数据，可用于模板渲染
  methods: {
    _clickBtn() {
      this.triggerEvent('clickBtn')
    }
  }
})