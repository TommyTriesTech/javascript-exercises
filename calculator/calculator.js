function add (a, b) {
	return a+b;
}

function subtract (a, b) {
	return a-b;
}

function sum (list) {
	const adder = (value, currentValue) => value + currentValue;
	if (list.length === 0){
		return 0;
	} else {
		return list.reduce(adder);
	}
}

function multiply (a) {
	const adder = (value, currentValue) => value * currentValue;
	return a.reduce(adder);
}

function power(a, b) {
	var list = [];
	for (var i = 0; i < b; i++){
		list.push(a);
	}
	const adder = (value, currentValue) => value * currentValue;
	return list.reduce(adder);
}

function factorial(x) {
	if (x === 0){
		return 1
	} else {
	var list = [...Array(x + 1).keys()];
	list.shift();
	const adder = (value, currentValue) => value * currentValue;
	return list.reduce(adder);
	}

// for (var i = 0; i < x; i++){
// 	x
// }
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
