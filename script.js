const app = Vue.createApp({
  data: function () {
    //data needed for the app, returns an object
    return {
      //define the data here
      siteName: "The Spooky Shop",
      product: {
        title: "Smokey Quartz",
        description:
          "A large <strong>Ethically</strong> sourced piece of smokey quartz. Perfect for your gothic home.",
        id: 1001,
        price: 2000,
        image: "quartz.jpg",
        inventory: 5,
        color: "black",
        onSale: false
      },
      cart: [],
      isProductPage: true
    };
  },
  computed: {
    //where we maniplute the data
    //formatprice function
    formatPrice: function () {
      const dollars = this.product.price / 100; //price formatting
      return dollars.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      }); //$20.00
    },
    //lowprice function
    lowPrice: function () {
      if (this.product.price < 3000) {
        this.product.onSale = true;
        return true;
      }
    },
    cartItemCount: function () {
      return this.cart.length;
    },
    outOfStock: function () {
      //if product.inventory is 0 or false, the function returns true.
      return !this.product.inventory;
    },
    lowInventory: function () {
      if (this.product.inventory < 3) {
        return true;
      }
    },
    cartTotal: function () {
      const price = this.product.price / 100;
      price.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      });
      return price * this.cartItemCount;
    }
  },
  methods: {
    addToCart: function () {
      console.log("adding to cart");
      this.cart.push(this.product.id);
      this.product.inventory -= 1;
    },
    removeFromCart: function () {
      console.log("this is removing an item");
      this.cart.pop(this.product.id);
      this.product.inventory += 1;
    }
  }
});

app.mount("#app");
