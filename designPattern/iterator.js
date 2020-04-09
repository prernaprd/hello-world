//Provide a way to access the elements of an aggregate object sequentially
// without exposing its underlying representation.

var iterator = (function(i) {
        let index = i;
		data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		length = data.length;

	return {
		next: function() {
			var element;
			if (!this.hasNext()) {
				return null;
			}
			element = data[index];
			index += 1;
			return element;
		},
		hasNext: function() {
			return index < length;
		},
		rewind: function() {
			index = 0;
			return data[index];
		},
		current: function() {
			return data[index];
		}
	}

}(2));

console.log(iterator.next());
console.log(iterator.hasNext());