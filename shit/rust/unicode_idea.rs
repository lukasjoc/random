// use std::collections::HashMap;

fn add_letters(letters: Vec<char>) -> char {
    if letters.len() == 0 {
        return 'z';
    }
    
    let ord = |c: char| -> u8 { c as u8 };
    let chr = |u: u8| -> char { u as char };
    
    let count_to_char = |count: u8| -> char {
        let o = (97u8 + count) - 1u8;
        if o > 122u8 {
            return chr(96+(count%26));
        }
        chr(o)
    };
   
    let mut count: u8 = 0;
    println!("{:?}", letters);
    for l in letters {
        println!("{:?}", l);
        count += ord(l) - 96u8;
    }
    println!("{}", count);
    count_to_char(count)
}
