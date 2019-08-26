$(function(){
	// 读取元素属性
	$("#btn1").click(function(){
		value = $("div").css('width');
		console.log(value);
	});
	// 设置元素单个属性
	$("#btn2").click(function(){
		$('div').css('width','600px');
	});
	//设置多个属性
	$("#btn3").click(function(){
		$('div').css({
			'width':'600px',
			'height':'600px'
		});
	});
	// 增加一个类
	$("#btn4").click(function(){
		$('div').addClass('green');
	});
	// 动态移除一个类
	$("#btn5").click(function(){
		$('div').removeClass('green');
	});
	// 动态切换增加移除类
	$('#btn6').click(function(){
		$('div').toggleClass('green');
	});


});
