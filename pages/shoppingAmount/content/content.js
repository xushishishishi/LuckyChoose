// pages/shoppingconsume/content/content.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 方案列表
    caseList: [{
      consume: null,
      num: null,
      unitPrice: null // 单价
    }],
    isShow: false,
    loading: false,
    content: '',
  },

  // 获取单价
  getPrice: function(event) {
    let index = event.currentTarget.dataset.index;
    let caseList = this.data.caseList;
    let {
      consume,
      num
    } = caseList[index];
    // 两个输入框全部填完才执行计算
    if (!consume || !num) {
      return
    }
    consume = parseFloat(consume);
    num = parseFloat(num);

    caseList[index].unitPrice = (consume / num).toFixed(4);
    this.setData({
      caseList,
    })
  },

  // 输入双向绑定
  bindInput: function(event) {
    let {
      index,
      item,
    } = event.currentTarget.dataset; //在每个input绑定不同的item作为标识
    let {
      caseList
    } = this.data;
    caseList[index][item] = event.detail.value;
    this.setData({
      caseList,
    })
  },

  // 新增方案
  addCase: function(event) {
    let index = event.currentTarget.dataset.index;
    let caseList = this.data.caseList;
    let {
      consume,
      num
    } = caseList[index];
    if (!consume || !num) {
      // 打开弹窗，选项不允许为空
      this.setData({
        isShow: true,
        content: "输入框不能为空！",
      });
      return;
    }
    caseList.push({
      consume: null,
      num: null,
      unitPrice: null
    });
    this.setData({
      caseList,
    })
  },

  // 移除方案
  reduceCase: function(event) {
    let index = event.currentTarget.dataset.index;
    let caseList = this.data.caseList;
    caseList.splice(index, 1);
    this.setData({
      caseList,
    });
  },

  // 计算
  formSubmit: function(event) {
    let params = event.detail.value;
    let {
      caseList
    } = this.data;

    // 判空
    for (let i in params) {
      if (!params[i]) {
        this.setData({
          isShow: true,
          content: "输入框不能为空！",
        });
        return;
      }
    }

    let minPrice = 0,
      minIndex = 0;
    // 遍历方案列表，求最合适的方案
    caseList && caseList.forEach((item, index) => {
      if (item.unitPrice > minPrice) {
        minPrice = item.unitPrice;
        minIndex = index;
      }
    });

    this.setData({
      loading: true,
    }, () => {
      setTimeout(() => {
        this.setData({
          loading: false,
        })
        wx.navigateTo({
          url: '../result/result?caseObj=' + JSON.stringify(caseList[minIndex]),
        })
      }, 3000)
    })
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