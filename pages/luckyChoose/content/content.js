// pages/loveChoose/loveChoose.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    optionsList: [{
      name: ''
    }],
    isShow: false,
    loading: false,
  },

  // 输入框绑定回显
  bindInput: function(event) {
    let {
      index,
    } = event.currentTarget.dataset; //在每个input绑定不同的item作为标识
    let {
      optionsList
    } = this.data;
    optionsList[index]['name'] = event.detail.value;
    this.setData({
      optionsList,
    })
  },

  // 增加选项
  addOption: function() {
    let optionsList = this.data.optionsList;
    optionsList.push({
      name: ''
    });
    this.setData({
      optionsList,
    });
  },

  //减少选项
  reduceOption: function(event) {
    let index = event.currentTarget.dataset.index;
    let optionsList = this.data.optionsList;
    optionsList.splice(index, 1);
    this.setData({
      optionsList: optionsList,
    });
  },

  // 表单提交
  formSubmit: function(e) {
    let params = e.detail.value;
    let resultList = [];
    for (let i in params) {
      if (params[i]) {
        resultList.push(params[i]);
      } else {
        // 打开弹窗，选项不允许为空
        this.setData({
          isShow: true,
          content: "输入框不能为空！",
        });
        return;
      }
    }
    this.setData({
      loading: true,
    }, () => {
      setTimeout(() => {
        this.setData({
          loading: false,
        })
        wx.navigateTo({
          url: '../result/result?resultList=' + resultList,
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
  onReady: function() {},

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