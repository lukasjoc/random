#!/usr/bin/node

// universal method _id_ returns a number unique to the object it is called on
Object.prototype._id_ = function () {
  if (typeof this.fake == "undefined") {
    this.fake = `0x${Math.random() * 1000000 | 0}`
  }
  return this.fake
}

let seen = new Map;
for (let i = 0; i < 1000000; i++) {
  let obj = {};
  if (seen.has(obj._id_())) {
    console.log(`duplicate id: ${obj._id_()}`);
    break;
  }
  seen.set(obj._id_(), obj);
}

// TESTING===============================
let a = []
console.log(typeof a, a, a._id_())

let b = a
console.log(typeof b, b, b._id_())
console.log(typeof a, a, a._id_())

b = b.concat(b)
console.log(typeof a, a, a._id_())
console.log(typeof b, b, b._id_())

let c = "grumpy"
console.log(typeof c, c, c._id_())
console.log(typeof c, c, c._id_())

let x = { fake: "hello" };
console.log(typeof x, x, x._id_());

// Sample Output: =======================
// object [ fake: '0x789936' ] 0x789936
// object [ fake: '0x789936' ] 0x789936
// object [ fake: '0x789936' ] 0x789936
// object [ fake: '0x789936' ] 0x789936
// object [ fake: '0x638785' ] 0x638785
// string grumpy 0x244572
// string grumpy 0x738680
// ======================================
