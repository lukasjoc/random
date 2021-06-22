// binary_search to find item in vector/list. Return index of
// found item or -1 if not in list
// TODO: move to macro :) b_search!(iterable, find)
fn binary_search(arr: Vec<i64>, x: i64) -> i64 {
    let mut l = 0;
    let mut r = arr.len() -1;
    // mmg hack but ok maybe FIXME: later
    let mut index = 1;
    while l <= r {
        //let mut index = 0;
        let mid = (l+r)/2;
        if arr[mid] == x {
            return index;
        } else if x < arr[mid] {
            r = mid -1
        } else if x > arr[mid] {
            l = mid +1
        }
        index+=1i64;
    }
    -1
}

fn main() {
    // return -1 if not in list
    assert_eq!(binary_search(vec![0,7,10,10], 8), -1);

    // return first if more then one
    assert_eq!(binary_search(vec![0,7,10,10], 10), 2);

    // return again
    assert_eq!(binary_search(vec![0,7,10,10], 7), 1);
}

