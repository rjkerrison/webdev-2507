const objectX = { a: 8, b: 9, c: 3 };
const arrayX = [53, 543, 767];

// Object Destructuring
// This grabs "a" and "b" from objectX and stores them in variables "a" and "b"
// Order does not matter in objects
const { b, a } = objectX; // {b, a} = { a: 8, b: 9, c: 3 }

console.log(a);  // 8
console.log(b);  // 9

// Array Destructuring
// We can also grab elements from an array and store them variables
// Order matters in arrays
const [d, e, f, g] = arrayX;  // [c, d, e, f] = [53, 543, 767]

console.log(d); // 53
console.log(e); // 543
console.log(f); // 767
console.log(g); // undefined. because the array doesn't have a 4th element

// Shorthand Property Name
const botName = `Wall-E`;
const mission = `Salvage`;

const robot = {
  botName,  // We don't have to do botName: botName when the property name is the same as the variable name
  mission  // We don't have to do mission: mission when the property name is the same as the variable name
}

console.log(robot);  // {botName: `Wall-E`, mission: `Salvage`}


// ...rest
const objectY = {h: 4, i: 99, j: 11, k: 0};
const arrayY = [23, 432, 66, 77];

// We can also grab one thing from an object, store it in a variable. Then grab whatever is left and store in another variable
const { i, ...rest } = objectY;  // {i, ...rest} = {h: 4, i: 99, j: 11, k: 0}

// We don't have to use the name "rest". It can whatever we want
const { h, ...otherStuff } = objectY;  // {h, ...otherStuff} = {h: 4, i: 99, j: 11, k: 0}

console.log(i); // 99
console.log(rest); // {h: 4, j: 11, k: 0}

console.log(h); // 4
console.log(otherStuff); // {i: 99, j: 11, k: 0}

// We can also use ...rest with arrays
const [firstElement, ...otherElements] = arrayY;  // [firstElement, ...otherElements] = [23, 432, 66, 77]

console.log(firstElement);  // 23
console.log(otherElements);  // [432, 66, 77]

