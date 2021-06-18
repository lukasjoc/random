#!/usr/bin/env perl
use strict;
use warnings;
use utf8;

# Given Paths as arguments execute docker-compose pull and docker-compose up --build -d
foreach my $arg (@ARGV) {
  print 'Composing $arg...\n';
  system('docker-compose pull');
  system('docker-compose -f', $arg, ' up -d');
}
