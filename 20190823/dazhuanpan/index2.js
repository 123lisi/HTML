// 加载页面
window.onload = function(){
	// 定义一个名字列表
	var names= ["张三","李四","王五","没选中"];
	// 获取点击事件
	
	var btn = document.getElementById("btn");
	// 获取第二个div
	var div2 = document.getElementById("div2");
	// 获取第二个div里面的span标签
	var spans = div2.getElementsByClassName("span");
	// console.log(spans);
	// 获取span事件
	var span = document.getElementById("span");
		// 遍历名字
		var html = ''
		for(var i = 0; i < names.length;i++){
			// console.log(i);
			 html += "<span class='span'>"+names[i]+"</span>"

		};
		div2.innerHTML = html;
	// 定义一个变量控制定时器
	var ret = false;
	// 当点击的时候我们做下面的事情
	btn.onclick = function(){
		// console.log("sa");
		// btn.value = "停止";
		// var index = 0
		if (!ret) {
			setintervalID = setInterval(function(){
			for(var i = 0; i < names.length;i++){
				spans[i].style.color= "black";
			};
			index = Math.ceil(Math.random() * names.length);
			// console.log(index);
			span.innerHTML = names[index - 1];
			spans[index - 1].style.color= "red";
		
		},100);
		btn.value = "停止";
		ret = !ret;
		}
		else{
			console.log("第二次");
			clearInterval(setintervalID);
			btn.value = "开始";
			ret = !ret;
		};	
	}

};