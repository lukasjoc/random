package letter_hash

import "testing"

// INFO: these tests are not reasoning about case sensitivity. they just respond as lowercase.
// this is already a feature request that is implemented when there is time box available.

type tester struct {
	desc            string
	input, expected string // could also be handled as encoded, decoded
}

// data for testing encoding of a tripple(char[3])
var trippleEnc = []tester{{
	desc:     "encode a tripple",
	input:    "aby",
	expected: "010225",
}}

// data for testing decoding of a tripple(char[3])
var trippleDec = []tester{{
	desc:     "decode a tripple",
	input:    "010225",
	expected: "aby",
}}

var longEnc = []tester{
	{
		desc:     "Longest german word",
		input:    "donaudampfschiffahrtselektrizitaetenhauptbetriebswerkbauunterbeamtengesellschaft",
		expected: "0415140121040113160619030809060601081820190512051120180926092001052005140801211620020520180905021923051811020121211420051802050113200514070519051212190308010620",
	},
	{
		desc:     "Another long german word",
		input:    "rindfleischetikettierungsueberwachungsaufgabenuebertragungsgesetz",
		expected: "1809140406120509190308052009110520200905182114071921050205182301030821140719012106070102051421050205182018010721140719070519052026",
	},
}

var longDec = []tester{
	{
		desc:     "Longest german word",
		input:    "0415140121040113160619030809060601081820190512051120180926092001052005140801211620020520180905021923051811020121211420051802050113200514070519051212190308010620",
		expected: "donaudampfschiffahrtselektrizitaetenhauptbetriebswerkbauunterbeamtengesellschaft",
	},
	{
		desc:     "Another long german word",
		input:    "1809140406120509190308052009110520200905182114071921050205182301030821140719012106070102051421050205182018010721140719070519052026",
		expected: "rindfleischetikettierungsueberwachungsaufgabenuebertragungsgesetz",
	},
}

// TestTrippleEncode tests the encoding function on a tripple for now
func TestTippleEncode(t *testing.T) {
	for _, i := range trippleEnc {
		if result := Encode(i.input); result != i.expected {
			t.Errorf("encoding test failed :=> for: %v,  expected: %v,  got: %v\n", i.input, i.expected, result)
		}
	}
}

// TestTrippleDecode tests the decoding function on a tripple for now
func TestTrippleDecodeT(t *testing.T) {
	for _, i := range trippleDec {
		if result := Decode(i.input); result != i.expected {
			t.Errorf("decoding test failed :=> for: %v,  expected: %v,  got: %v\n", i.input, i.expected, result)
		}
	}
}

// TestLongEncode tests the encoding function on a loong word
func TestLongEncode(t *testing.T) {
	for _, i := range longEnc {
		if result := Encode(i.input); result != i.expected {
			t.Errorf("encoding test failed :=> for: %v,  expected: %v,  got: %v\n", i.input, i.expected, result)
		}
	}
}

// TestLongDecode tests the decoding function on a long word
func TestLongDecodeT(t *testing.T) {
	for _, i := range longDec {
		if result := Decode(i.input); result != i.expected {
			t.Errorf("decoding test failed :=> for: %v,  expected: %v,  got: %v\n", i.input, i.expected, result)
		}
	}
}
