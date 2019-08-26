$(function(){
	$('#btn1').click(function(){
		$('#div1').empty();
	});
	$('#btn2').click(function(){
		$('div').remove();
	});
	$('#btn3').click(function(){
		$('div').remove("#div1");
	});
	
});
