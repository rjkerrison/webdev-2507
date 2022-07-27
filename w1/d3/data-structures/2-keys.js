const paddington = {
  job: 'bear',
  name: 'Paddington',
}

// Accessing all properties
for (const key in paddington) {
  console.log(key)
  // use brackets notation to access with variable keys
  console.log(
    `The value of key is ${key}, so the value of paddington[key] is ${paddington[key]}`
  )
  // the problem here:
  console.log('key', key, 'paddington.key', paddington.key)
  // ... is that there is no paddington.key, because 'key' is not a key on paddington
}

console.log('Object.keys:', Object.keys(paddington))
console.log('Object.values:', Object.values(paddington))
console.log('Object.entries:', Object.entries(paddington))

// variable key? use square bracket notation
const something = 'name'
console.log(paddington[something])
