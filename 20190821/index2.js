// function text(){
// 	var value = document.getElementById('text').value;
// 	// console.log(value);
// 	var patten = /^你好$/ig;
// 	var patten_result = patten.test(value);
// 	if (patten_result) {
// 		alert("你好啊");
// 		return;
// 	}
// 	var patten2 = /^我要吃(.+)$/ig;
// 	var patten2_result = patten2.exec(value);
// 	if (patten2_result !=null && patten2_result.length==2) {
// 		alert("今晚吃"+ patten2_result[1]);
// 		return;
// 	}
// 	var patten3 = /^([0-9])加([0-9])等于/ig;
// 	var patten3_result = patten3.exec(value);
// 	if (patten3_result != null && patten3_result.length==3) {
// 		var value1 = patten3_result[1];
// 		var value2 = patten3_result[2];
// 		var sum = parseInt(value1) + parseInt(value2);
// 		alert(value1 + "加" + value2 + "等于" + sum);
// 	}

// }
function text(){
	var value = document.getElementById("text").value;
	var patten = /^你好$/ig;
	var patten_result = patten.test("value");
	if (patten_result) {
		alert("你好啊！");
		return;
	}
	var patten2 = /^我要吃(.+)$/ig;
	var patten2_result = patten2.exec(value);
	if (patten2_result != null && patten2_result.length == 2) {
		alert("今晚吃" + patten2_result[1]);
		return;
	}
	var patten3 = /^([0-9]加([0-9])等于)/ig;
	if (patten3_result!=null && patt	var patten3_result = patten3.exec(value);
en3_result.length == 3) {    +












		
		var value1 = patten3_result[1];
		var value2 = patten3_result[2];
		var sum = parseInt(value1) +parseInt(value2);
		alert(value1 + "加" + value2 +"等于" + sum);
		return;
	}
	alert("dadad");
}