
// function test3(){
// 	alert("第三")
// }

// // console.log(111)

// function test(){
// 	var input = document.getElementsByTagName("input")[2];
// 	var value = input.value;
// 	// console.log(value)
// 	var patternl = /^你好|hello$/ig;
// 	var ret = patternl.test(value);
// 	// console.log(ret);
// 	console.log("34" < 5)
// }

// var a = 1 ;
// var b = 2;
// var c = 3;
// var b= a++,c = ++a;
// console.log(a,b,c)
// a = true;
// console.log(a);
// console.log(typeof(a));
// c = Boolean(a);
// console.log(c);
// console.log(typeof(c));
// b = new Boolean(a);
// console.log(b);
// console.log(typeof(b));
// console.log(b.valueOf());

// arr = new Array();
// console.log(arr);
// arr2 = new Array(5);
// console.log(arr2);
arr3 = new Array(1,12,14,15,16);
// console.log(arr3);
arr3.push(22);
// console.log(arr3);
arr4 = arr3;
// arr3.shift()
// console.log(arr3);
// result = arr3.join(",");
// console.log(typeof(result));
// console.log("arr4",arr4)
// result = arr4.reverse();
// console.log(result)
// result = arr3.sort()
// console.log(result)
// result = arr3.sort(function(a,b){
// 	return b - a
// })
// console.log(result)
// var date = new Date()
// var timeStamp = date.getTime() +24*60*60*1000
// var date = new Date(timeStamp)
// console.log(date.toLocaleString())
function test(){
	// 测试一下
	var value = document.getElementsByTagName("input")[0].value;
	var pattern = /^你好$/ig;
	var pattern_result = pattern.test(value);
	// var all = document.all()
	if (pattern_result) {
		alert("你好啊！");
		return;
	}
	var pattern1 = /^我要吃(.+)$/ig;
	// console.log(value)
	var pattern1_result = pattern1.exec(value);
	// console.log(pattern1_result);
	if (pattern1_result != null) {
		alert("今晚吃"+ pattern1_result[1]);
		return;
	}
	var pattern2 = /^([0-9]+)加([0-9]+)等于/;
	var pattern2_result = pattern2.exec(value);
	if (pattern2_result != null && pattern2_result.length == 3) {
		var value1 = pattern2_result[1];
		var value2 = pattern2_result[2];
		var sum = parseInt(value1) + parseInt(value2);
		alert(value1+ "加" + value2 +"等于" +sum);
	}
}
function test1(){
	var value = document.getElementsByTagName("input")[0].value;
	
}