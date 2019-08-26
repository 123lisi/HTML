$(function(){
	// 读取元素属性
	$("#btn1").click(function(){
		value = $("img").attr('src');
		console.log(value);
	});
	// 设置元素单个属性
	$("#btn2").click(function(){
		$('img').attr('src','one.png');
	});
	//设置多个属性
	$("#btn3").click(function(){
		$('img').attr({
			'width':'300px',
			'height':'400px'
		});
	});
});
