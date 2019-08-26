var span = null;
window.onload = function() {
	span = document.getElementById('span');
	// 获取input元素
	var input = document.getElementsByTagName('input')[0];
	// 给该input元素添加点击事件
	input.onclick = function() {
		// 获取元素的内容
		console.log(span.innerHTML);
		// 修改元素的内容
		span.innerHTML = '<font color="red">wangwu</font>';
	};
};






