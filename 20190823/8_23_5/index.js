window.onload  = function () {
	// body...
	console.log(arguments);
	// 找出a标签
	var a = document.getElementsByTagName("a")[0];
	// 点击事件
	a.onclick = function(e){
		e.preventDefault();
	}
}