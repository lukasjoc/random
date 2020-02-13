#!/usr/bin/env perl -w
use strict;
use utf8;

# Sets up a new docker user and make it a sudo user
# su's into it
sub setup_user {
  my @commands = [
    'adduser docker',
    'usermod -aG sudo docker',
    'su - docker'
  ];
  for my $cmd (@commands) {
    exec($cmd);
  }
}

sub configure_env {
  my @commands = [
    'git clone https://github.com/lukasjoc/envm.git ~/w/envm/',
    'cp ~/w/envm/shell/.bashrc ~/.bashrc',
    'cp ~/w/envm/stuff/.inputrc ~/.inputrc',
    'cp ~/w/envm/stuff/.vimrc ~/.vimrc',
    'mkdir -p /var/docker/'
  ];
  for my $cmd (@commands) {
    exec($cmd);
  }
}

sub install_tools {
  my @tools = [ "docker", "vim", "git", "tree", "htop", "ack", "wget", "curl" ];
  for my $tool (@tools) {
    exec('sudo', 'apt-get', 'install', $tools);
  }
}

sub update_system {
  my @commands = [ 'sudo apt-get update', 'sudo apt-get upgrade', 'sudo apt autoclean' ];
  for my $cmd (@commands) {
    exec($cmd);
  }
}

setup_user();
install_tools();
configure_env();
update_system();
