## queue

> Multi worker json queue in go

![queue_image_src_wikipedia](https://upload.wikimedia.org/wikipedia/commons/5/52/Data_Queue.svg)

### What is a queue
- abstract data type
- muteable
- collection of elements
- sequential computation/working
- FIFO(First in First Out) Data Type

### Basic functions to imlement
- dequeue -> adds one element to the end
- enqueue -> removes the top element
- peek -> get current top element
- len -> get length of queue

### Example:
```
deq --> [1] [2] [3] => [2] [3]
enq --> [2] [3] => [2] [3] [4]
peek --> [2]
len --> 3
```

[lukasjoc](https://lukasjoc.com), 2019

