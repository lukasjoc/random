## stack

> Simple int but not concurrent stack implementation using slices in go

### What is a stack
- abstract data type
- muteable
- collection of elements
- can be concurrent/ this is not tho
- LIFO(Last in First Out) datatype

### Basic functions to imlement
- pop -> removes an element from the top
- push -> adds an element to the top
- peek -> returns the first element
- len -> returns the length

### Example:
```
pop --> |1|2|3| => |1|2|
push --> |1|2| => |1|2|3|
peek --> |3|
len --> 3
```

[lukasjoc](https://lukasjoc.com), 2019 
