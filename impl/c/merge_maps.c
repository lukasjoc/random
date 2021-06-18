#include <stdio.h>
#include <stdlib.h>
#include <strings.h>
// TODO: implement basic hashmap

#define KEY_LENGTH 25
#define MAP_SIZE 10

union valueTypes {
  int int_t;
  char char_t[50];
  float float_t;
  signed int sint_t;
};

struct pair {
//   void* value;
  char T[sizeof(char)];
  char key[KEY_LENGTH]; // char array
};
typedef struct pair pair_t;

//typedef pair_t *map[MAP_SIZE];

//struct map {
  //char keys[];
  // pair *map[MAP_SIZE];
//}
//
void addKey(pair_t *map, char *key) {
  strcpy(map[0].key, key);
}
int main(void) {
// Trying to merge maps but what maps ;) https://rosettacode.org/wiki/Associative_array/Merging#C.2B.2B
//   map* m1 = {
//     {.key="name", .value="Rocket Skates", .T="char"},
//     {.key="price", .value=12.75, .T="float"},
//     {.key="color", .value="yellow", .T="char"},
//   }
//   map m2 = {
//     {.key="price", .value=15.25, .T="float"},
//     {.key="color", .value="red", .T="char"},
//     {.key="year", .value=1974, .T="unsigned int"},
//   }
  
  pair_t *m0[MAP_SIZE];
  //for (int i=0; i<=MAP_SIZE; i++) {
  //  m0[i] = NULL;
  //}
  //
  //
 //m0[0]->key =;
  addKey(*m0,"title");
  printf("%s", m0[0]->key);
}

