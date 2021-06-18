#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define DEFAULT_BUCKET_COUNT 42
// #define MAX_LOAD_FACTOR 0.75
//#define RESIZE_STEPPING 15

// define unsigned int to be shorter here
typedef unsigned int uint_t;

// define the key:value structure
struct pair {
  // the key  as given by the user
  uint_t key;
  // the value mapped to the key as given by the user
  // void* value;
  int value;
};
typedef struct pair pair_t;

// the hashmap and all its atillery
struct hashmap {
  // count of allocated buckets in the map also NULL buckets
  //uint_t m;
  // count of keys in the map
  //uint_t n;
  // load factor of the hashmap
  //float a;
  pair_t *buckets[DEFAULT_BUCKET_COUNT];
  // uint_t keys[DEFAULT_BUCKET_COUNT];
  // uint_t values[DEFAULT_BUCKET_COUNT];
};

typedef struct hashmap hashmap_t;

// simple for int keys thats ok I think
static unsigned int hash(uint_t key) {
  return key % DEFAULT_BUCKET_COUNT;
}

// TODO: update this code when you know better c skills
// later this month and implement auto resizing
// without segvaulting
// hashmap_t *rebalance(hashmap_t *hm) {
//   hashmap_t *reb = hm;
// 
//   // printf("Load Fac: %lf, Bucket Count: %d, Key Count: %d\n", hm->a, hm->m, hm->n);
//   if (reb->a >= MAX_LOAD_FACTOR) {
//     //      needs rebalance -> doing it now
//     //      update bucket count and add emty buckets
//     // hashmap_t *hm = calloc( sizeof(hm)+(sizeof(pair_t)*RESIZE_STEPPING),  sizeof(hashmap_t));
//     for (uint_t i = 1; i < 6; i++) {
//       reb->buckets[hm->m-1+i] = NULL;
//     }
//     reb->m = 150;
//   }
//   return reb;
// }
//

// get by key
pair_t *get_by_key(hashmap_t *hm, uint_t key) {
  if (*hm->buckets == NULL) return NULL;
  uint_t index = hash(key);
  // index not accessable -> find other one
  for(int i = 0; i < DEFAULT_BUCKET_COUNT; i++) {
    index = (index +1) % DEFAULT_BUCKET_COUNT;
    if (hm->buckets[index] != NULL && hm->buckets[index]->key == key) {
      return hm->buckets[index];
    }
  }
  return NULL;
}

// generate pair and insert
static bool insert(hashmap_t *hm, uint_t key, int value) {

  // printf("Load Fac: %lf, Bucket Count: %d, Key Count: %d\n", hm->a, hm->m, hm->n);
  //   if (hm->a >= MAX_LOAD_FACTOR) {
  //     for (uint_t i = 1; i < RESIZE_STEPPING+1 ; i++) {
  //       hm->buckets[hm->m+i] = NULL;
  //     }
  //     hm->m += RESIZE_STEPPING;
  //   }
  //hm->n += 1;
  //hm->a = (float)hm->n/hm->m;

  pair_t *p = calloc(1, sizeof(pair_t));
  p->key = key;
  p->value = value;

  uint_t index = hash(key);
  // index is instantly accessable
  if(hm->buckets[index] == NULL) {
    hm->buckets[index] = p;
    return true;
  }

  // index not accessable -> find other one
  while (hm->buckets[index] != NULL ) {
    index = (index +1) % DEFAULT_BUCKET_COUNT;
  }
  hm->buckets[index] = p;
  return true;
}

int main(void) {
  hashmap_t *hm = calloc(1, sizeof(hashmap_t));
  // hm->m = DEFAULT_BUCKET_COUNT;
  for(uint_t i=0; i<DEFAULT_BUCKET_COUNT; i++) {
    hm->buckets[i] = NULL;
  }
  for (int i = 0; i<DEFAULT_BUCKET_COUNT; i++) {
    insert(hm, i*10, rand()*13);
  }

  // Printing the table ===
  printf("{\n");
  for (int i=0; i< DEFAULT_BUCKET_COUNT; i++) {
    if (hm->buckets[i] != NULL) {
      printf("Key: %d => Value: %d \n", hm->buckets[i]->key, hm->buckets[i]->value);
    }else {
      printf("Key: EMTY => Value: EMTY \n");
    }
  }
  printf("}\n");

  printf("\n=====\n");
  pair_t* found = get_by_key(hm, 40);
  printf("FOUND: Key: %d => Value: %d \n", found->key, found->value);
}
