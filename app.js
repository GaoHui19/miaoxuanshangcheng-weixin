// app.js
App({
  onLaunch() {
    wx.cloud.init({
      env: 'gw1123wmxag1314-6g1nx0z05bf98341'
    })
    
  },
  globalData: {
    userInfo: null
  }
})
