#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

// number of nodes including the root node
// traversing needs n(TREE_HEIGHT) time
#define TREE_HEIGHT 10

typedef struct tree_node {
  int value;
  bool is_root; // :)
  struct tree_node *right;
  struct tree_node *left;
}tree_node;


// given a value create new node without any further connection
tree_node *create_node(int value, bool is_root) {
  tree_node *tmp_node = calloc(1, sizeof(tree_node));
  if (tmp_node != NULL) {
    tmp_node->value = value;
    tmp_node->is_root = is_root;
    tmp_node->right = NULL;
    tmp_node->left = NULL;
  }
  return tmp_node;
}

// given a root node traverse and free each sibling
void free_node(tree_node *node) {
  free(node->right);
  free(node->left);
}

// recusively free the tree given a root
// by freeing all left and rights of the subsequent nodes
void free_tree(tree_node *root) {
  if (root->is_root) {
    free_node(root->right);
    free_node(root->left);
  }
}

// print the tree in 2d mode
void _print_tree_with_level(tree_node *some_root, int level) {
  if (some_root != NULL) {
    level += 10;
    _print_tree_with_level(some_root->right, level);
    printf("\n");
    for (int i = TREE_HEIGHT; i < level; i++) {
      printf("  ");
    }
    printf("%d\n", some_root->value); 
    _print_tree_with_level(some_root->left, level);
  }
}

// print the tree in 2d mode
void print_tree(tree_node *some_root) {
  if (some_root->is_root) {
    _print_tree_with_level(some_root, 0);
  }else {
    printf("printing starts with root nodes");
  }
}

int main(void) {
  // initializing new nodes to tree_node pointers
  tree_node *root = create_node(1, true);
    tree_node *sib0 = create_node(10, false);
      tree_node *sib2 = create_node(101, false);
      tree_node *sib3 = create_node(102, false);

    tree_node *sib1 = create_node(100, false);
      tree_node *sib4 = create_node(103, false);
      tree_node *sib5 = create_node(1033, false);

  // docking onto the root node
  root->right = sib0;
  root->left = sib1;
  sib0->right = sib2;
  sib0->left = sib3;
  sib1->right = sib4;
  sib1->left = sib5;

  // pretty print the tree
  print_tree(root);

  // free tree starting from the root node downwards
  free_tree(root);
  return 0;
}

