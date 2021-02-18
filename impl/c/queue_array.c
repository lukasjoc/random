#include  <stdio.h>
#include  <stdlib.h>

typedef struct node {
  int val;
  struct node *next;
} node;

typedef struct {
  node *head;
  node *tail;
} queue;

void init_queue(queue *q) {
  q->head = NULL;
  q->tail = NULL;
}

int enq(queue *qu, int val) {
  node * newnode = malloc(sizeof(node));
  if (newnode == NULL) return 1;

  newnode->val = val;
  if(qu->tail != NULL) {
    qu->tail->next = newnode;
  }

  qu->tail = newnode;
  if (qu->head == NULL) {
    qu->head = newnode;
  }

  return 0;
}

int deq(queue *qu) {
  if (qu->head == NULL) return 0;
  node *tmp =  qu->head;
  int res = tmp->val;

  qu->head = qu->head->next;
  if (qu->head == NULL) {
    qu->tail = NULL;
  }

  free(tmp);
  return res;
}

int peak(queue *qu) {
  if (qu-> head == NULL) return 0;
  node *tmp = qu->head;
  int res = tmp->val;

  return res;
}

int main(void) {

  queue q;
  init_queue(&q);

  enq(&q, 100);
  enq(&q, 101);
  enq(&q, 102);
  enq(&q, 103);

  deq(&q);

  printf("%d\n", peak(&q));

}


