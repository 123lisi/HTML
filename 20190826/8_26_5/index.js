$(function(){
	$('#btn1').click(function(){
		$('#div1').append('<p>内部后面</p>');
	});
	$('#btn2').click(function(){
		$('<p>内部后面</p>').appendTo('#div1');
	});
	$('#btn3').click(function(){
		$('#div1').prepend("<p>内部前面</p>");
	});
	$('#btn4').click(function(){
		$('<p>内部前面</p>').prependTo("#div1");
	})
	$("#btn5").click(function(){
		// console.log(11);
		$('#div1').after("<p>外部后面</p>");
	});
	$("#btn6").click(function(){
		// console.log(11);
		$('#div1').before("<p>外部前面</p>");
	});
	$("#btn7").click(function(){
		// console.log(11);
		$('<p>外部后面</p>').insertAfter("#div1");
	});
	$("#btn8").click(function(){
		// console.log(11);
		$('<p>外部前面</p>').insertBefore("#div1");
	});
});
