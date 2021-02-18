// basic hashmap instance with 100 free buckets
// for now just static and not automagically resizable

#include <stdio.h>
#include <stdlib.h>
// pair of key and value ints only
// and keys are / should be mostly unique and uniform
// [10] -> [1, 2, 3, 4|4-> 5, NULL, 6, 7, NULL, 9, NULL]
typedef struct pair {
  int *key;
  int *value;
} pair;

// hashmap datastructure
// -> 0.02, 2, 100, [struct{1, 343434}, struct{2, 4234}]
// for ints only currently
// linear, single step probing
// open addressing
typedef struct hashmap {
  // quotient of sizeof_keys / numberof_buckets
  float load_factor;

  // number of keys currently not NULL
  int numberof_keys;

  // number of buckets currently occupied
  int numberof_buckets;

  // key value pairs of connected ints
  pair *buckets[];
} hashmap;

// TODO: add, remove, get -> dict_opts
// TODO: write hash function for that
// TODO: maybe do auto sizing based on load factor later
// n -> number of keys
// m -> number of buckets
// a -> load factor of hash table(n/m)


// TODO: tomorrow rebuild to this usage behavour
// insert({"firstNum", 1});
// insert({"firstNum", 1});
// insert({"firstNum", 1}); 

int probed_index(hashmap *hm, int *key ) {
  int mod_index = *key % hm->numberof_buckets;

  pair *mod_pair = hm->buckets[mod_index];
  if (mod_pair == NULL ) return 1;
  if (mod_pair != NULL) return mod_index;

  // if it is direcly accessable then just use it
  //   if (mod_pair->key != NULL) return mod_index;
  // if we have to search for a diffrent index to use
  // we will single step through the thing
  // TODO: maybe we also take the load factor into consideration
  // and reszie and append accordingly but that is for later
  while (
    (mod_pair->key != NULL)
    && (mod_pair->key != key) )
    mod_index = (mod_index +1) % hm->numberof_buckets;
  return mod_index;
}

// insert into hashmap
void insert(hashmap *hm, int key) {
  int index = probed_index(hm, &key);

  // allocate memory for new key value pair in buckets
  pair *p = malloc(sizeof(pair));

  // update values in the pair
  // see what happens if i take the addresses with &
  p->key = &index;
  p->value = &key;

  // update struct bucket
  hm->buckets[index] = p;
}


//int get(hashmap *hm, *key) {
//  
//}

// TODO: free the memory of the key value pair
// DELETE FROM hashmap
// void delete(hashmap *hm, int key) { }

int get(hashmap *hm, int key) {
  if (hm->buckets[key] == NULL) return 1;
  return *hm->buckets[key]->value;
}

int main() {
  hashmap yolomap = {
    .numberof_buckets = 10,
  };

  insert(&yolomap, 10);

  //for(int i = 0; i < yolomap.numberof_buckets; i++) {
  // printf("Key Inserted: %d", get(&yolomap, 10));
  //}

  return 0;
}

