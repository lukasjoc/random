#include  <stdio.h>

// returns 0 of if it found the value else 1 as default
int bsearch(int tofind, int *arr, int len) {
  if (arr[0] == tofind || arr[1] == tofind) return 0;

  int head = 0;
  int tail = len - 1;
  int mid = len / 2;

  while (head <= tail) {
    int peak = arr[mid];
    if (peak == tofind) return 0;
    if(peak > tofind) {
      tail = mid -1;
      mid = (head + tail) /2;
    }
    head = mid +1;
    mid = (head+tail)/2;
  }
  return 1;
}

int main(void) {
  int arr[] = {1, 2, 3, 4, 5, 6, 7, 8};
  int search0 = bsearch(11, arr, sizeof(arr)/sizeof(int));
  int search1 = bsearch(10, arr, sizeof(arr)/sizeof(int));

  printf("%d\n", search0);
  printf("%d\n", search1);
}

