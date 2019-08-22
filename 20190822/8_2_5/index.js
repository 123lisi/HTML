function btnTest() {
	// body...
	var value = document.getElementById("name");
	console.log(value.value);
	console.log(value.name);
	console.log(value.type);
}
function btnTest1() {
	// body...
	var input = document.getElementsByName("username");
	// console.log(input);
	for (var i = 0; i < input.length; i++) {
		console.log(input[i].value);
	}
}
console.log("------通过标签名进行选择")
