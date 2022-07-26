// square brackets []

const teachers = ['Robin', 'Florian', 'Haroun']
console.log(teachers.length) // 3

// Accessing from an array
console.log(teachers[0])
console.log(teachers[3])

// arrays can be modified / are mutable
teachers[1] = 'Paul'
console.log(teachers)

// We can add things with indexes
teachers[3] = 'Florian'
console.log(teachers)
teachers[6] = 'Benjamin'
console.log(teachers)
console.log(teachers.length)
console.log(teachers[3])
console.log(teachers[4])
console.log(teachers[5])
console.log(teachers[6])

// But usually, we PUSH items onto the end
teachers.push('Julien')
console.log(teachers)
teachers.push('Marko', 'Meryem')
console.log(teachers)

// Checking for an item in an array
// .indexOf tells us where something is
const florianIndex = teachers.indexOf('Florian')
console.log(florianIndex)
teachers[florianIndex] = 'Walid'
console.log(teachers)

// -1 means absent
const morganeIndex = teachers.indexOf('Morgane')
console.log(morganeIndex)

// Checking for presence
console.log(teachers.indexOf('Haroun') !== -1)

// Just checking existence in a simpler way
console.log(teachers.includes('Julien'))
