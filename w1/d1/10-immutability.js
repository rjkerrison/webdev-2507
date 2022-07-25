let city = 'miami'
console.log(city) // <== miami

// we CAN re-assign our variable to another value
city = 'berlin'
console.log(city) // <== berlin

// but still CAN NOT change the value "berlin"
city[0] = 'B'
console.log(city) // <== berlin

// 'editing' a string value is all about
// creating the new value and reassigning
const a = city.slice(1, 6)
city = 'B' + a
console.log(city)
