package main

import (
	"fmt"
	"log"
	"time"
)

type entity struct {
	value     int64
	timestamp time.Time
}

type queue struct {
	collection []*entity
	count      int64
}

// add to rear of slice
func (q *queue) enqueue(e *entity) {
	q.collection = append(q.collection[:q.count], e)
	q.count++
}

// remove from the front
func (q *queue) dequeue() []*entity {
	if q.count != 0 {
		q.collection = remove(q.collection, 0)
		q.count--
		return q.collection
	}
	return nil
}

// get next element to dequeue
func (q *queue) peek() []*entity {
	if q.count != 0 {
		return q.collection[:1]
	}
	return nil
}

func (q *queue) qcount() int64 {
	if q.count != 0 {
		return q.count
	}
	return 0
}

func Newqueue() *queue {
	return &queue{}
}

func remove(collection []*entity, first int) []*entity {
	return append(collection[:first], collection[first+1:]...)
}

func main() {
	start := time.Now()
	defer execTime(start, "queue")
	myq := Newqueue()

	// adding 100 elements to the queue, queuecount should be 100
	for i := int64(0); i < int64(1000); i++ {
		myq.enqueue(&entity{value: int64(i), timestamp: time.Now()})
	}
	fmt.Printf("First Entity: %v \n", myq.peek())
	fmt.Printf("Queue Count: %v \n", myq.qcount())

	// Removing 60 Entitys from the queue, current queue should be 40 elements
	for i := int64(0); i < int64(60); i++ {
		myq.dequeue()
	}
	fmt.Printf("First Entity: %v \n", myq.peek())
	fmt.Printf("Queue Count: %v \n", myq.qcount())
}

// execTime tracks the execution time of a given function
func execTime(start time.Time, name string) {
	elapsed := time.Since(start)
	log.Printf("INFO: exec time: %v took %v", name, elapsed)
}
