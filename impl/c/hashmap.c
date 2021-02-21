#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define DEFAULT_BUCKET_COUNT 100
#define MAX_LOAD_FACTOR 0.75
#define RESIZE_STEPPING 50

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
  uint_t m;
  // count of keys in the map
  uint_t n;
  // load factor of the hashmap
  float a;
  pair_t *buckets[DEFAULT_BUCKET_COUNT];
};

typedef struct hashmap hashmap_t;

// simple for int keys thats ok I think
static unsigned int hash(uint_t key) {
  return key % DEFAULT_BUCKET_COUNT;
}

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
  if (hm->buckets[key] != NULL) {
    return hm->buckets[key];
  }
  return NULL;
}

// generate pair and insert
static bool insert(hashmap_t *hm, uint_t key, int value) {

  printf("Load Fac: %lf, Bucket Count: %d, Key Count: %d\n", hm->a, hm->m, hm->n);
  if (hm->a >= MAX_LOAD_FACTOR) {
    //for (uint_t i = 1; i < 6; i++) {
      //hm->buckets[hm->m+i] = NULL;
   //}
    hm->m += RESIZE_STEPPING;
  }
  hm->n += 1;
  hm->a = (float)hm->n/hm->m;

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
    index = (index +1) % hm->m;
  }
  hm->buckets[index] = p;
  return true;
}

int main(void) {
  hashmap_t *hm = calloc(1, sizeof(hashmap_t));
  hm->m = DEFAULT_BUCKET_COUNT;
  for(uint_t i=0; i<=DEFAULT_BUCKET_COUNT; i++) {
    hm->buckets[i] = NULL;
  }

  for(uint_t i=0; i <= DEFAULT_BUCKET_COUNT; i++) {
    insert(hm, i, i);
  }

  // Printing the table ===
  printf("{\n");
  for(uint_t i=0; i <= hm->m; i++) {
    pair_t* new_t = get_by_key(hm, i);
    printf("Key:%d => Value: %d \n", new_t->key, new_t->value);
  }
  printf("}\n");
}
