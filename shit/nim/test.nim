import strformat

type
	Person = object
		name*: string
		age: Natural

var people = [
	Person(name: "John", age: 34),
	Person(name: "Test", age: ad),
]

for p in people
	echo(fmt"{p.name is {p.age} years old")


