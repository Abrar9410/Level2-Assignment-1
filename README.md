# Understanding TypeScript: Interfaces vs Types and 

Here we are going to discuss about two important topics of TypeScript.

## 1. Differences between Interfaces and Types

Interfaces and types are both used to define the shape of objects in TypeScript, but they have some key differences: 
### Declaration Merging:
Interfaces support declaration merging, which means that multiple interfaces with the same name in the same scope will be merged into a single interface. Types do not support this.
### Flexibility:
Types are more flexible than interfaces and can be used to define more complex types, such as unions, intersections, and tuples. Interfaces are primarily used to define the shape of objects.
### Extending:
Interfaces can extend other interfaces and types using the extends keyword. Types can extend other types using intersection types (&).
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