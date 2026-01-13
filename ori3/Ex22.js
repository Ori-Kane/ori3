//1Targil
var div = document.getElementById("aElement");
var aEl = document.createElement("a");
aEl.setAttribute("href", "http://www.google.com");
aEl.innerHTML = "GOOGLE";
div.appendChild(aEl);
//2Targil
var div = document.getElementById("aElement");
var img = document.createElement("img");
img.setAttribute("src", "img/1.jpg");
img.setAttribute("height", "200");
img.setAttribute("width", "200");
div.appendChild(img);
//3Targil
var div = document.getElementById("aElement");
var table = document.createElement("table");
var tr = document.createElement("tr");
var td1 = document.createElement("td");
var td2 = document.createElement("td");
var img = document.createElement("img");
img.setAttribute("src", "img/1.jpg");
img.setAttribute("height", "200");
img.setAttribute("width", "200");
var aEl = document.createElement("a");
td1.appendChild(img);
td2.appendChild(aEl);
tr.appendChild(td1);
tr.appendChild(td2);
table.appendChild(tr);
div.appendChild(table);


