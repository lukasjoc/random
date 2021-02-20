#include <stdio.h>
#include <stdlib.h>

struct node {
  int val;
  struct node *next;
} node;

typedef struct node node_t;

void printll(node_t *head) {
  node_t *tmp_node = head;
  while(tmp_node != NULL) {
    printf("Link: %d -> %p\n",tmp_node->val, &tmp_node->next);
    tmp_node = tmp_node->next;
  }
}

node_t *insert(int val) {
  node_t *node = calloc(1, sizeof(node_t));
  node->val = val;
  node->next = NULL;
  return node;
}

void insert_anywhere(node_t *node_before, node_t* node) {
  node->next = node_before->next;
  node_before->next = node;
}

node_t *update_head_ptr(node_t **head, node_t *node) {
  node->next = *head;
  *head = node;
  return node;
}

node_t *find_node(node_t *head, int val) {
  node_t *tmp_node = head;
  while(tmp_node != NULL) {
    if (tmp_node->val == val) return tmp_node;
    tmp_node = tmp_node->next;
  }
  return NULL;
}

void reversell(node_t* head) {
  node_t *prev, *next = NULL;
  node_t *current = head;
  while(current != NULL) {
    next = current->next;
    current->next = prev;
    prev = current;
    current = next;
  }
  head = prev;
}

int main(void)  {
  node_t *head = NULL;
  node_t *node;
  for(int i = 0; i < 100; i++) {
    node = insert(i);
    update_head_ptr(&head, node);
  }
  printll(head);
  insert_anywhere(node, insert(1313));
  node_t *found = find_node(head, 1313);
  printf("Found: %d\n", found->val);
  printll(head);
  reversell(head);
  printll(head);
  return 0;
}

