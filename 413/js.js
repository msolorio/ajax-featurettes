$(function(){
	xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			xmlDoc = xhr.responseXML;
			var team = xmlDoc.getElementsByTagName("teammember");
			var html = "";
			for(i=0; i<team.length; i++){
				html +=
					xmlDoc.getElementsByTagName('name')[i]
						.childNodes[0].nodeValue + "<br>" +
					xmlDoc.getElementsByTagName('title')[i]
						.childNodes[0].nodeValue + "<br>" +
					xmlDoc.getElementsByTagName('bio')[i]
						.childNodes[0].nodeValue + "<br><br>";
			}
			document.getElementById('team').innerHTML = html;
		}
	}
	xhr.open('GET', 'team.xml', true);
	xhr.send();
});