// 加载的循序
// var span = document.getElementById('span');
// console.log(span.innerText);
//使用onload对象：当页面加载完再执行函数里面的内容
// 第一种写法
// var span = '';
// window.onload = function () {
// 	// body...
// 	span = document.getElementById('span');
// 	console.log(span.innerText);
// 	// test();
// }
// // console.log(span);
// function test(){
// 	console.log(11);
// 	var btn = document.getElementById('btn');
// 	console.log(btn);
// 	span.innerHTML = "<font color='yellow'>李四</font>";
// }
// 第二种写法
var span = '';
// var btn =null;
window.onload = function () {
	// body...
	span = document.getElementById('span');
	var btn = document.getElementById('btn');
	console.log(btn);
	console.log(span.innerText);
	btn.onclick = function(){
	span.innerHTML = "<font color='yellow'>李四</font>";
	}
	// test();
}
