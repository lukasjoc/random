#include  <stdio.h>

union test_union {
  int i;
  float f;
};

typedef struct implement_union {
  union test_union ufield;
} implement_union;

int main(void) {
  //implement_union iu;
  union test_union u;
  // u->i = 12;
  // iu->ufield = (test_union)12;
  // u.f = 10.0;
  //u.i = 10;
  printf("%d | %lf", u.i, u.f);
}

