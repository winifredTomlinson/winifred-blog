$(document).ready(function() {
	

	$("#main").mousemove(function(){$("#articleTitle").css("display","none");$("#quote").css({display:"block"});}).mouseout(function(){$("#articleTitle").show();$("#quote").hide();});
//setTimeout("alert('5 seconds!')",5000)

});
function showHint(){
	var xmlhttp;
	if (str.length==0)
  { 
  document.getElementById("txtHint").innerHTML="";
  return;
  }
	if(window.XMLHttpRequest){
	xmlhttp = new XMLHttpRequest;
		}
	else{
		xmlhttp =new ActiveXObject("Microsoft XMLHTTP");
		}
	xmlhttp.onreadystatechange = function(){
		if(xmlhttp.readystate == 4 && xmlhttp.status == 200){
			document.getElementById("txt1").innerHTML = xml.responseText;
			}
		}
	xmlhttp.open("GET", "file:///E|AppServ/www/ajax/search.php/?q="+str, true);
	xmlhttp.send();
	}
