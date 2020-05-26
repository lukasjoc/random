use structopt::StructOpt;

// This is a very light CLI which does some network stats
// but for now it just prints the average ping


// ohh structs
#[derive(StructOpt)]

struct Cli {
    #[structopt(short="p", long="pattern")]
    pattern: String,

    #[structopt(short="o", long="out", parse(from_os_str))]
    path: std::path::PathBuf,
}

impl std::fmt::Display for Cli {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        write!(f, "{} with pattern {}", self.path.display(), self.pattern)
    }
}

// i learned this is entry? neat
fn main() {
    let _args = Cli::from_args();

    println!("_args is {}", _args)
}


