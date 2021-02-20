#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define DEFAULT_BUCKET_COUNT 100
#define MAX_LOAD_FACTOR 0.75
#define RESIZE_STEPPING 5

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

void rebalance(hashmap_t *hm) {
  printf("Load Fac: %lf, Bucket Count: %d, Key Count: %d\n", hm->a, hm->m, hm->n);
  if (hm->a >= MAX_LOAD_FACTOR) {
    // needs rebalance -> doing it now
    hm->m += RESIZE_STEPPING;
    for (int i = 1; i < 6; i++) {
      hm->buckets[hm->m-1+i] = NULL;
    }
  }
}

// generate pair and insert
static bool insert(hashmap_t *hm, uint_t key, int value) {
  rebalance(hm);
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
    index = (index +1) % DEFAULT_BUCKET_COUNT;
  }
  hm->buckets[index] = p;
  return true;
}

int main(void) {
  hashmap_t *hm = calloc(1, sizeof(hashmap_t));
  hm->m = DEFAULT_BUCKET_COUNT;
  for(int i=0; i<=DEFAULT_BUCKET_COUNT; i++) {
    hm->buckets[i] = NULL;
  }

  for(int i=0; i <= DEFAULT_BUCKET_COUNT-1; i++) {
    insert(hm, i, i);
  }

  // Printing the table ===
  printf("{\n");
  for(int i = 0; i <= DEFAULT_BUCKET_COUNT; i++) {
    if (hm->buckets[i] != NULL) {
      printf(" Key: %d: Value: %d\n", i, hm->buckets[i]->value);
    }else {
      printf(" Key: Emty, Value: Emty\n");
    }
  }
  printf("\n}\n");
}
