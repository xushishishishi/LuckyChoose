// component/footer/footer.js
Component({
  /**
   * 页面的初始数据
   */
  data: {

  },
  methods: {
    // 回到主页
    routerToHome: function() {
      // 使用getCurrentPages可以获取当前加载中所有的页面对象的一个数组，数组最后一个就是当前页面。
      let pages = getCurrentPages();
      let currentPage = pages[pages.length - 1];
      let url = currentPage.route;
      console.log('currentPage---------', currentPage)

      // 路由与主页路由一致则不跳转
      if (url === 'pages/home/home'){
        return;
      }
      wx.navigateTo({
        url: '../home/home'
      })
    },
  },
})