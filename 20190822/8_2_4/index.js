// alert("你好啊！");
// var ret = confirm("请选择");
// console.log(ret);
// if (ret) {
// 	open("http://www.baidu.com","_blank","with = 100,height=100");
// }
//location指的是URL地址
// location.href = "http://www.baidu.com";
var count = 5;
intervalID = setInterval(function(){
	// body...
	count--;
	if (count <= 0) {
		location.href = "http://www.baidu.com";
		clearTimeout(intervalID);
	}else{
		var span = document.getElementById('span');
		span.innerHTML = count + "";
	}

},1000)