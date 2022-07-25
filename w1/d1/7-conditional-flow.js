// Conditional

const isTodayMonday = true
const isItSnowing = false

if (isTodayMonday) {
  console.log('How was your weekend?')
}

if (isItSnowing) {
  console.log("Let's build a snowman!")
} else {
  console.log('No snowmen today!')
}

// We call these "if-else" blocks

// if (condition) {
//   ...statements to run when the condition is true
// }
if (isItSnowing) {
  console.log('SNOW')
} else if (isTodayMonday) {
  console.log('MONDAY')
} else {
  console.log('NEITHER')
}

const dayOfWeek = 'Monday'

switch (dayOfWeek) {
  case 'Monday':
    console.log('It is very early in the week!')
    break
  case 'Tuesday':
    console.log('There are at least four more days of class this week, yay!')
    break
  case 'Wednesday':
    console.log('We are halfway through the week')
    break
  default:
    // like the else in an if-else block
    console.log(
      'Oh no! It is nearly the weekend! (There are no classes on the weekend.)'
    )
    break
}
