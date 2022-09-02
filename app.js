const iceCreams = [{
  name: 'Cookie Dough',
  image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
  price: 1,
  quantity: 0,
}, {
  name: 'Vanilla',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
  price: 1,
  quantity: 0,
}, {
  name: 'Strawberry',
  image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
  price: 2,
  quantity: 0,
}]

const vessels = [{
  name: 'Waffle Cone',
  image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
  price: 2,
  quantity: 0,
}, {
  name: 'Waffle Bowl',
  image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
  price: 4,
  quantity: 0,
}]

const toppings = [{
  name: 'Sprinkles',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
  price: 1,
  quantity: 0,
}, {
  name: 'Choclate Chips',
  image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
  price: 2,
  quantity: 0
}]



function addVesselsToCart(name) {
  let vessel = vessels.find(vessel => vessel.name == name)
  console.log(vessel);
  // @ts-ignore
  vessel.quantity++
  drawCart()
}
function addToppingsToCart(name) {
  let topping = toppings.find(topping => topping.name == name)
  console.log(topping);
  // @ts-ignore
  topping.quantity++
  drawCart()

}


function addiceCreamsToCart(name) {
  let iceCream = iceCreams.find(iceCream => iceCream.name == name)
  console.log(iceCream);
  // @ts-ignore
  iceCream.quantity++
  drawCart()

}


function drawCart() {

  let cart = document.getElementById('cart')
  let template = ''
  toppings.forEach(topping => {
    if (topping.quantity > 0) {
      template += `<div class="col-12 d-flex">
      <p>Name:${topping.name}</p> 
      <p>Price$${topping.price}</p>
      <p>Quantity:${topping.quantity}</p>
      <img src="${topping.image}"><i class="mdi mdi-delete text-danger" onclick="removeToppings('${topping.name}')"</img>
      </div>`
    }
  })

  iceCreams.forEach(iceCream => {
    if (iceCream.quantity > 0) {
      template +=
        `<div class="col-12 d-flex">
          <p>Name:${iceCream.name}</p>
          <p>Price:$${iceCream.price}</p>
          <p>Quantity:${iceCream.quantity}</p>
          <img src="${iceCream.image}"><i class="mdi mdi-delete text-danger" onclick="removeiceCream('${iceCream.name}')"></i></img></div>`

    }
  })

  vessels.forEach(vessel => {
    if (vessel.quantity > 0) {
      template +=
        `<div class="col-12 d-flex">
      <p>Name:${vessel.name}</p>
      <p>Price$${vessel.price}</p>
      <p>Quantity:${vessel.quantity}</p>
      <img src="${vessel.image}"><i class="mdi mdi-delete text-danger" onclick="removeVessel('${vessel.name}')"></i></img></div>`
    }
  })


  // @ts-ignore
  cart.innerHTML = template
}

function removeVessel(name) {
  let vessel = vessels.find(vessel => vessel.name == name)
  // @ts-ignore
  vessel.quantity--
  drawCart()
}



function removeiceCream(name) {
  let iceCream = iceCreams.find(iceCream => iceCream.name == name)
  // @ts-ignore
  iceCream.quantity--

  drawCart()
}

function removeToppings(name) {
  let topping = toppings.find(topping => topping.name == name)
  // @ts-ignore
  topping.quantity--

  drawCart()
}


