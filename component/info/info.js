// component/info/info.js
Component({
  // 组件的属性列表
  properties: {
    // 组件是否显示
    visibility: {
      type: Boolean,
      value: false
    },

    // 弹窗内容
    content: {
      type: String, //类型
      value: 'default value' //默认值
    },
  },
  data: {},
  methods: {
    cancel: function() {
      this.setData({
        visibility: false,
      })
    }
  }
})