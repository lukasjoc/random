#include <stdio.h>
#include <stdlib.h>

// import bool
typedef _Bool bool;

int main(void) {
  bool x = 1;
  bool y = 0;

  if (x) {
    printf("%d\n", y);
  }
  return y;
}

