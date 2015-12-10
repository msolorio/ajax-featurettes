$(function(){
	xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if (xhr.readyState == 4 && xhr.status == 200){
			xmlDoc = xhr.responseXML;
			var theGarden = xmlDoc.getElementsByTagName('item');
			var html = "";
			for (i = 0; i < theGarden.length; i++){
				html +=
					xmlDoc.getElementsByTagName('name')[i]
						.childNodes[0].nodeValue + "<br>" +
					xmlDoc.getElementsByTagName('description')[i]
						.childNodes[0].nodeValue + "<br><br>";

			}
			document.getElementById('the-garden').innerHTML = html;
		}
	}
	xhr.open('GET',"team.xml", true);
	xhr.send();
});