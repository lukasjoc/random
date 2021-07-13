use std::fs::metadata;
use walkdir::{DirEntry, WalkDir};

fn main() {
    for b in WalkDir::new("/") {
        let b = b.unwrap();
        for meta in std::fs::metadata(b.path()) {
            println!("Meta: {:?}\n", meta);
            println!("Meta: {:?}\n", meta.permissions().readonly());
        }
    }
}
