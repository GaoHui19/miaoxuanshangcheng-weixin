// pages/home/home.js
Page({

    data: {

    },

    // 分享
    onShareAppMessage() {
        return {
        title: '分享标题',
        path: '/pages/index/index',
        imageUrl: 'https://example.com/image.png'
        }
    },

    // 跳转搜索页
    onSearch: function() {
        wx.navigateTo({
          url: '/pages/search/search'
        })
      }
      

      
})