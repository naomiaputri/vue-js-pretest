const city = ['Jakarta', 'Aceh', 'Malang', 'Medan', 'Bontang', 'Jogja', 'Jakarta', 'Bandung', 'Malang', 'Solo', 'Palembang', 'Bandung']

function duplicateRemover(city){
	unique_city = city.filter((x, i, a) => a.indexOf(x) == i)
	return unique_city.join(', ')
}

console.log("Input: duplicateRemover(city)");
console.log('Output: ' + duplicateRemover(city));
