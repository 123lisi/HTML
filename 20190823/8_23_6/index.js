window.onload  = function () {
	// 找出控件
	var input = document.getElementsByTagName("input");
	var div1 = document.getElementById("div1");
	// input点击事件
	input[0].onclick = function(e){
		alert("input触发");
		// 阻止向外传播事件
		if (e&&e.stopPropagation) {
			e.stopPropagation();
		};
	}
	// div点击事件
	div1.onclick = function(e){
		alert("div触发");
	}
	// 获取a控件
	var a = document.getElementsByTagName("a")[0];
	// 点击事件
	a.oncclick = function(e){
		return false;
	}
}