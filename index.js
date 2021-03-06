var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var add = {}
 add.itemName = item
 add.itemPrice = Math.floor(Math.random() * 100) + 1 
 cart.push(add)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var result = "In your cart, you have"
  if(cart.length === 0) {
    return "Your shopping cart is empty."
  } else if(cart.length === 1) {
    return `${result} ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  else {
    for(var i = 0; i < cart.length; i++) {
      if(i + 1 === cart.length) {
        result += " and"
      }
      result += ` ${cart[i].itemName} at $${cart[i].itemPrice}`
      if(i + 1 === cart.length) {
        result += "."
      } else {
        result += ","
      }
    }
    return result
  }
}

function total() {
  // write your code here
  var sum = 0;
  for(var i = 0; i < cart.length; i++) {
    sum += cart[i].itemPrice
  }
  return sum
}

function removeFromCart(item) {
  // write your code here
  for(var i = 0; i < cart.length; i++) {
    if(cart[i].itemName == item) {
      cart.splice(i, 1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if(isNaN(cardNumber)) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var sum = total()
    cart = []
    return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
  }
}
