#include <stdio.h>
#include <stdlib.h>

const int BUFSIZE = 4096;

// int main(int argc, char **argv) {
int main(void) {
  fprintf(stdout, "STDOUT: \n");

  char buffer[BUFSIZE];

  while(fgets(buffer, BUFSIZE, stdin)) {
    fprintf(stdout, "STDOUT FROM STDIN: %s\n", buffer);
  }

  fprintf(stderr, "STDERR: err pls stop");
  return EXIT_SUCCESS;
}

