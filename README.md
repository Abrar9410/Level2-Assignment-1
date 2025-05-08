# Understanding TypeScript: Interfaces vs Types and 

Here we are going to discuss about two important topics of TypeScript.

## 1. Differences between Interfaces and Types

Interfaces and types are both used to define the shape of objects in TypeScript, but they have some key differences: 
### Declaration Merging:
Interfaces support declaration merging, which means that multiple interfaces with the same name in the same scope will be merged into a single interface. Types do not support this.
### Flexibility:
Types are more flexible than interfaces and can be used to define more complex types, such as unions, intersections, and tuples. Interfaces are primarily used to define the shape of objects.
### Extending:
Interfaces can extend other interfaces and types using the `extends` keyword. Types can extend other types using intersection types (`&`).
### Primitives:
Types can be used to define aliases for primitive types, such as string or number. Interfaces cannot.

Here's a table summarizing the key differences:

| Feature                   | Interface                                    | Type                                |
|---------------------------|----------------------------------------------|-------------------------------------|
| Declaration Merging       | Supported                                    | Not supported                       |
| Flexibility               | Less flexible                                | More flexible                       |
| Extending                 | `extends` keyword                            | Intersection types (`&`)            |
| Primitives                | Cannot define aliases for them               | Can define aliases for primitive types|

As a general rule of thumb, interfaces are often favored for defining the shape of objects and classes, while types are preferred for more complex type definitions, such as unions or intersections.

## 2. The difference between `any`, `unknown`, and `never` types in TypeScript

 Let's get to know about 3 special types in TypeScript: `any`, `unknown` & `never`.

- `any`: This type essentially disables type checking. It allows any value and any operation on it, similar to JavaScript's dynamic typing. In other words, you've just returned to JavaScript losing all the essence of TypeScript if used. While it offers flexibility, it sacrifices type safety and should be used sparingly.

```TypeScript

    let someVariable: any = "hello";
    console.log(someVariable.toUpperCase()); // Allowed, even if someVariable might not be a string
    someVariable = 123; // Also allowed
```
---
- `unknown`: This type represents a value whose type is not yet known. It is more type-safe than `any` because it requires type checking or assertion before performing operations. This ensures that we handle the value appropriately based on its actual type.

```TypeScript

    let unknownVar: unknown = "world";
    // console.log(unknownVar.toUpperCase()); // Error: Object is of type 'unknown'.
    if (typeof unknownVar === 'string') {
        console.log(unknownVar.toUpperCase()); // OK
    }
```
---
- never: This type represents values that never occur. It is used for functions that always throw an error or have an infinite loop, thus never returning a value. It can also be used to represent states that should not exist.

```TypeScript

    function error(message: string): never {
        throw new Error(message);
    }
    
    function infiniteLoop(): never {
        while (true) {}
    }
```
---
### In short:
- We use `any` only when we absolutely need to bypass type checking.
- We use `unknown` when we need to handle values of uncertain type in a type-safe manner.
- We use `never` to indicate unreachable code or states.