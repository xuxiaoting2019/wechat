// pages/platePost/platePost.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    registeredCity: ['四川省', '广安市', '广安区'], // 登记城市
    addressee: ['北京市', '北京市', '东城区'], // 收件地区
    plateType: ['普通汽车', '新能源', '摩托车'], // 车辆类型
    currentPlateType: '普通汽车', // 当前车辆类型
    isAgree: false, // 是否同意协议
    plateNumSelector: [ // 号牌选择器数组
      [
        '京', '津', '冀', '晋', '蒙', '辽', '吉', '黑', '沪', '苏',
        '浙', '皖', '闽', '赣', '鲁', '豫', '鄂', '湘', '粤', '桂',
        '琼', '渝', '川', '贵', '云', '藏', '陕', '甘', '青', '宁', '新',
      ],
      [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
        'N', 'O', 'P', 'Q',' R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
      ],
      [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
        'N', 'O', 'P', 'Q',' R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
      ],
      [ '1', '2', '3', '4', '5', '6', '7', '8', '9' ],
      [ '1', '2', '3', '4', '5', '6', '7', '8', '9' ],
      [ '1', '2', '3', '4', '5', '6', '7', '8', '9' ],
      [ '1', '2', '3', '4', '5', '6', '7', '8', '9' ]
    ],
    plateNum: [ '', '', '', '', '', '', '' ], // 号牌号码
    plateIndex: [ 0, 0, 0, 0, 0, 0, 0 ], // 号牌选择器号码索引
    moyorType: [ // 机动车类型
      '大型汽车', '小型汽车', '大型新能源汽车', '小型新能源汽车', 
      '普通摩托车', '轻便摩托车', '挂车', '教练汽车', 
      '教练摩托车', '低速车', '领馆汽车', '领馆摩托'
    ],
    currentMotorType: '小型汽车', // 当前选择的机动车类型
    ownerName: '', // 车主姓名
    handlingOutlets: '四川广安车管所邮政派驻', // 办理网点
    receiverLinker: '', // 收件人姓名
    receiverMobile: '', // 联系电话
    receiverAddr: '', // 详细地址
  },
  // 号牌选择器改变事件
  bindMultiPickerChange: function (e) {
    let indexArr = e.detail.value;
    let plateNumSelector = this.data.plateNumSelector;
    let plateNum = [];
    for (let i in this.data.plateNum) {
      plateNum[i] = plateNumSelector[i][indexArr[i]]
    }
    this.setData({
      plateIndex: e.detail.value,
      plateNum: plateNum
    })
  },
  // 是否同意协议
  changeIsAgree: function() {
    this.setData({
      isAgree: !this.data.isAgree
    })
  },
  // 登记地址 选择器
  bindRegionChange: function(e) {
    this.setData({
      registerRegion: e.detail.value
    })
  },
  // 车牌类型 选择器
  bindPlateTypeChange: function(e) {
    this.setData({
      currentPlateType: this.data.plateType[e.detail.value]
    })
  },
  // 收件地址 选择器
  bindAddresseeChange: function(e) {
    this.setData({
      addressee: e.detail.value
    })
  },
  // 机动车类型选择器
  bindMotorTypeChange: function (e) {
    this.setData({
      currentMotorType: this.data.moyorType[e.detail.value]
    })
  },
  // 查看须知
  lookNotice: function() {
    wx.showToast({
      title: '未完成',
      icon: 'none'
    })
  },
  // 车主姓名
  ownerNameChange: function(e) {
    this.setData({
      ownerName: e.detail.value
    })
  },
  // 收件人姓名
  receiverLinkerChange: function (e) {
    this.setData({
      receiverLinker: e.detail.value
    })
  },
  // 联系电话
  receiverMobileChange: function (e) {
    this.setData({
      receiverMobile: e.detail.value
    })
  },
  // 详细地址
  receiverAddrChange: function (e) {
    this.setData({
      receiverAddr: e.detail.value
    })
  },
  // 点击下一步
  nextBtn: function() {
    // 解构需要的数据
    let { registeredCity, handlingOutlets, currentPlateType, plateNum, currentMotorType, ownerName, receiverLinker, receiverMobile, addressee, receiverAddr } = this.data;

    function isTrue(...data) { // 判断值是否为空
      return data.filter( item => item === "").length > 0 ? false : true
    }
    // 调用方法判断是否已全部完毕
    let resault = isTrue(...registeredCity, handlingOutlets, currentPlateType, ...plateNum, currentMotorType, ownerName, receiverLinker, receiverMobile, addressee, receiverAddr);

    if (resault) { // 点击下一步操作逻辑
      if (this.data.isAgree) { // 是否点击以满足办理条件按钮
        wx.navigateTo({
          url: '../plate/plate',
          success(res){
            let plateNumStr = plateNum.join("");
            let data = { registeredCity, handlingOutlets, currentPlateType, plateNum: plateNumStr, currentMotorType, ownerName, receiverLinker, receiverMobile, addressee, receiverAddr };
            wx.setStorage({
              key: 'platePostData',
              data: data,
            })
          }
        })
      } else {
        wx.showToast({
          title: '请您确认已满足以上条件',
          icon: 'none'
        })
      }
    } else {
      wx.showToast({
        title: '请您填写完毕后再点击',
        icon: 'none'
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})