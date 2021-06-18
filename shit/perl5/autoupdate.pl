#!/usr/bin/env perl -w
use strict;
use utf8;

#TODO: define a cronjob for ever 
#day to lookup and run the script

my $UPDATE_EPOCH_DAYS = $ENV{'UPDATE_EPOCH_DAYS'};
my $CURRENT_EPOCH = $ENV{'CURRENT_EPOCH'};

if($CURRENT_EPOCH == $UPDATE_EPOCH_DAYS) {
  update_system();
  configure_env();
  $CURRENT_EPOCH = 0;
}else{
  $CURRENT_EPOCH +1;
}

sub configure_env {
  my @commands = [
    'cd ~/w/envm/ && git pull',
    'cp ~/w/envm/shell/.bashrc ~/.bashrc',
    'cp ~/w/envm/stuff/.inputrc ~/.inputrc',
    'cp ~/w/envm/stuff/.vimrc ~/.vimrc',
  ];
  for my $cmd (@commands) {
    exec($cmd);
  }
}

sub update_system {
  my @commands = [
    'sudo apt-get update',
    'sudo apt-get upgrade',
    'sudo apt autoclean',
    'cd ~/ && find . -type d -empty'
  ];
  for my $cmd (@commands) {
    exec($cmd);
  }
}


