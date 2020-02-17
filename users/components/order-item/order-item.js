// pages/order/order.js
Component({
  behaviors: [],
  // 属性定义（详情参见下文）
  properties: {
    orderSuccess: { // 属性名
      type: Boolean,
      value: false
    },
    dataObj: { // 属性名
      type: Object,
      value: {}
    }
  },
  data: {
    
  }, // 私有数据，可用于模板渲染
  methods: {
    _viewOrder(e) {
      this.triggerEvent('viewOrder', this.data.dataObj)
    }
  }
})