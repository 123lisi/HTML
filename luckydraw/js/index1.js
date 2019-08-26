// 加载页面
window.onload = function() {
	// body...
	// 获取plate的对象
	var plate = document.getElementById('plate');
	// 获取hand的对象
	var hand = document.getElementById('hand');
	// 当hand点击的时候
	hand.onclick = function(){
		// 每次点击的时候都需要让转盘旋转到起始位置
		plate.style.transform = "rotate(0deg)";
		// 产生一个一到八的随机数
		var ret = Math.ceil(Math.random()*8);
		// 定义转盘最多转四圈就停止
		var quan = 1440 - 45 *(ret -1);
		console.log(quan);
		// 定义一个值来设置转盘停下来
		var a = 0;
		// 设置一个定时器
		var setintervalID = setInterval(function(){
			// console.log(111);
			// 因为转盘是由快到慢所以一开始我们需要先快后慢
			var pan_ = Math.ceil((quan - a)/10);
			a += pan_;
			// 让转盘进行转动
			// console.log(a);
			plate.style.transform = 'rotate('+ a +'deg)';
			if (a>=quan) {
				clearInterval(setintervalID);
				alert(ret);
			}
		},50);
	};


}