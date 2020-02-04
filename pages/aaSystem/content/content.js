// pages/aaSystem/content/content.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: false,
    loading: false,
  },

  // 表单提交
  formSubmit: function(e) {
    let {
      consume,
      figures
    } = e.detail.value;

    consume = parseFloat(consume);
    figures = parseFloat(figures);

    if (isNaN(consume) || isNaN(figures)) {
      // 打开弹窗，选项不允许为空，必须为数字
      this.setData({
        isShow: true,
        content: "请输入正确的数据！",
      });
      return;
    }

    let result = consume / figures;
    this.setData({
      loading: true,
    }, () => {
      setTimeout(() => {
        this.setData({
          loading: false,
        })
        wx.navigateTo({
          url: '../result/result?result=' + result,
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