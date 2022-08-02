# OOP and Classes

> Object Oriented Programming

How to declare a Class?

```js
class MyClass {
  constructor(argument1, argument2) {
    this.argument1 = argument1
    this.argument2 = argument2
  }
}
```

How to declare a method inside of a class?

```js
class MyClass {
  // ...
  // ...
  myMethod(receivedSomething) {
    return `Hey, I just received ${receivedSomething}!`
  }
}
```

Classes can be seen as factories, that allow us to create multiple objects which might share some common properties but have aswell individuals properties, like a Car having 4 wheels, some windows, a steering-wheel but probably have different colors, different brand, models...

A class can inherit from an other class, it then receives all the properties and methods from the parent class.
For a Car to inherit from Vehicle, the syntax would go like this:

```js
class Car extends Vehicle {}
```

And then inside of the `constructor`, you would need to use the [super](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super) keyword.

`super` can do multiple things:

- It can call a method from the parent `super.myMethod()`
- It can execute the constructor of the parent `super(the, arguments, neededByTheParent)`
