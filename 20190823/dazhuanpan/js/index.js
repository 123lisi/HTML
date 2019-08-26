window.onload = function () {
	// body...
	// 获取hand控件
	var hand = document.getElementById('hand');
	// 获取pan控件
	var pan = document.getElementById("pan");
	// var coutn = 0
	// 当点击图片的时候发生旋转
	hand.onclick = function(){
		// 产生随机数
		pan.style.transform = 'rotate(0deg)';
		var randomint =Math.ceil( Math.random()*8);
		// console.log(randomint);
		// 设置转多少圈
		// console.log("正"+randomint);
		var quan = 1440 - 45 *(randomint - 1);
		console.log(quan);
		// console.log(quan);
		var a = 0;
		setIntervalID = setInterval(function(){
			total = Math.ceil((quan - a)/10);
			a += total;
			console.log("a" + a);
			pan.style.transform = 'rotate('+ (a)+'deg)';
			if (a >= quan) { 
				console.log(pan.transform);
				alert(randomint);
				clearInterval(setIntervalID);
			}
		},50)
		// alert("quan");
		
	}


}