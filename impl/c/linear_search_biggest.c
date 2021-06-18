#include  <stdio.h>
#include <stdlib.h>

// find peak of list
int main(void) {
  int biggest;
  int c[] = { 1, 2, 2, 4, 6, 5 };
  // size_t gives me the size in bytes
  // and size of the size of c in bytes
  // this approach is O(n) it sacals linear with len of c
  size_t len = sizeof c / sizeof *c;
  if (len == 1) return c[0];
  for (int i = 0; i <= len; i++) {
    if (c[i] > biggest) {
      biggest = c[i];
    }
  }
  printf("BIGGEST: %d\n", biggest);
}

