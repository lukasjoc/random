package main

import (
	"fmt"
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
		q.collection = remove(q.collection, 1)
		q.count--
		return q.collection
	}
	return nil
}

// get next element to dequeue
func (q *queue) front() []*entity {
	if q.count != 0 {
		return q.collection[:1]
	}
	return nil
}

func (q *queue) len() int64 {
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
	myq := Newqueue()

	// Enqueue 10 elements
	for i := 0; i < 10; i++ {
		myq.enqueue(&entity{value: int64(i), timestamp: time.Now()})
	}

	fmt.Printf("First Element %v \n", myq.front())
	fmt.Printf("Current Lenght: %v \n", myq.len())
	fmt.Printf("Current Queue: %v \n", myq)
	myq.dequeue()
	fmt.Printf("First Element %v \n", myq.front())
	fmt.Printf("Current Lenght: %v \n", myq.len())
	fmt.Printf("Current Queue: %v \n", myq)
}
