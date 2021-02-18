#include  <stdio.h>

int main(void) {
  FILE *f = fopen("out.txt", "r");

  if (f == NULL) {
    printf("cant open that file");
    return 1;
  }

  char c;
  while((c=fgetc(f)) != EOF) {
    putchar(c);
  }

  fclose(f);
  return 0;
}

