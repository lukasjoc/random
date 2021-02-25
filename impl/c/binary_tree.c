#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

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

// TODO: free whole tree
// traverse and free each sibling

// given a root node traverse and free each sibling
void free_node(tree_node *node) {
  free(node->right);
  free(node->left);
}

void free_tree(tree_node *root) {
  if (root->is_root) {
    free_node(root->right);
    free_node(root->left);
  }
}

// recusively free the tree given a root
// by freeing all left and rights of the subsequent nodes

void print_tree(tree_node *some_root) {
  if(some_root != NULL) {
    printf("%d\n/\t", some_root->value);
    printf("/\n");
    print_tree(some_root->right);
    printf("\\\n");
    print_tree(some_root->left);
  }
}

int main(void) {
  tree_node *root = create_node(1, true);
  tree_node *sib0 = create_node(10, false);
  tree_node *sib1 = create_node(100, false);

  // docking onto the root node
  root->left = sib0;
  root->right = sib1;

  // pretty print the tree
  print_tree(root);

  // dont forget the free-dom ;)
  //free(root);
  //free(sib0);
  //free(sib1);

  // free tree starting from the root node downwards
  free_tree(root);
  return 0;
}

