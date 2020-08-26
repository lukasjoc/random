
use warnings;
use diagnostics;
use feature "say";
use POSIX;

while(true){

say "Bitte gib deine Zahl ein";

my $number1 = <STDIN>;
say "Bitte waehle aus folgenden Rechenaufgaben, und bestätige durch die jeweilige Zahl";
say "1 = +"; say "2 = -"; say "3 = *"; say "4 = /";

my $type = <STDIN>;
say "Bitte gib deine zweite Zahl ein";

my $r;
my $number2 = <STDIN>;
if($type == 1){$r= $number1 + $number2;} 
elsif($type == 2){$r= $number1 - $number2;}
elsif($type == 3){$r= $number1 * $number2;}
elsif($type == 4){$r= $number1 / $number2;}
else{ say "Invalid Input. Try Again. Keep in Mind of the Selection you made at the Operator";}

say "Dein Ergebnis ist: ", $r;
my $file = "result.html";
system "$file";
open(my $handler, '>', $file) or die "Could not open or create your requested file";
say $handler "
<html>
  <head>
    <style>
      html, body{ background: #eee; color: #333; font-family: sans-serif; }
      h1{ font-size:2rem; position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);}
    </style>
  </head>
  <body>
    <h1> Das Ergebnis ist: $r </h1>
  </body>
</html>";
close $handler;
last;
}
