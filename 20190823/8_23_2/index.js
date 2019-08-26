window.onload = function () {
	// body...
	var input = document.getElementsByTagName('input');
	console.log(input);
	var hint = document.getElementById('hint');
	//获取焦点
	input[0].onfocus = function(){
		hint.innerHTML = '用户名至少6位';
	};
	//失去焦点
	input[0].onblur = function(){
		var str = input[0].value;
		console.log(str.length);
		if (str.length<6) {
			hint.innerHTML = '<font color="red"> 你输入的长度不够 </font>';
		}
	};
}