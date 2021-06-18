//#include <stdio.h>
//#include <stdlib.h>
//#define WASM_EXPORT __attribute__((visibility("default")))
//# WASM_EXPORT

// recursive baad
int Fibo(int n) {
  if (n <= 2) return n;
  return Fibo(n-1)+Fibo(n-2);
}

int main(void) {
  // This does nothing
  return 0;
}

