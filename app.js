//app.js
App({
  onLaunch: function() {
    wx.login({
      success: function (res) {
        if(res.code){
         
        }
      },
      fail: function (event) {

      },
      complete: function (event) {
        console.log('finish');
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
