let-const
---

## purpose

1. to keep variables under block context
2. no repeated declarations
3. look up block context at first, then upper closures
4. const keep the basic variables can't be changed, like boolean, number and string

## attention

1. do not declare functions under block context, variables instead
2. use block if there is any let or const literal exist in the condition sentence
3. the window attributes do not take the let or const declarations

## best practice

1. use Object.freeze to seal the object member
