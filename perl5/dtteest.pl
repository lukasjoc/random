#!/usr/bin/env perl
use strict;
use warnings;
use utf8;
use DateTime;
use Data::Dumper;

# This object represent 01:30:00 standard time
my $dt = DateTime->new(
    year      => 2003,
    month     => 10,
    day       => 26,
    hour      => 1,
    minute    => 30,
    second    => 0,
    time_zone => 'America/Chicago',
);

my $month = $dt->add(months => 1);
$month->truncate(to => "month")->add(months => "2");
print Dumper($month);
