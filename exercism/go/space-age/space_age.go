// Package space calculates the ages of a person on different planets except Pluto ;)
package space

// Age calculates the ages of a person on different planets except Pluto ;)
func Age(secs float64, p string) float64 {
	var sp float64
	if p == "Earth" {
		sp = 365.25 * 24 * 60 * 60
		return secs / sp
	} else if p == "Mercury" {
		sp = (365.25 * 0.2408467) * 24 * 60 * 60
		return secs / sp
	} else if p == "Venus" {
		sp = (365.25 * 0.61519726) * 24 * 60 * 60
		return secs / sp
	} else if p == "Mars" {
		sp = (365.25 * 1.8808158) * 24 * 60 * 60
		return secs / sp
	} else if p == "Jupiter" {
		sp = (365.25 * 11.862615) * 24 * 60 * 60
		return secs / sp
	} else if p == "Saturn" {
		sp = (365.25 * 29.447498) * 24 * 60 * 60
		return secs / sp
	} else if p == "Uranus" {
		sp = (365.25 * 84.016846) * 24 * 60 * 60
		return secs / sp
	} else if p == "Neptune" {
		sp = (365.25 * 164.79132) * 24 * 60 * 60
		return secs / sp
	}
	return 0.0
}
