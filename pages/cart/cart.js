Page({
    data: {
      cartItems: [
        {
          id: 1,
          name: '商品1',
          image: '/images/product1.jpg',
          qty: 1,
          price: 100,
          selected: true
        },
        {
          id: 2,
          name: '商品2',
          image: '/images/product2.jpg',
          qty: 2,
          price: 200,
          selected: true
        },
        {
          id: 3,
          name: '商品3',
          image: '/images/product3.jpg',
          qty: 3,
          price: 300,
          selected: false
        }
      ],
      selectAll: false
    },
    onLoad: function () {
      this.updateTotalAmount();
    },
    toggleSelectItem: function (event) {
      const item = event.currentTarget.dataset.item;
      const index = this.data.cartItems.findIndex(i => i.id === item.id);
      this.setData({
        [`cartItems[${index}].selected`]: !item.selected
      });
      this.updateSelectAll();
      this.updateTotalAmount();
    },
    toggleSelectAll: function (event) {
      const selectAll = event.detail.value;
      this.setData({
        selectAll: selectAll,
        cartItems: this.data.cartItems.map(item => {
          item.selected = selectAll;
          return item;
        })
      });
      this.updateTotalAmount();
    },
    updateSelectAll: function () {
      const allSelected = this.data.cartItems.every(item => item.selected);
      const selectAll = (this.data.cartItems.length > 0) && allSelected;
      this.setData({
        selectAll: selectAll
      });
    },
    updateTotalAmount: function () {
      let totalAmount = 0;
      this.data.cartItems.forEach(item => {
        if (item.selected) {
          totalAmount += item.qty * item.price;
        }
      });
      this.setData({
        totalAmount: totalAmount.toFixed(2)
      });
    },
    checkout: function () {
      // TODO: 提交订单或结算购物车中的商品
    }
  })
  