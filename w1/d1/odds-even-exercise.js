for (let i = 1; i <= 40; i++) {
  let oddOrEven = 'odd'
  if (i % 2 === 0) {
    oddOrEven = 'even'
  }

  let fizzbuzzPart = i
  if (i % 15 === 0) {
    fizzbuzzPart = 'fizzbuzz'
  } else if (i % 5 === 0) {
    fizzbuzzPart = 'buzz'
  } else if (i % 3 === 0) {
    fizzbuzzPart = 'fizz'
  }

  console.log(`${fizzbuzzPart} is ${oddOrEven}`)
}
