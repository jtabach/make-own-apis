// sum

module.exports = {
	add: function add(arr) {
		return arr.reduce(function(total, num) {
			return total + parseInt(num);
		},0);
	},
	square: function square(num) {
		return parseInt(num) * parseInt(num);
	}
}