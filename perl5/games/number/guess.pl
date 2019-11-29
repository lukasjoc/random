use strict;
use warnings;
use diagnostics;
use feature "say";

my $my_number = int(rand(50));
my $turns = 5;
say "Give me a number between 0 and 50 ";
say "NOTE ! You've only got 5 Turns";

while(){
    my $your_number = <STDIN>;
    if($your_number != $my_number){
        say "That wasn't quiet the correct answer. Try Again :( ";
    }else{
        say "That is in fact completely right. Congratulations :)";
        last;
    }

    if($your_number > $my_number){
        say "It was way to HIGH -> guess lower";
    } elsif($your_number < $my_number){
        say "It was way to LOW -> guess higher ";
    }

    if( $turns >= 1 && $turns != 0 ){
        say "You've only got ",  --$turns, " turn/s left";
    } elsif($turns == 0){
        say"You havn't made in with 5 turns. YOU LARRY ! ";
    }
}
