use strict;
use warnings;
use feature "say";


while(){

my @hex_system = ('0'..'9', 'A'..'F');
my $color = join '' => map $hex_system [rand @hex_system], 1 .. 8;

my $file= "result.html";

system "$file";   

open( my $fh, '>', $file ) or
  die "could not open $file";

say $fh "
<!DOCTYPE html>
<html>
   <head>
   <title> The Color is: #$color</title>
  <style>
   html, body{
    margin:0;
    padding:0;
    font-family:sans-serif;
    background:#$color;
   }

   h1{
       color:#fff;
       position:absolute;
       left:50%;
       top:50%;
       transform:translate(-50%,-50%);
       margin:0;
       font-size:60px;
   }
   </style>

   </head>
   <body>
    <h1>Das ist die Farbe: #$color</h1>
   </body>
   </html>";
close $fh;
say "Changed the color of Site succesfully to #", $color;
last;
}
