#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

const int BUFSIZE = 4096;
int main(void) {
  FILE *pipe = popen("echo \"Hello World from pipe_pr\" | ./pipes_test", "r");
  char buffer[BUFSIZE];
  while(fgets(buffer, BUFSIZE, pipe)) {
    printf("OUT: %s\n", buffer);
  }
  pclose(pipe);
}

