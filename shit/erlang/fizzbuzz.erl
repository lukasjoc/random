%% coding: utf-8
-module(fizzbuzz).
-export([
  fizzbuzz/2,
  main/0
]).

fizzbuzz(0, _) ->
  [];
  fizzbuzz(N, Term) when N > 0 ->
    if
    N rem 15 == 0 ->
      io:fwrite("FizzBuzz~n");
    N rem 5 == 0 ->
      io:fwrite("Buzz~n");
    N rem 3 == 0 ->
      io:fwrite("Fizz~n");
    true ->
      io:fwrite("~w~n", [N])
    end,
    [Term|fizzbuzz(N-1, Term)].

main() ->
  fizzbuzz(100, 1).
