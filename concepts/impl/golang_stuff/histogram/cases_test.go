package histogram

type histogramTest struct {
	data, desc string
	expected   map[string]int
}

var histogramTests = []histogramTest{
	{
		desc: "Just one word",
		data: "some some some",
		expected: map[string]int{
			"some": 3,
		},
	},
	{
		desc: "Just different words",
		data: "this is different",
		expected: map[string]int{
			"this":      1,
			"is":        1,
			"different": 1,
		},
	},
	{
		desc: "just uppercase words",
		data: "THIS IS JUST UPPERCASE",
		expected: map[string]int{
			"this":      1,
			"is":        1,
			"just":      1,
			"uppercase": 1,
		},
	},
	{
		desc: "just mixed case words",
		data: "This Is jUst MiXeDcASe",
		expected: map[string]int{
			"this":      1,
			"is":        1,
			"just":      1,
			"mixedcase": 1,
		},
	},
	{
		desc: "just mixed case words",
		data: "This -I -s jUs- t M M iXeDcASe",
		expected: map[string]int{
			"this":     1,
			"-i":       1,
			"-s":       1,
			"jus-":     1,
			"t":        1,
			"m":        2,
			"ixedcase": 1,
		},
	},
}
