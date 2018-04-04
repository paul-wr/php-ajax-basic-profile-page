

function loadImg() {
  document.getElementById("img").src = "";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "img.txt", true);
  xhttp.send();
}

function setDescription() {
  var text = document.getElementById("description").value;	
  var descDiv = document.getElementById("description-display").innerHTML = text;
  document.getElementById("description").style.display = "none";
  document.getElementById("btnDesc").style.display = "NONE";
  document.getElementById("showDesc").style.display = "block";
}

function showDescription() {
	document.getElementById("description").style.display = "block";
	document.getElementById("btnDesc").style.display = "block";
	document.getElementById("showDesc").style.display = "none";
}

