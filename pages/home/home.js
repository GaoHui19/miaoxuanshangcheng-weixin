// pages/home/home.js
Page({

    data: {
        currentData:1,
        pic: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2846167449,2464562408&fm=26&gp=0.jpg', //网络图片路径
    },
    ChangeTab:function(e){
        const that=this
        that.setData({
            	currentData: e.currentTarget.dataset.current
        })
	
   },
   menuTap: function (e) {
    var current = e.currentTarget.dataset.current; //获取到绑定的数据
    //改变menuTapCurrent的值为当前选中的menu所绑定的数据
    this.setData({
        menuTapCurrent: current
    });

<<<<<<< HEAD
},
    /**
     * 生命周期函数--监听页面加载
     */
    changenav(){},
    changesel(){},
    onLoad(options) {
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        // this.ChangeTab(e)
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

   
    

     /**
     1. 用户点击右上角分享
       */
   
    onShareAppMessage: function (res) {
        // this.changefenx()
        var that = this;
        console.log('转发事件的来源',res.from)
        console.log(that.data)
        return { //自定义转发内容
          title: '这是一个页面', //自定义转发标题
          path: '/pages/user/user', //当前页面的路径 ，必须是以 / 开头的完整路径
          imageUrl: that.data.pic//不设置此字段时，默认截取当前页面作为展示的图片
        }
      },
    
   
=======
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
      

      
>>>>>>> 3b956782be33e4938bca31bddeb0e30316113221
})