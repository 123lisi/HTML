// var btn = false;
// window.onload = function(){
// 	var text = true;
// 	var names = ["张三","李四","王五","赵柳","马奇"]
// 	var insetintval = setInterval(function(){
// 		if (btn) {
// 		var span = document.getElementsByTagName("span");
// 		// console.log(span[0].innerText);
// 		index = Math.ceil(Math.random() * names.length);
// 		// console.log(index);
// 		span[0].innerHTML = names[index - 1];
// 	};

// 	},100);

// }
// function test() {
// 	// body...
// 	if (btn) {
// 		var button = document.getElementsByTagName("button");
// 		button[0].innerHTML = "开始";
// 	};
// 	if (!btn) {
// 		var button = document.getElementsByTagName("button");
// 		button[0].innerHTML = "停止";
// 	};
// 	btn = !btn;
// }
// var index = 0;
// var ret = false;
// var ret_two = false;
// var a = false
function test(){
	
	var names = ["张三","李四","王五","赵柳","马奇"];
	var btn_texts = document.getElementsByTagName("button");
	var btn_text = btn_texts[0].innerText;
	
	var span = document.getElementsByTagName("span");
	// var setinterval = '';
	
		// ret = true;
		// console.log(ret);
	if (btn_text!="停止")  {
		setinterval = setInterval(function(){
		// console.log(btn_text);
		index = Math.ceil(Math.random() * names.length);
		// console.log(span);
		span[0].innerHTML = names[index-1];

		},100);
	btn_texts[0].innerHTML = "停止";	
	};
	if(btn_text=="停止"){
		clearInterval(setinterval);
		btn_texts[0].innerHTML = '开始';
		span[0].innerHTML = names[index-1];
		// console.log(names[index-1])
		
	}
	

}