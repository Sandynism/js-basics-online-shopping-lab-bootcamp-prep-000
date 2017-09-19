var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100)
  var thingies = Object.assign({}, {[item] : price})
  cart.push(thingies)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var shopping = []
  if (cart.length > 0) {
    for (var x = 0, x < cart.length, x++) {
      for (var item in cart[i]) {
        shopping.push(item + 'at $' + cart[i][item])
      }
    }
  }

  if (shopping.length === 0) {
    console.log('Your shopping cart is empty.')
    }
  } 
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
