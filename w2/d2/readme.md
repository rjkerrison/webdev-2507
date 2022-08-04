# OOP and Classes

> Object Oriented Programming

## Classes

Classes can be seen as factories, that allow us to create multiple objects which might share some common properties but also have individual properties.
For example, every car has 4 wheels, some windows, and a steering-wheel,
but they may have different colours, by made by a different manufacturer, they may be a different models, etc.

When we create an object based on a class, we call that a _class instance_. We call the creation of a class instance _instantiation_.

### Declaration and constructor

How to declare a Class?

```js
class MyClass {
  constructor(argument1, argument2) {
    this.argument1 = argument1
    this.argument2 = argument2
  }
}
```

The `constructor` is the function that will run when we _instantiate_ the class.

### Class methods

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

## Subclasses and Inheritance

A class can inherit from another class.
The _subclass_ receives all the properties and methods from the parent _super_ class.

For a `Car` to inherit from `Vehicle`, the syntax would go like this:

```js
class Car extends Vehicle {}
```

Inside of the `constructor` of `Car`, it is required to use the [`super`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super) keyword to call the parent constructor.

### Super

The `super` keyword has two uses:

- It can execute the constructor of the parent `super(the, arguments, neededByTheParent)`. Without this, we would not instantiate an instance of the parent class, and the inheritance would be invalid.
- It can call a method from the parent class `super.myMethod()`. This can be useful when we want to execute all the parent behaviour, but also add additional behaviour of our own.
