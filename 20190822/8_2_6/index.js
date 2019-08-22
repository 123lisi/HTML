function btnTest1() {
	// body...
	var input = document.getElementsByTagName("input");
	// console.log(input);
	for (var i = 0; i < input.length; i++) {
		
		if (input[i].type == "button") {
			console.log(input[i].value);
		}
	}
	console.log("-----------------------------");
	var select = document.getElementsByTagName("select");
	// console.log(select.name);
	for (var i = 0 ; i < select.length; i++){
		console.log(select[i].name);
		 var option = select[i].getElementsByTagName("option");
		 for(var j = 0; j<option.length;j++ ){
		 	console.log(option[j].value);
		 }
		// for (var j =0 ; j<)
	}
}
