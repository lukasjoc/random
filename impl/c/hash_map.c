#include  <stdio.h>

// pair of key and value ints only
// and keys are / should be mostly unique and uniform
// [10] -> [1, 2, 3, 4|4-> 5, NULL, 6, 7, NULL, 9, NULL]
typedef struct pair {
  // int *key;
  // int *value;
  int key;
  int value;
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
  pair buckets[];
} hashmap;

// TODO: add, remove, get -> dict_opts
// TODO: write hash function for that
// TODO: maybe do auto sizing based on load factor later
// n -> number of keys
// m -> number of buckets
// a -> load factor of hash table(n/m)

int probed_index(hashmap *hm, int *key ) {
  int mod_index = *key % hm->numberof_buckets;
  pair mod_pair = hm->buckets[mod_index];

  // if it is direcly accessable then just use it
  if (mod_pair.key != 0) return mod_index;

  // if we have to search for a diffrent index to use
  // we will single step through the thing
  // TODO: maybe we also take the load factor into consideration
  // and reszie and append accordingly but that is for later
  while( (mod_pair.key != 0) && (mod_pair.key != *key) ){
    mod_index = (mod_index +1) % hm->numberof_buckets;
  }
  return mod_index;
}

// insert into hashmap
void insert(hashmap *hm, int *value) {
  int index = probed_index(hm, value);
  hm->buckets[index].key = index;
  hm->buckets[index].value = *value;
}

// get value by key
//int get(hashmap *hm, *key) {
//  return hm->buckets.value
//}

// TODO: initialize with size

int main() {
  // basic hashmap instance with 100 free buckets
  // for now just static and not automagically resizable

  hashmap yolomap = {
    .numberof_buckets = 100,
  };

  printf("yolomap: %p\n", (void *)&yolomap);

  // initialize with zeros
  // for (int i = 0; i <= yolomap.numberof_buckets; i++) {
  //  yolomap.buckets[i].key = 0;// NULL;
  //  yolomap.buckets[i].value = 0; //NULL;
  //}

  for(int i = 0; i < yolomap.numberof_buckets; i++) {
    insert(&yolomap, &i);
  }
  for(int i = 0; i < yolomap.numberof_buckets; i++) {
    if (yolomap.buckets[i].key != 0) {
      //printf("{ %p: %p\n }", (void*)&yolomap.buckets[i].key, (void*)&yolomap.buckets[i].value);
      printf("{ %d: %d\n }", yolomap.buckets[i].key, yolomap.buckets[i].value);
    }
  }
  return 0;
}


