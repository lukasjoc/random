#!/usr/bin/env perl
use strict;
use warnings;
use utf8;

#TODO: 
# https://stackoverflow.com/questions/54389215/run-multiple-jobs-within-perl-script-at-the-same-time
foreach my $arg (@ARGV) {
  print 'Composing $arg...\n';
  system('docker-compose pull');
  system('docker-compose -f', $arg, ' up -d');
}

