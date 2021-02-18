%% coding: utf-8
-module(hello).
-export([world/0]).
-import(io, [fwrite/1])

world() ->
  io:fwrite("Hello, World! \n").

