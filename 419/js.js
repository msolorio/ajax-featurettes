$(function(){
	$.post('team.xml', function(data){
		$('#team').html("");
		$(data).find('management').children().each(function(){
			var xmlDoc = $(this);
			$('#team').append("<h3>" +
				xmlDoc.find('name').text() + "</h3>" +
				xmlDoc.find('title').text() + "<br>" +
				xmlDoc.find('bio').text() + "<br>");
		});
	});
});