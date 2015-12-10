$(function(){
	$('#button1').click(function(){
		$('#solution').load('solutions.html #button1');
	});
	$('#button2').click(function(){
		$('#solution').load('solutions.html #button2');
	});
	$('#button3').click(function(){
		$('#solution').load('solutions.html #button3');
	});
	$('#clear').click(function(){
		$('#solution').text("");
	});
});