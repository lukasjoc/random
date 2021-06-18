package histogram

import (
	"reflect"
	"testing"
)

func TestHistogram(t *testing.T) {
	for _, test := range histogramTests {
		if received := Histogram(test.data); !reflect.DeepEqual(received, test.expected) {
			t.Errorf("Histogram(%q) expected %v, received: %v", test.data, test.expected, test.data)
		}
	}
}

func BenchmarkHistogram(b *testing.B) {
	for i := 0; i < b.N; i++ {
		for _, test := range histogramTests {
			Histogram(test.data)
		}
	}
}
