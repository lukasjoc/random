const attach_id = function () {
	let uniq = 0
	return function (obj) {
		const id = uniq++ // next id
		obj._id_ = function () {
			if (this === obj) {
				return id
			}
			return attach_id(this)
		}
		return id
	}
}()

attach_id(Object.prototype)

// -------------------------------------

let a = []
console.log( a._id_())

let b = a
console.log(b._id_())
console.log(a._id_())

b = b.concat(b)
console.log(a._id_())
console.log(b._id_())

let c = 'hello'
console.log(c._id_())
console.log(c._id_())

let x = { fake: 'hello' }
console.log(x._id_())
