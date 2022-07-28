let kitchenOrderNumber = 1

function sendOrderToKitchen(username, callback) {
  setTimeout(function () {
    kitchenOrderNumber++
    console.log(`Kitchen has accepted your order ${kitchenOrderNumber}!`)

    callback(kitchenOrderNumber, username)
  }, 1000)
}

function sendEmailNotification(orderNumber, username) {
  console.log(
    `EMAIL RECEIVED by ${username}: Your order ${orderNumber} is confirmed!`
  )
}

function sendPushNotification(orderNumber, username) {
  console.log(
    `PUSH RECEIVED by ${username}: Your order ${orderNumber} is confirmed!`
  )
}

// We pass a reference to a function
// We do not call the function
// sendOrderToKitchen becomes responsible for when to call the function
sendOrderToKitchen('rjk', sendPushNotification)
sendOrderToKitchen('flo', sendEmailNotification)
