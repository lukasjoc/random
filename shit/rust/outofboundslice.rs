fn main() {
    // let a: [i32; 1] = [10];
    // println!("{:?}", (&a[0], &a[a.len()-1]));
    //
    //

    //    let mut a: Vec<&'main i32> = Vec::new();
    //     a.push(1000);
    //     a.push(2000);
    //     a.push(3000);
    //     for n in a {
    //         println!("{}", n);
    //     }
    //
    let (is, life) = lifetime_check(10, 20);
    println!("IS,LIVE: {:?}", (is, life));

}



struct VVec<'l>  {
    vvec: &'l VVec;
    fn new() -> VVec {
        todo!();
    }
}

fn lifetime_check<'l>(x: i32, y: i32) -> (bool, VVec<'l, i32>) {
    let v: VVec<'l i32> = VVec::new();
    v.push(x);
    v.push(y);
    println!("X,Y: {:?}", (x,y));
    return (true, v);
}

