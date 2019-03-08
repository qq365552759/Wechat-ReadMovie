Page({
  onTap: function() {
    // wx.redirectTo({
    //   url: "../posts/post"
    // }),

    //跳转到一个带tab选项卡的页面，必须使用wx.switchTab这个方法
    wx.switchTab({
      url: "../posts/post"
    });
  }
})