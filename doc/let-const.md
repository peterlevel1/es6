let-const
---

## purpose

1. to keep variables under block statement
2. no repeated declarations
3. look up block statement at first, then upper closures
4. const keep the basic variables unchanged, like boolean, number and string

## attention

1. do not declare functions under block statement, variables instead
2. use block if there is any let or const literal exist in the condition sentence
3. the window attributes do not take the let or const declarations
4. const can't keep object member unchanged, only provide an address on the machine

## best practice

1. use Object.freeze to seal the object member
