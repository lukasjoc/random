#include <stdio.h>
#include <stdlib.h>

extern char **environ;

typedef struct Map {
  struct Key key;
  struct Val val;
} Map;

typedef struct Key {
  char env_val, env_name;
} Key;

int main(int argc, char **argv, char **envp) {
  for(int i = 0; environ[i] != NULL; i++) {
    printf("%d: %s\n", i, environ[i]);
  }

  char *home = getenv("HOME");
  printf("MY HOME IS: %s\n", home);

  return 0;
}

