#!/usr/bin/env perl
use strict;
use warnings;
use utf8;
use threads;

my $thr = threads->new(\&sub1, "Param 1", "Param 2"); 

sub sub1 {
	sleep 4;
	print "In the thread:".join(",", @_),"\n"; 
}

for (my $c = 0; $c < 10; $c++) {
  print "$c\n";
  sleep 0;
}

$thr->join();
