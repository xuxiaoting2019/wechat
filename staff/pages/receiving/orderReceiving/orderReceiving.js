Page({
  data: {
    listData: [
      {
        firstName: '寄',
        bgColor: '#000',
        listItem: [
          {
            key: '寄件人',
            value: '李四'
          }
        ]
      },
      {
        firstName: '收',
        bgColor: '#03ccbb',
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
            key: '收货地址',
            value: '收到货晒哦钓活动搜都ISOif哦亿是哦东方红水电费会受到熬到红豆爱欧舒丹'
          },
          {
            key: '联系电话',
            value:'134907079868'
          }
        ]
      },
      {
        firstName: '',
        bgColor: '',
        listItem: [
          {
            key: '收货地址',
            value: '收到货晒哦钓活动搜都ISOif哦亿是哦东方红水电费会受到熬到红豆爱欧舒丹'
          },
          {
            key: '联系电话',
            value:'134907079868'
          }
        ]
      },
      {
        firstName: '',
        bgColor: '',
        listItem: [
          {
            key: '收货地址',
            value: '收到货晒哦钓活动搜都ISOif哦亿是哦东方红水电费会受到熬到红豆爱欧舒丹'
          },
          {
            key: '联系电话',
            value:'134907079868'
          }
        ]
      }
    ],
    radioList: [
			{
        type: '付款方式',
        typeCode: 'FKFS',
				radios: [
					{
						label: '寄付',
						value: 'FKFS_JF',
            checked: true
					},
					{
						label: '到付',
						value: 'FKFS_DF',
            checked: false
					}
				],
			},
			{
        type: '支付方式',
        typeCode: 'ZFFS',
				radios: [
					{
						label: '电子支付',
						value: 'ZFFS_DF',
            checked: true
					},
					{
						label: '现金支付',
						value: 'ZFFS_XF',
            checked: false
					},
					{
						label: '协议结算',
            value: 'ZFFS_XJ',
            checked: false
					}
				],
      },
      {
        type: '结算方式',
        typeCode: 'JSFS',
				radios: [
					{
						label: '现结',
						value: 'JSFS_XJ',
            checked: true
					},
					{
						label: '记欠',
						value: 'JSFS_JQ',
            checked: false
					}
				],
			}
		],
    chargingArr: [
      {
        key: '快递公司',
        val:'EMS/kaui'
      },
      {
        key: '快递单号',
        val:''
      },
      {
        key: '重量',
        val:'2.5'
      },
      {
        key: '运费',
        val:''
      }
    ],
    isShowDia: false
  },
  radioChange(e){
    this.data.radioList.forEach((ele,index) => {
      if(e.detail.value.indexOf(ele.typeCode) !== -1){
        const checkedArr = this.data.radioList[index].radios
        checkedArr.forEach((item) => {
          if(e.detail.value === item.value) {
            item.checked = true
          } else {
            item.checked =false
          }
        })
      }
    })
  },
  showDailog() {
    if(!this.data.isShowDia) {
      this.setData({
        isShowDia : true
      })
    } else {
      console.log(this.data.radioList)
      wx.navigateTo({
        url: '/pages/receiving/collection/collection',
      })
    }
  },
  close() {
    this.setData({
      isShowDia: false
    })
    console.log(this.data.isShowDia)
  }
})