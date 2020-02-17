const util = require('../../utils/util.js')
Component({
  properties: {
    item:{
      type: Object,
      default: {}
    },
    todoBtns: {
      type: Array,
      default: []
    }
  },
	data: {
    phoneNum: '13716146743'
	},
	methods: {
    todo(e) {
      this.triggerEvent("commentBtn", e);
    },
    // 打电话给收件人
    callToPerson() {
      util.callToPerson(this.data.phoneNum)
    },
	}
})