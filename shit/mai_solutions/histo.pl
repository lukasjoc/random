use v5.16.0;
use warnings;

# map in perl to store the sols
my %counts;

while (my $line = readline STDIN) {
    for my $word (split ' ', $line) {
        $counts{$word}++;
    }
}

for my $word (sort {$counts{$b} <=> $counts{$a} || $a cmp $b } keys %counts ) {
    print "$word $counts{$word}\n";
}
