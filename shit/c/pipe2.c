#include <stdio.h>
#include <stdlib.h>

const int BUFSIZE = 1024 * 4;
int main(void) {
  char buf[BUFSIZE];

  fprintf(stdout, "STDOUT VON PROGRAMM B/2");
  while(fgets(buf, BUFSIZE, stdin)) {
    fprintf(stdout, "%s", buf);
  }
  return EXIT_SUCCESS;
}

