#!/usr/bin/env perl
use strict;
use warnings;
use utf8;
use Google::ProtocolBuffers;

Google::ProtocolBuffers->parse("
    message Person {
      required string name  = 1;
      required int32 id     = 2; // Unique ID number for this person.
      optional string email = 3;

      enum PhoneType {
        MOBILE = 0;
        HOME = 1;
        WORK = 2;
      }

      message PhoneNumber {
        required string number = 1;
        optional PhoneType type = 2 [default = HOME];
      }
      repeated PhoneNumber phone = 4;
    }
",
    {create_accessors => 1 }
);

##
## Serialize Perl structure and print it to file
##
open my($fh), ">person.dat";
binmode $fh;
print $fh Person->encode({
    name    => 'A.U. Thor',
    id      => 123,
    phone   => [ 
        { number => 1234567890 }, 
        { number => 987654321, type=>Person::PhoneType::WORK() },
    ],
});
close $fh;

##
## Decode data from serialized form
##
my $person;
{
    open my($fh), "<person.dat";
    binmode $fh;
    local $/;
    $person = Person->decode(<$fh>);
    close $fh;
}

print $person->{name};
print $person->name;

